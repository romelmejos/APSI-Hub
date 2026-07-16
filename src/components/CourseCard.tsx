/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, Clock, Users, BookOpen } from "lucide-react";
import { Course } from "../types";

interface CourseCardProps {
  key?: any;
  course: Course;
  onClick: () => void;
}

export default function CourseCard({ course, onClick }: CourseCardProps) {
  const isFree = course.price === 0;

  return (
    <div
      onClick={onClick}
      className="group flex flex-col h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-brand-maroon/30 cursor-pointer transition-all duration-200"
      id={`course-card-${course.id}`}
    >
      {/* Visual Header (Gradient Representation of Course Thumbnail) */}
      <div 
        className="h-44 w-full relative flex items-center justify-center p-6 select-none"
        style={{ background: course.image }}
      >
        {/* Soft dark overlay to guarantee white text readability */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-200" />
        
        {/* Course Code and Category Info */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/95 text-slate-900 shadow-sm">
            {course.id}
          </span>
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-900/40 text-white backdrop-blur-md">
            {course.category}
          </span>
        </div>

        {/* Difficulty Pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-sm ${
            course.difficulty === "Beginner" 
              ? "bg-emerald-500 text-white" 
              : course.difficulty === "Intermediate" 
                ? "bg-amber-500 text-white" 
                : "bg-red-500 text-white"
          }`}>
            {course.difficulty}
          </span>
        </div>

        {/* Large Decorative Icon representing Course content */}
        <div className="text-white/20 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
          <BookOpen className="w-16 h-16" />
        </div>
      </div>

      {/* Body Information */}
      <div className="flex flex-col flex-1 p-5">
        <span className="text-xs font-bold text-brand-orange dark:text-brand-gold uppercase tracking-widest mb-1.5">
          {course.subcategory}
        </span>
        <h3 className="font-display font-bold text-base text-slate-900 dark:text-white leading-snug tracking-tight mb-2 group-hover:text-brand-maroon dark:group-hover:text-brand-gold transition-colors duration-150">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-sans line-clamp-2 mb-4 leading-relaxed">
          {course.subtitle}
        </p>

        {/* Rating Block */}
        <div className="flex items-center gap-1.5 mb-4 mt-auto">
          <div className="flex items-center text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(course.rating) ? "fill-current" : "text-slate-200 dark:text-slate-700"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{course.rating}</span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">({course.reviewsCount.toLocaleString()} reviews)</span>
        </div>

        {/* Horizontal Divider */}
        <div className="h-px bg-slate-100 dark:bg-slate-700/50 mb-4" />

        {/* Course Meta (Duration / Students / Pricing) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{course.duration}</span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{course.enrolledStudents.toLocaleString()}</span>
            </span>
          </div>

          <div className="text-right">
            {isFree ? (
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded">
                Free
              </span>
            ) : (
              <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                ${course.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
