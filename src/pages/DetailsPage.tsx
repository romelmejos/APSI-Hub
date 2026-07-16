/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, Clock, Users, BookOpen, ShieldCheck, Award, MessageCircle, ChevronDown, ChevronUp, UserCheck, ArrowLeft, Globe, HelpCircle } from "lucide-react";
import { Course } from "../types";

interface DetailsPageProps {
  course: Course;
  isEnrolled: boolean;
  onEnroll: () => void;
  setView: (view: string) => void;
}

export default function DetailsPage({ course, isEnrolled, onEnroll, setView }: DetailsPageProps) {
  // Curriculum Accordion State: store expanded module indices
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    "cs-m1": true,
    "econ-m1": true,
    "bio-m1": true,
    "ds-m1": true,
    "art-m1": true,
    "eng-m1": true,
    "chem-m1": true,
    "mkt-m1": true,
  });

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleEnrollClick = () => {
    if (isEnrolled) {
      setView("learning");
    } else {
      onEnroll();
    }
  };

  return (
    <div className="pb-16 animate-in fade-in duration-300" id="details-page-container">
      
      {/* Back button link */}
      <button
        onClick={() => setView("catalog")}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold transition-colors mb-6 group"
        id="details-back-btn"
      >
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
        <span>Back to Course Catalog</span>
      </button>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN: PRIMARY DETAILS (Syllabus, Overview, Instructor, Reviews) */}
        <div className="lg:col-span-2 space-y-10" id="details-main-content">
          
          {/* 1. Header Banner Visual */}
          <div 
            className="w-full p-8 sm:p-12 rounded-3xl relative text-white flex flex-col justify-end select-none min-h-[300px]"
            style={{ background: course.image }}
          >
            {/* Dark tint protection overlay */}
            <div className="absolute inset-0 bg-black/25 rounded-3xl" />

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 rounded shadow-sm">
                  {course.id}
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white backdrop-blur-md rounded">
                  {course.category}
                </span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-200 font-sans max-w-xl font-light">
                {course.subtitle}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-slate-100 font-sans font-medium">
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-slate-300">({course.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 border-l border-white/20 pl-6">
                  <Users className="w-4 h-4" />
                  <span>{course.enrolledStudents.toLocaleString()} enrolled</span>
                </div>
                <div className="flex items-center gap-1.5 border-l border-white/20 pl-6">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Course Overview Text */}
          <section className="space-y-3" id="details-overview-section">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">About this Course</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              {course.overview}
            </p>
          </section>

          {/* 3. Learning Outcomes Checklist */}
          <section className="p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 space-y-4" id="details-outcomes-section">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white tracking-tight">What you will learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Curriculum Syllabus Accordion */}
          <section className="space-y-4" id="details-syllabus-section">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">Course Curriculum</h2>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{course.curriculum.length} Modules</span>
            </div>

            <div className="space-y-3">
              {course.curriculum.map((mod, modIdx) => {
                const isExpanded = expandedModules[mod.id];
                return (
                  <div 
                    key={mod.id}
                    className="border border-slate-200/60 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-800"
                  >
                    {/* Module Accordion Trigger */}
                    <button
                      onClick={() => toggleModule(mod.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                      id={`module-accordion-btn-${mod.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-brand-maroon/10 dark:bg-brand-gold/15 text-brand-maroon dark:text-brand-gold flex items-center justify-center text-xs font-bold">
                          {modIdx + 1}
                        </div>
                        <span className="font-sans font-bold text-sm text-slate-800 dark:text-slate-100">
                          {mod.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        <span>{mod.lessons.length} lessons</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Lesson listing */}
                    {isExpanded && (
                      <div className="border-t border-slate-100 dark:border-slate-700 divide-y divide-slate-100 dark:divide-slate-700 bg-slate-50/50 dark:bg-slate-900/10 px-4">
                        {mod.lessons.map((lesson) => (
                          <div key={lesson.id} className="py-3 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                            <div className="space-y-1">
                              <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {lesson.title}
                              </h4>
                              <p className="text-[11px] text-slate-400 dark:text-slate-500 font-sans max-w-lg leading-relaxed">
                                {lesson.description}
                              </p>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200/50 dark:border-slate-700/50 h-fit w-fit self-start sm:self-center">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 5. Instructor Profile Details */}
          <section className="space-y-4" id="details-instructor-section">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">Your Instructor</h2>
            <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-6">
              {/* Avatar circle */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200/40">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bio & Details */}
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">{course.instructor.name}</h3>
                  <p className="text-xs text-brand-orange dark:text-brand-gold font-bold font-sans">{course.instructor.title}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  {course.instructor.bio}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-slate-700 dark:text-slate-200">{course.instructor.rating} Instructor Rating</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-200">{course.instructor.studentsCount.toLocaleString()} Students</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-200">{course.instructor.coursesCount} Courses</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Student Reviews Section */}
          <section className="space-y-4" id="details-reviews-section">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">Student Reviews</h2>
            <div className="space-y-4">
              {course.reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="p-5 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={rev.avatar} alt="Student avatar" className="w-9 h-9 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">{rev.studentName}</h4>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{rev.date}</span>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex items-center text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? "fill-current" : "text-slate-200 dark:text-slate-700"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN: STICKY CHECKOUT ENROLLMENT CARD */}
        <div className="lg:sticky lg:top-24 space-y-6" id="details-sidebar-checkout">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* Price section */}
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tuition Fee</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl text-slate-900 dark:text-white">
                  {course.price === 0 ? "FREE" : `$${course.price}`}
                </span>
                {course.price > 0 && <span className="text-xs text-slate-400 line-through font-sans">$249 USD</span>}
              </div>
            </div>

            {/* Enroll / Call to action Button */}
            <button
              onClick={handleEnrollClick}
              className={`w-full py-4 rounded-xl font-bold font-sans text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                isEnrolled
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10"
                  : "bg-brand-maroon hover:bg-brand-maroon-light text-white shadow-brand-maroon/15 border border-brand-gold/15"
              }`}
              id="details-enroll-cta"
            >
              {isEnrolled ? (
                <>
                  <UserCheck className="w-4 h-4" />
                  <span>Go to Active Class</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4" />
                  <span>Enroll in Cohort</span>
                </>
              )}
            </button>

            {/* Inclusions Check list */}
            <div className="space-y-4 pt-2">
              <h4 className="font-display font-bold text-xs text-slate-800 dark:text-white uppercase tracking-widest">This syllabus includes:</h4>
              
              <ul className="space-y-3 text-xs font-sans text-slate-500 dark:text-slate-400">
                <li className="flex gap-2.5 items-center">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{course.duration} hours of core lectures</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Award className="w-4 h-4 text-slate-400" />
                  <span>Verifiable Certificate of Completion</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>100% Online & self-paced learning</span>
                </li>
                <li className="flex gap-2.5 items-center">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  <span>Access to dynamic peer discussion boards</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-700" />

            {/* Gurantee Badge */}
            <div className="flex gap-3 items-start">
              <HelpCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-normal font-sans">
                Full course accessibility remains valid for the entire collegiate tenure. Satisfactory academic progress is tracked autonomously in your student profile.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
