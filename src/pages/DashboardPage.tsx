/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Flame, BookOpen, Clock, Calendar, CheckCircle2, ChevronRight, GraduationCap, Trophy, PlayCircle } from "lucide-react";
import { Course, EnrolledCourse } from "../types";

interface DashboardPageProps {
  enrolled: EnrolledCourse[];
  courses: Course[];
  completedLessons: string[];
  setView: (view: string) => void;
  setSelectedCourseId: (id: string) => void;
}

export default function DashboardPage({
  enrolled,
  courses,
  completedLessons,
  setView,
  setSelectedCourseId
}: DashboardPageProps) {
  
  // Find course full details
  const enrolledFull = enrolled.map(e => {
    const course = courses.find(c => c.id === e.courseId)!;
    
    // Calculate actual progress based on completed lessons
    const totalLessons = course.curriculum.reduce((acc, curr) => acc + curr.lessons.length, 0);
    const completedInThisCourse = course.curriculum.reduce((acc, curr) => {
      return acc + curr.lessons.filter(l => completedLessons.includes(l.id)).length;
    }, 0);
    
    const calculatedProgress = totalLessons > 0 ? Math.round((completedInThisCourse / totalLessons) * 100) : 0;
    
    return {
      ...e,
      course,
      progress: calculatedProgress,
      totalLessons,
      completedInThisCourse
    };
  });

  // Analytics
  const totalCompletedLessonsCount = completedLessons.length;
  const certificatesEarned = enrolledFull.filter(e => e.progress === 100);
  
  const handleResumeCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setView("learning");
  };

  // Custom SVG Bar Chart Study hours data (representing Monday to Sunday)
  const studyHours = [2.5, 4.0, 1.5, 5.0, 3.2, 0.5, 1.8];
  const maxHours = Math.max(...studyHours);
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300" id="student-dashboard">
      
      {/* 1. Profile Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-maroon/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex gap-4 sm:gap-6 items-center">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" 
            alt="Student profile" 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-4 ring-brand-maroon/25"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest block">Active Student Account</span>
            <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight">Romel Mejos</h1>
            <p className="text-xs text-slate-400 font-sans font-light flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              <span>UC Berkeley • Computer Science & Neuro-Computing</span>
            </p>
          </div>
        </div>

        {/* Gamified Habit Streak widgets */}
        <div className="relative z-10 flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
          <div className="p-2 bg-amber-500/10 text-amber-500 rounded-xl">
            <Flame className="w-6 h-6 fill-current animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-500 block leading-tight">4 Days Streak</span>
            <span className="text-[10px] text-slate-400 font-sans">Consistent learning!</span>
          </div>
        </div>
      </div>

      {/* 2. Highlights Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="dashboard-metrics">
        <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm space-y-1.5">
          <BookOpen className="w-5 h-5 text-brand-maroon dark:text-brand-gold" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Enrolled Courses</p>
          <p className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">{enrolled.length}</p>
        </div>
        <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm space-y-1.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Completed Lessons</p>
          <p className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">{totalCompletedLessonsCount}</p>
        </div>
        <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm space-y-1.5">
          <Clock className="w-5 h-5 text-brand-orange" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Study Time (This Week)</p>
          <p className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">18.3h</p>
        </div>
        <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm space-y-1.5">
          <Trophy className="w-5 h-5 text-amber-400 fill-current" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Certificates Earned</p>
          <p className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">{certificatesEarned.length}</p>
        </div>
      </div>

      {/* 3. Primary Content Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT TWO COLUMNS: ENROLLED COURSES LIST */}
        <div className="lg:col-span-2 space-y-6" id="dashboard-enrolled-section">
          <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">My Active Courses</h2>
          
          {enrolledFull.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm">
              <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">No Enrolled Courses</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans max-w-sm mx-auto mt-1 mb-6">
                You haven't registered in any learning tracks yet. Search our catalog to find premium university modules.
              </p>
              <button
                onClick={() => setView("catalog")}
                className="px-6 py-2.5 bg-brand-maroon text-white rounded-xl text-xs font-bold hover:bg-brand-maroon-light transition-colors shadow border border-brand-gold/15"
              >
                Explore Course Catalog
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {enrolledFull.map((item) => (
                <div 
                  key={item.courseId}
                  className="p-5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:shadow-md transition-shadow"
                >
                  {/* Course Left Info */}
                  <div className="space-y-2 flex-1 w-full">
                    <span className="text-[10px] font-bold text-brand-maroon dark:text-brand-gold uppercase tracking-wider">{item.course.id} • {item.course.category}</span>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug tracking-tight">
                      {item.course.title}
                    </h3>
                    
                    {/* Progress Slider Display */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Course Progress</span>
                        <span>{item.progress}% Completed</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-brand-maroon to-brand-orange rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans block">
                        Studied {item.completedInThisCourse} out of {item.totalLessons} total modules
                      </span>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <button
                    onClick={() => handleResumeCourse(item.courseId)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brand-maroon text-white text-xs font-bold hover:bg-brand-maroon-light shadow-md flex items-center justify-center gap-1.5 flex-shrink-0 transition-colors border border-brand-gold/15"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>{item.progress === 100 ? "Review Class" : "Continue Class"}</span>
                  </button>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: ANALYTICAL STUDY CHARTS & CERTIFICATES */}
        <div className="space-y-6" id="dashboard-sidebar-widgets">
          
          {/* A. WEEKLY STUDY ANALYSIS CUSTOM SVG CHART */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-3xl shadow-sm space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">Weekly Study Hours</h3>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-sans">Visual tracker showing analytical dedication across the last week.</p>
            </div>

            {/* Render Custom Vector SVG Bar Chart */}
            <div className="w-full h-44 flex items-end justify-between pt-4 pb-1 px-2 select-none border-b border-slate-100 dark:border-slate-700">
              {studyHours.map((hours, idx) => {
                const heightPercent = maxHours > 0 ? (hours / maxHours) * 100 : 0;
                return (
                  <div key={idx} className="flex flex-col items-center flex-1 group relative">
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow pointer-events-none transition-opacity">
                      {hours}h
                    </span>
                    
                    {/* Vector Bar */}
                    <div 
                      className={`w-4 rounded-t bg-brand-maroon group-hover:bg-brand-orange dark:bg-brand-maroon/80 dark:group-hover:bg-brand-gold transition-all duration-500 shadow-sm`}
                      style={{ height: `${Math.max(heightPercent, 5)}%` }}
                    />
                    
                    <span className="text-[9px] font-bold text-slate-400 mt-2">{weekdays[idx]}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-1">
              <span>Total hours: 18.3 hours</span>
              <span className="text-emerald-500 flex items-center gap-0.5">+12.5% vs last week</span>
            </div>
          </div>

          {/* B. VERIFIABLE CERTIFICATE WIDGET */}
          {certificatesEarned.length > 0 && (
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white p-5 rounded-3xl shadow-lg space-y-4">
              <div className="flex gap-3">
                <div className="p-2 bg-white/10 rounded-xl text-amber-200">
                  <Award className="w-6 h-6 fill-current animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider">Unsealed Certificates</h3>
                  <p className="text-[10px] text-amber-100 font-sans">You successfully completed collegiate syllabi!</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {certificatesEarned.map(item => (
                  <div key={item.courseId} className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="text-[11px] font-bold line-clamp-1">{item.course.title}</h4>
                      <span className="text-[8px] font-mono opacity-80 uppercase">SERIAL: EDU-{item.courseId}-2026</span>
                    </div>
                    
                    <button 
                      onClick={() => handleResumeCourse(item.courseId)}
                      className="text-[10px] font-extrabold uppercase tracking-wider bg-white text-amber-700 px-3 py-1 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      View Cert
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
