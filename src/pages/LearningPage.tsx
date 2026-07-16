/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, CheckSquare, Square, ChevronRight, FileText, Download, MessageSquare, ThumbsUp, Send, Bookmark, Trash2, ArrowLeft, AlertCircle } from "lucide-react";
import { Course, Lesson, Note, DiscussionPost, DiscussionReply } from "../types";

interface LearningPageProps {
  course: Course;
  completedLessons: string[];
  toggleLessonCompleted: (lessonId: string) => void;
  setView: (view: string) => void;
  triggerNotification: (text: string) => void;
}

export default function LearningPage({
  course,
  completedLessons,
  toggleLessonCompleted,
  setView,
  triggerNotification
}: LearningPageProps) {
  // Navigation & Active States
  const [activeLesson, setActiveLesson] = useState<Lesson>(course.curriculum[0].lessons[0]);
  const [useEmbed, setUseEmbed] = useState(!!activeLesson.embedHtml);

  useEffect(() => {
    setUseEmbed(!!activeLesson.embedHtml);
  }, [activeLesson]);

  const [activeTab, setActiveTab] = useState<"notes" | "discussion" | "resources">("notes");
  
  // Video Player Ref & States
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [videoLoadError, setVideoLoadError] = useState(false);

  // Notes State
  const [noteText, setNoteText] = useState("");
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);

  // Discussion State
  const [discussions, setDiscussions] = useState<DiscussionPost[]>([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [replyInputs, setReplyInputs] = useState<Record<string, string>>({});

  // Calculations
  const totalLessonsCount = course.curriculum.reduce((acc, curr) => acc + curr.lessons.length, 0);
  const completedLessonsCount = course.curriculum.reduce((acc, curr) => {
    return acc + curr.lessons.filter(l => completedLessons.includes(l.id)).length;
  }, 0);
  const progressPercent = Math.round((completedLessonsCount / totalLessonsCount) * 100) || 0;

  // Initialize data (Notes and Discussions)
  useEffect(() => {
    // Load Notes
    const notesKey = `edulearn_notes_${course.id}`;
    const localNotes = localStorage.getItem(notesKey);
    if (localNotes) {
      setSavedNotes(JSON.parse(localNotes));
    } else {
      setSavedNotes([]);
    }

    // Load Discussions
    const discKey = `edulearn_discussion_${course.id}`;
    const localDisc = localStorage.getItem(discKey);
    if (localDisc) {
      setDiscussions(JSON.parse(localDisc));
    } else {
      // Default placeholder discussions per course to make board active
      const defaults: DiscussionPost[] = [
        {
          id: "post-1",
          courseId: course.id,
          title: `How should we prepare for the ${course.id} midterm review?`,
          content: "Has anyone summarized the core formulas/concepts from Module 1? The backpropagation and loss functions have quite a few derivations.",
          author: "Liam Carter",
          authorRole: "Student",
          avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=80",
          likes: 8,
          createdAt: "2 days ago",
          replies: [
            {
              id: "rep-1",
              author: "Dr. Clara Alvarez",
              authorRole: "Instructor",
              avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
              content: "I recommend reviewing the practice worksheet in the Resources tab first. Focus heavily on deriving the local gradients!",
              createdAt: "1 day ago"
            }
          ]
        },
        {
          id: "post-2",
          courseId: course.id,
          title: "Study group for final project capstone",
          content: "Looking to form a virtual team of 3 to co-develop our final practical implementation. I'm based in UTC-5. Drop your discord handles below!",
          author: "Maya Lin",
          authorRole: "Student",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80",
          likes: 4,
          createdAt: "3 days ago",
          replies: []
        }
      ];
      setDiscussions(defaults);
      localStorage.setItem(discKey, JSON.stringify(defaults));
    }
  }, [course]);

  // Handle Video Time Update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Video Action Controls
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          setVideoLoadError(false);
        }).catch(() => {
          setIsPlaying(false);
          setVideoLoadError(true);
        });
      }
    }
  };

  const handleTimelineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      videoRef.current.muted = vol === 0;
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (videoRef.current) {
      videoRef.current.muted = nextMute;
    }
  };

  const restartVideo = () => {
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // Formating seconds (e.g. 75 => "01:15")
  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Switch Active Lesson
  const selectLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setCurrentTime(0);
    setIsPlaying(false);
    setVideoLoadError(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  // Notes Actions
  const handleCaptureTimestamp = () => {
    const timestampStr = formatTime(currentTime);
    triggerNotification(`Captured video timestamp ${timestampStr}`);
    // Append tag to note text area
    setNoteText(prev => prev + ` [at ${timestampStr}] `);
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    const newNote: Note = {
      id: `note-${Date.now()}`,
      courseId: course.id,
      lessonId: activeLesson.id,
      lessonTitle: activeLesson.title,
      timestamp: formatTime(currentTime),
      timestampSeconds: currentTime,
      text: noteText,
      createdAt: new Date().toLocaleDateString()
    };

    const nextNotes = [newNote, ...savedNotes];
    setSavedNotes(nextNotes);
    localStorage.setItem(`edulearn_notes_${course.id}`, JSON.stringify(nextNotes));
    setNoteText("");
    triggerNotification("Study note successfully pinned.");
  };

  const handleDeleteNote = (id: string) => {
    const nextNotes = savedNotes.filter(n => n.id !== id);
    setSavedNotes(nextNotes);
    localStorage.setItem(`edulearn_notes_${course.id}`, JSON.stringify(nextNotes));
    triggerNotification("Note deleted.");
  };

  const handleJumpToNoteTime = (seconds: number, lessonId: string) => {
    // Locate the lesson
    const lessonMatch = course.curriculum
      .flatMap(m => m.lessons)
      .find(l => l.id === lessonId);

    if (lessonMatch) {
      setActiveLesson(lessonMatch);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = seconds;
          setCurrentTime(seconds);
          videoRef.current.play().then(() => setIsPlaying(true));
        }
      }, 300);
      triggerNotification(`Jumping to lesson "${lessonMatch.title}"`);
    }
  };

  // Discussion Board Actions
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const newPost: DiscussionPost = {
      id: `post-${Date.now()}`,
      courseId: course.id,
      title: newPostTitle,
      content: newPostContent,
      author: "Romel Mejos",
      authorRole: "Student",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80",
      likes: 1,
      createdAt: "Just now",
      replies: []
    };

    const nextDisc = [newPost, ...discussions];
    setDiscussions(nextDisc);
    localStorage.setItem(`edulearn_discussion_${course.id}`, JSON.stringify(nextDisc));
    setNewPostTitle("");
    setNewPostContent("");
    triggerNotification("Question posted to classroom.");
  };

  const handleLikePost = (id: string) => {
    const nextDisc = discussions.map(post => {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setDiscussions(nextDisc);
    localStorage.setItem(`edulearn_discussion_${course.id}`, JSON.stringify(nextDisc));
    triggerNotification("Upvoted discussion post.");
  };

  const handleAddReply = (postId: string) => {
    const text = replyInputs[postId];
    if (!text || !text.trim()) return;

    const newReply: DiscussionReply = {
      id: `reply-${Date.now()}`,
      author: "Romel Mejos",
      authorRole: "Student",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80",
      content: text,
      createdAt: "Just now"
    };

    const nextDisc = discussions.map(post => {
      if (post.id === postId) {
        return { ...post, replies: [...post.replies, newReply] };
      }
      return post;
    });

    setDiscussions(nextDisc);
    localStorage.setItem(`edulearn_discussion_${course.id}`, JSON.stringify(nextDisc));
    setReplyInputs(prev => ({ ...prev, [postId]: "" }));
    triggerNotification("Reply posted.");
  };

  // Mock Resources Download Action
  const triggerDownload = (fileName: string) => {
    triggerNotification(`Simulated download: "${fileName}" has started.`);
  };

  return (
    <div className="pb-16 animate-in fade-in duration-300" id="learning-workspace">
      
      {/* Header and Back Link */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <button
          onClick={() => setView("details")}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold transition-colors group w-fit"
          id="learning-back-btn"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Course Info</span>
        </button>

        {/* Progress HUD bar */}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 px-4 py-2 rounded-xl shadow-sm">
          <div className="text-right">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Course Completed</span>
            <span className="text-xs font-extrabold text-slate-800 dark:text-slate-100 font-mono">{progressPercent}% ({completedLessonsCount}/{totalLessonsCount} lessons)</span>
          </div>
          <div className="w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT TWO COLUMNS: DYNAMIC VIDEO PLAYER AND WRITING TABS */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* A. CUSTOM INTERACTIVE VIDEO PLAYER WITH PROFESSOR'S DESK AESTHETIC */}
          <div 
            className={`rounded-2xl overflow-hidden relative group transition-all duration-300 ${
              useEmbed 
                ? "bg-slate-950 border-[5px] border-brand-maroon shadow-[0_25px_60px_-15px_rgba(128,0,32,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(128,0,32,0.35)] ring-1 ring-brand-gold/40" 
                : "bg-slate-900 border border-slate-950 shadow-xl"
            }`} 
            id="workspace-video-player"
          >
            
            {/* Professor's Desk Badge / Nameplate */}
            {useEmbed && (
              <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-brand-maroon to-brand-maroon-dark text-brand-gold border border-brand-gold/30 px-3 py-1 rounded-md shadow-md text-[9px] font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 backdrop-blur-sm pointer-events-none select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                HAU Lectern • Prof. Mejos
              </div>
            )}

            {/* Player Source Selector (only shown if embedHtml is available for the active lesson) */}
            {activeLesson.embedHtml && (
              <div className="absolute top-3 left-3 z-20 flex gap-1 bg-slate-950/85 p-1 rounded-lg border border-white/10 backdrop-blur-sm shadow-md transition-opacity group-hover:opacity-100">
                <button
                  onClick={() => setUseEmbed(true)}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-all ${
                    useEmbed
                      ? "bg-brand-maroon text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                   Lecture 
                </button>
                <button
                  onClick={() => setUseEmbed(false)}
                  className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-all ${
                    !useEmbed
                      ? "bg-brand-maroon text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Interactive Simulator
                </button>
              </div>
            )}

            {/* Real HTML5 video tag */}
            <video
              ref={videoRef}
              src={activeLesson.videoUrl}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className={`w-full aspect-video object-contain ${useEmbed ? "hidden" : "block"}`}
              onClick={handlePlayPause}
              id="html5-video-tag"
            />

            {/* Embedded Iframe Player */}
            {useEmbed && activeLesson.embedHtml && (
              <div 
                className="w-full aspect-video bg-black flex items-center justify-center overflow-hidden [&>div]:w-full [&>div]:h-full [&>div]:relative [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:w-full [&_iframe]:h-full"
                dangerouslySetInnerHTML={{ __html: activeLesson.embedHtml }}
              />
            )}

            {/* Video Error Overlay Fallback */}
            {!useEmbed && videoLoadError && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center text-center p-6 text-white z-10">
                <AlertCircle className="w-12 h-12 text-rose-500 mb-3 animate-bounce" />
                <h4 className="font-display font-bold text-base">Network Player Constraint</h4>
                <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed mt-1 mb-4">
                  The direct media connection is blocked or timed out by sandboxed iframe security policies. No worries! Use our active simulation simulation or retry the clip.
                </p>
                <button
                  onClick={() => { setVideoLoadError(false); setIsPlaying(true); if (videoRef.current) videoRef.current.play(); }}
                  className="px-5 py-2 bg-brand-maroon text-white rounded-lg text-xs font-bold hover:bg-brand-maroon-light shadow border border-brand-gold/15"
                >
                  Override and Load Video
                </button>
              </div>
            )}

            {/* Premium Custom Player overlay HUD bar (visible on group-hover) */}
            {!useEmbed && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col gap-3 transition-opacity duration-300 opacity-90 group-hover:opacity-100 select-none">
                
                {/* Timeline scrub slider */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-bold text-white/90">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleTimelineChange}
                    className="flex-1 h-1 bg-white/30 rounded-full appearance-none cursor-pointer accent-brand-maroon"
                    id="video-timeline-slider"
                  />
                  <span className="text-[10px] font-mono font-bold text-white/90">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Player control panel buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Play / Pause Toggle */}
                    <button
                      onClick={handlePlayPause}
                      className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
                      aria-label="Play/Pause Video"
                      id="video-play-btn"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>

                    {/* Restart */}
                    <button
                      onClick={restartVideo}
                      className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Restart Video"
                    >
                      <RotateCcw className="w-4.5 h-4.5" />
                    </button>

                    {/* Volume Slider Block */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={toggleMute}
                        className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Mute Video"
                      >
                        {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5" />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-16 h-1 bg-white/30 rounded-full appearance-none accent-brand-maroon"
                      />
                    </div>
                  </div>

                  {/* Right widgets */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] bg-white/10 text-white font-semibold font-sans uppercase tracking-wider px-2 py-0.5 rounded border border-white/10">
                      HD 1080p
                    </span>
                    
                    {/* Full screen */}
                    <button
                      onClick={handleFullScreen}
                      className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
                      aria-label="Toggle Fullscreen"
                    >
                      <Maximize2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Active Lesson Description */}
          <div className="space-y-1 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
            <h2 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Currently Studying: {activeLesson.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed pt-1">
              {activeLesson.description}
            </p>
          </div>

          {/* B. WRITING WORKSPACE TABS (Notes, Discussion, Resources) */}
          <div className="border border-slate-200/60 dark:border-slate-700/60 bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden" id="workspace-tabs-card">
            
            {/* Header Tabs */}
            <div className="border-b border-slate-100 dark:border-slate-700 flex bg-slate-50 dark:bg-slate-800/50">
              <button
                onClick={() => setActiveTab("notes")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                  activeTab === "notes"
                    ? "border-brand-maroon text-brand-maroon dark:text-brand-gold bg-white dark:bg-slate-800"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Lecture Notes
              </button>
              <button
                onClick={() => setActiveTab("discussion")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                  activeTab === "discussion"
                    ? "border-brand-maroon text-brand-maroon dark:text-brand-gold bg-white dark:bg-slate-800"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Classroom Discussion Board
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider text-center border-b-2 transition-all ${
                  activeTab === "resources"
                    ? "border-brand-maroon text-brand-maroon dark:text-brand-gold bg-white dark:bg-slate-800"
                    : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                Downloads & Assets
              </button>
            </div>

            {/* TAB WINDOW 1: MY LECTURE NOTES */}
            {activeTab === "notes" && (
              <div className="p-6 space-y-6" id="tab-window-notes">
               
                  
                    <div className="w-full">
                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {activeLesson.lessonMD}
                      </ReactMarkdown>
                    </div>
             


                {/* Saved list */}
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Saved Lecture Notes ({savedNotes.length})</h3>
                  
                  {savedNotes.length === 0 ? (
                    <p className="text-xs text-slate-400 text-center py-6">No note pins saved yet. Capture timestamps to link notes directly to the video!</p>
                  ) : (
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {savedNotes.map((n) => (
                        <div key={n.id} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200/50 dark:border-slate-800/50 flex justify-between gap-4">
                          <div className="space-y-1.5 flex-1">
                            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                              {/* Clicking this badge will seek video */}
                              <button
                                onClick={() => handleJumpToNoteTime(n.timestampSeconds, n.lessonId)}
                                className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-maroon dark:text-brand-gold bg-brand-maroon/5 dark:bg-brand-maroon/20 border border-brand-maroon/10 dark:border-brand-gold/25 px-2 py-0.5 rounded hover:bg-brand-maroon/15 dark:hover:bg-brand-maroon/30 transition-colors"
                                title="Click to jump to this video time"
                              >
                                <Play className="w-2.5 h-2.5 fill-current" />
                                <span>{n.timestamp}</span>
                              </button>
                              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">In Lesson: {n.lessonTitle}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                              {n.text}
                            </p>
                          </div>

                          <button
                            onClick={() => handleDeleteNote(n.id)}
                            className="text-slate-400 hover:text-red-500 self-start p-1"
                            aria-label="Delete note pin"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB WINDOW 2: CLASSROOM DISCUSSION BOARD */}
            {activeTab === "discussion" && (
              <div className="p-6 space-y-8" id="tab-window-discussion">
                {/* Ask a new question form */}
                <h4 className="text-xs font-bold text-brand-maroon dark:text-brand-gold uppercase tracking-widest">SANDBOX</h4>
                    <iframe 
                        height="400" 
                        style={{ width: "100%" }} 
                        scrolling="no" 
                        title="React JSX Demo" 
                        src="https://codepen.io" 
                        frameBorder="0" 
                        loading="lazy" 
                        allowTransparency={true} 
                        allowFullScreen={true}
                      >
                        See the Pen <a href="https://codepen.io">React JSX Demo</a> on CodePen.
                      </iframe>

                {/* Posts listing */}
                <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Classroom Topics ({discussions.length})</h3>
                  
                  <div className="space-y-4 max-h-[450px] overflow-y-auto pr-1">
                    {discussions.map((post) => (
                      <div key={post.id} className="p-5 border border-slate-200/60 dark:border-slate-700 bg-white dark:bg-slate-800/40 rounded-xl space-y-4">
                        
                        {/* Post Header */}
                        <div className="flex justify-between gap-4">
                          <div className="flex gap-3">
                            <img src={post.avatar} alt="Author" className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
                            <div>
                              <h4 className="font-sans font-bold text-xs text-slate-900 dark:text-white">{post.author}</h4>
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                                <span className="font-semibold text-brand-maroon dark:text-brand-gold uppercase">{post.authorRole}</span>
                                <span>•</span>
                                <span>{post.createdAt}</span>
                              </div>
                            </div>
                          </div>

                          {/* Upvotes */}
                          <button
                            onClick={() => handleLikePost(post.id)}
                            className="inline-flex items-center gap-1 px-2.5 h-7 rounded bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 transition-colors"
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span>{post.likes}</span>
                          </button>
                        </div>

                        {/* Post content */}
                        <div className="space-y-1.5 pl-1">
                          <h5 className="font-sans font-bold text-sm text-slate-900 dark:text-white">{post.title}</h5>
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{post.content}</p>
                        </div>

                        {/* Sub Replies */}
                        {post.replies.length > 0 && (
                          <div className="border-l-2 border-slate-100 dark:border-slate-700 ml-4 pl-4 space-y-3.5 pt-2">
                            {post.replies.map((rep) => (
                              <div key={rep.id} className="flex gap-3">
                                <img src={rep.avatar} alt="Replier" className="w-6 h-6 rounded-full object-cover" referrerPolicy="no-referrer" />
                                <div className="space-y-1 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-lg flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white">{rep.author}</span>
                                    <span className="text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{rep.authorRole}</span>
                                  </div>
                                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed">{rep.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Quick reply composition block */}
                        <div className="flex gap-2 pl-4">
                          <input
                            type="text"
                            placeholder="Write a reply..."
                            value={replyInputs[post.id] || ""}
                            onChange={(e) => setReplyInputs(prev => ({ ...prev, [post.id]: e.target.value }))}
                            className="flex-1 text-xs p-2.5 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none"
                          />
                          <button
                            onClick={() => handleAddReply(post.id)}
                            disabled={!(replyInputs[post.id] || "").trim()}
                            className="p-2.5 bg-brand-maroon hover:bg-brand-maroon-light disabled:opacity-40 text-white rounded-lg transition-colors flex items-center justify-center border border-brand-gold/15"
                            aria-label="Send reply"
                          >
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB WINDOW 3: DOWNLOADS & ASSETS */}
            {activeTab === "resources" && (
              <div className="p-6 space-y-5" id="tab-window-resources">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Classroom Materials</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Full Syllabus Slides.pdf", type: "PDF Document", size: "6.8 MB" },
                    { name: "Practice Worksheet Term-1.docx", type: "Word Document", size: "1.4 MB" },
                    { name: "Syllabus Source Codes.zip", type: "Zip Archive", size: "18.5 MB" },
                    { name: "Reference Reading List.pdf", type: "PDF Document", size: "2.1 MB" }
                  ].map((res, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-xl border border-slate-200/60 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between gap-4 hover:border-brand-maroon dark:hover:border-brand-gold transition-colors"
                    >
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[180px] sm:max-w-[220px]" title={res.name}>
                          {res.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-sans">
                          {res.type} • {res.size}
                        </p>
                      </div>

                      <button
                        onClick={() => triggerDownload(res.name)}
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-brand-maroon dark:hover:text-brand-gold transition-colors"
                        aria-label={`Download ${res.name}`}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* RIGHT COLUMN: ACTIVE SYLLABUS LESSON NAVIGATION */}
        <div className="space-y-6" id="learning-sidebar-curriculum">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg p-5 space-y-4">
            
            <div className="space-y-1">
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Lesson Navigation</h3>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-sans">Check individual checkboxes to mark lessons completed and progress.</p>
            </div>

            {/* Syllabus Modules stack */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-700">
              {course.curriculum.map((mod, modIdx) => (
                <div key={mod.id} className="pt-3.5 first:pt-0 space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Mod {modIdx + 1}: {mod.title.replace(/Module \d+:\s*/, "")}
                  </h4>

                  <div className="space-y-1.5">
                    {mod.lessons.map((lesson) => {
                      const isActive = activeLesson.id === lesson.id;
                      const isDone = completedLessons.includes(lesson.id);

                      return (
                        <div
                          key={lesson.id}
                          className={`flex items-start gap-2.5 p-2 rounded-xl transition-all cursor-pointer ${
                            isActive
                              ? "bg-brand-maroon/5 dark:bg-brand-gold/10 border-l-4 border-brand-maroon"
                              : "hover:bg-slate-50 dark:hover:bg-slate-700/30"
                          }`}
                        >
                          {/* Checkbox triggers lesson completion toggle */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLessonCompleted(lesson.id);
                            }}
                            className="text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 p-0.5"
                            aria-label={`Toggle completion of ${lesson.title}`}
                          >
                            {isDone ? (
                              <CheckSquare className="w-4 h-4 text-emerald-500 fill-current bg-white dark:bg-slate-800" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-300 dark:text-slate-600 hover:text-slate-500" />
                            )}
                          </button>

                          {/* Lesson Text Clicking switches player lesson */}
                          <div 
                            onClick={() => selectLesson(lesson)}
                            className="flex-1 space-y-0.5 text-left select-none"
                          >
                            <span className={`text-xs font-bold block leading-snug ${
                              isActive 
                                ? "text-brand-maroon dark:text-brand-gold font-extrabold" 
                                : isDone 
                                  ? "text-slate-500 dark:text-slate-400 line-through" 
                                  : "text-slate-700 dark:text-slate-300"
                            }`}>
                              {lesson.title}
                            </span>
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1">
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>{lesson.duration}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
