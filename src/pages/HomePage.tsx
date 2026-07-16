/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Search, Sparkles, Code, BrainCircuit, HeartHandshake, Feather, ArrowUpRight, TrendingUp, ShieldCheck, Award } from "lucide-react";
import { Course } from "../types";
import CourseCard from "../components/CourseCard";

interface HomePageProps {
  courses: Course[];
  setView: (view: string) => void;
  setSelectedCourseId: (id: string) => void;
  setSearchQuery: (query: string) => void;
}

export default function HomePage({ courses, setView, setSelectedCourseId, setSearchQuery }: HomePageProps) {
  const [localSearch, setLocalSearch] = useState("");
  const featuredCourses = courses.filter(c => c.featured);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      setSearchQuery(localSearch);
      setView("catalog");
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    setSearchQuery(categoryName);
    setView("catalog");
  };

  const handleCourseClick = (id: string) => {
    setSelectedCourseId(id);
    setView("details");
  };

  const categories = [
    {
      name: "Computer Science",
      count: "3,840 students",
      icon: Code,
      color: "from-brand-orange/10 to-brand-gold/10 border-brand-orange/20 dark:border-brand-orange/40 text-brand-orange dark:text-brand-gold"
    },
    {
      name: "Business & Finance",
      count: "2,530 students",
      icon: TrendingUp,
      color: "from-brand-maroon/10 to-brand-maroon-light/10 border-brand-maroon/20 dark:border-brand-maroon/40 text-brand-maroon dark:text-brand-gold"
    },
    {
      name: "Health & Sciences",
      count: "1,980 students",
      icon: BrainCircuit,
      color: "from-brand-gold/10 to-brand-orange/10 border-brand-gold/20 dark:border-brand-gold/40 text-brand-gold-dark dark:text-brand-gold"
    },
    {
      name: "Creative Arts",
      count: "1,420 students",
      icon: Feather,
      color: "from-brand-maroon-light/10 to-brand-gold/10 border-brand-maroon-light/20 dark:border-brand-maroon-light/40 text-brand-maroon-light dark:text-brand-gold"
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16 animate-in fade-in duration-300">
      
      {/* 1. HERO ANNOUNCEMENT SECTION (SoC STUDENT COUNCIL THEME) */}
      <section className="relative overflow-hidden bg-[#FAF9F5] dark:bg-[#110104] text-slate-900 dark:text-white rounded-3xl border border-brand-maroon/15 dark:border-brand-gold/15 shadow-xl p-8 sm:p-12 md:py-16 md:px-16" id="home-hero">
        {/* Geometric Cream/Beige Overlay Triangles */}
        <div className="absolute right-0 top-0 w-[45%] h-full bg-gradient-to-l from-brand-gold/5 via-[#F1ECE3]/20 to-transparent skew-x-12 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[30%] h-[70%] bg-gradient-to-tr from-brand-maroon/5 via-[#E06A00]/5 to-transparent -skew-y-6 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          
          {/* Dual Crests & Council Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="flex items-center -space-x-3.5">
              {/* SoC Shield Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/10 dark:bg-amber-500/20 border-2 border-brand-gold flex items-center justify-center shadow-md bg-[#FFFBEB] transform -rotate-12">
                <span className="text-xl sm:text-2xl" title="School of Computing">🛡️</span>
              </div>
              {/* Student Council Fox Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-maroon border-2 border-brand-gold flex items-center justify-center shadow-lg transform rotate-12">
                <span className="text-2xl sm:text-3xl" title="Student Council Fox Mascot">🦊</span>
              </div>
            </div>
            
            <div className="space-y-0.5">
              <h4 className="font-display font-extrabold text-[#800020] dark:text-brand-gold text-xs sm:text-sm tracking-widest uppercase leading-none">
                HOLY ANGEL UNIVERSITY
              </h4>
              <h2 className="font-display font-black text-slate-800 dark:text-slate-100 text-base sm:text-lg tracking-wider uppercase leading-none">
                SCHOOL OF COMPUTING
              </h2>
              <h3 className="font-display font-bold text-brand-orange dark:text-brand-orange-light text-[10px] sm:text-xs tracking-widest uppercase leading-none">
                COLLEGE STUDENT COUNCIL
              </h3>
            </div>
          </div>

          {/* Main Giant Typography Banner */}
          <div className="space-y-1.5 py-4 text-center select-none">
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none uppercase text-gradient bg-gradient-to-r from-brand-maroon via-red-700 to-brand-orange bg-clip-text text-transparent filter drop-shadow-sm">
              SEE YOU
            </h1>
            
            <div className="py-2.5 px-4 sm:px-8 bg-gradient-to-r from-brand-maroon via-brand-orange to-brand-gold rounded-xl sm:rounded-2xl shadow-md max-w-2xl mx-auto transform -rotate-1">
              <span className="font-display font-black text-xl sm:text-3xl md:text-4xl text-white tracking-widest uppercase block animate-pulse">
                NEXT SEMESTER,
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-none uppercase text-gradient bg-gradient-to-r from-brand-maroon via-red-600 to-[#FFB81C] bg-clip-text text-transparent filter drop-shadow-sm pt-1">
              FOXES!
            </h1>
          </div>

          {/* Lower Informational Sub-Card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center p-6 sm:p-8 bg-white dark:bg-[#1C080C] rounded-2xl border border-brand-maroon/10 dark:border-brand-gold/10 shadow-lg" id="join-card">
            
            <div className="md:col-span-3 text-center md:text-left space-y-2">
              <p className="text-base sm:text-lg font-sans text-slate-700 dark:text-slate-300 leading-snug">
                New Fox on the skulk? Join the official <span className="font-bold text-brand-orange">freshman group</span> and ask your questions!
              </p>
              
              <div className="pt-2">
                <a 
                  href="https://tinyurl.com/SOCFreshmen2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-display font-extrabold text-base sm:text-xl text-brand-maroon dark:text-brand-gold hover:text-brand-orange dark:hover:text-white transition-colors underline break-all tracking-wide"
                >
                  tinyurl.com/SOCFreshmen2026
                </a>
              </div>
            </div>

            {/* QR Code Graphic Representation */}
            <div className="flex flex-col items-center justify-center p-3 bg-[#FAF9F5] dark:bg-[#120005] rounded-xl border border-brand-gold/30 shadow-inner group cursor-pointer relative">
              <div className="w-24 h-24 bg-white p-1 rounded border border-slate-200 flex items-center justify-center relative">
                {/* Simulated QR Code pixels */}
                <div className="grid grid-cols-5 gap-1 w-full h-full p-1 opacity-90">
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-slate-900 rounded-sm"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-[#E06A00] flex items-center justify-center rounded-sm text-[8px] text-white font-extrabold">🦊</div>
                  <div className="bg-slate-900 rounded-sm"></div>
                </div>
                {/* Red scanline */}
                <div className="absolute left-0 right-0 h-0.5 bg-red-500 top-1/2 animate-bounce" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-widest">
                Scan to Join
              </span>
            </div>
          </div>

          {/* Academic Portal Course Search Bar Integration */}
          <div className="max-w-xl mx-auto space-y-4 pt-4">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-brand-maroon dark:text-brand-gold">
              🦊 SEARCH ACADEMIC COURSES & SYLLABI
            </p>
            <form onSubmit={handleSearchSubmit} className="flex items-center p-1.5 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-brand-maroon/10 dark:border-brand-gold/10" id="hero-search-form">
              <div className="flex-1 flex items-center pl-4">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search Computer Science, IT, Cybersecurity..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full h-11 border-none bg-transparent pl-3 text-slate-800 dark:text-white text-sm focus:outline-none placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-maroon text-white px-6 h-11 rounded-xl text-sm font-bold hover:bg-brand-maroon-light transition-all duration-150 shadow border border-brand-gold/15"
              >
                Search
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm">
          <div className="text-center space-y-1 border-r border-slate-100 dark:border-slate-700 last:border-none">
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-brand-maroon dark:text-brand-gold">6</p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Comprehensive Modules</p>
          </div>
          <div className="text-center space-y-1 md:border-r border-slate-100 dark:border-slate-700 last:border-none">
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-brand-orange">16</p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Deep Dive Lessons</p>
          </div>
          <div className="text-center space-y-1 border-r border-slate-100 dark:border-slate-700 last:border-none">
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-brand-maroon-light">9</p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Verified Outcomes</p>
          </div>
          <div className="text-center space-y-1 last:border-none">
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-brand-gold-dark">100%</p>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">SOC HAU Course Focus</p>
          </div>
        </div>
      </section>

      {/* 3. KEY COURSE TECHNOLOGIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-categories">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Core Curriculum Integration Stack</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-1">Master production-grade React patterns, Next.js structures, and secure server-to-client boundaries.</p>
          </div>
          <button
            onClick={() => { setSelectedCourseId("CS-101"); setView("details"); }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-maroon dark:text-brand-gold hover:gap-2.5 transition-all duration-150 uppercase tracking-wider"
          >
            <span>View Complete Syllabus</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            onClick={() => { setSearchQuery("React Elements"); setView("catalog"); }}
            className="group p-6 rounded-2xl border bg-gradient-to-br from-brand-orange/10 to-brand-gold/10 border-brand-orange/20 dark:border-brand-orange/40 text-brand-orange dark:text-brand-gold hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 w-fit shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-200">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-4 mb-1">
              JSX & Prop Architecture
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Learn destructuring, defaultProps, and structural JSX rendering.
            </p>
          </div>

          <div
            onClick={() => { setSearchQuery("Hooks"); setView("catalog"); }}
            className="group p-6 rounded-2xl border bg-gradient-to-br from-brand-maroon/10 to-brand-maroon-light/10 border-brand-maroon/20 dark:border-brand-maroon/40 text-brand-maroon dark:text-brand-gold hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 w-fit shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-200">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-4 mb-1">
              React Hooks In-Depth
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Master useState, useReducer, useEffect side effects, and cleanups.
            </p>
          </div>

          <div
            onClick={() => { setSearchQuery("Next.js"); setView("catalog"); }}
            className="group p-6 rounded-2xl border bg-gradient-to-br from-brand-gold/10 to-brand-orange/10 border-brand-gold/20 dark:border-brand-gold/40 text-brand-gold-dark dark:text-brand-gold hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 w-fit shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-200">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-4 mb-1">
              RSC Boundaries
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Determine server and client boundaries to build lightweight static resources.
            </p>
          </div>

          <div
            onClick={() => { setSearchQuery("Server Actions"); setView("catalog"); }}
            className="group p-6 rounded-2xl border bg-gradient-to-br from-brand-maroon-light/10 to-brand-gold/10 border-brand-maroon-light/20 dark:border-brand-maroon-light/40 text-brand-maroon-light dark:text-brand-gold hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 w-fit shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-200">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-4 mb-1">
              Secure Server Actions
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              Connect raw forms directly to backend endpoints safely.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-featured-courses">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Active Course Syllabus</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-1">Enroll in the accredited web integration curriculum currently running in active cohort.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course.id)}
            />
          ))}
        </div>
      </section>

      {/* 5. BRAND PROMISE / ACCREDITATION */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/40 py-16 px-4" id="home-accreditation">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-3 p-4">
            <div className="p-3 bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold rounded-xl w-fit mx-auto md:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Prof. Romel Mejos</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Curriculum engineered, taught, and evaluated directly by senior front-end software architect Prof. Romel Mejos.
            </p>
          </div>
          <div className="space-y-3 p-4">
            <div className="p-3 bg-brand-orange/10 text-brand-orange dark:text-brand-orange-light rounded-xl w-fit mx-auto md:mx-0">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">HAU SoC Accreditation</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Earn official completion status and display-ready cryptographic credentials registered under Holy Angel University.
            </p>
          </div>
          <div className="space-y-3 p-4">
            <div className="p-3 bg-brand-gold/10 text-brand-gold-dark rounded-xl w-fit mx-auto md:mx-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Active Student Forum</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
              Interact, post study issues, download code slides, and query lesson content on the course dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* 6. STUDENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-testimonials">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">Success Stories</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans max-w-xl mx-auto">See how students from leading colleges supercharged their engineering, design, and research careers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-sans font-bold text-sm text-slate-900 dark:text-white">Sarah Jenkins</p>
                <p className="text-[11px] text-slate-400">UC Berkeley, Class of 2027</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed italic">
              "The Deep Learning course on HAU EduStream was absolutely groundbreaking. The lectures had incredible mathematical rigor and the practical notebooks helped me lock down my Summer ML Research Internship at Stanford!"
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-sans font-bold text-sm text-slate-900 dark:text-white">Nathan Cole</p>
                <p className="text-[11px] text-slate-400">Columbia University, CS & Econ</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed italic">
              "The Behavioral Economics curriculum provided a spectacular bridge between cognitive psychology and micro-finance. This is much higher resolution than typical textbook work."
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80" alt="Student" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-sans font-bold text-sm text-slate-900 dark:text-white">Amara Okafor</p>
                <p className="text-[11px] text-slate-400">MIT, Biological Engineering</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed italic">
              "The Cognitive Neuroscience module is completely free yet rivals some of my core college lectures. Dr. Vance's breakdown of fMRI imaging methods was simply perfect."
            </p>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-cta">
        <div className="p-8 sm:p-12 md:p-16 bg-gradient-to-br from-brand-maroon to-brand-maroon-dark text-white rounded-3xl text-center space-y-6 shadow-xl relative overflow-hidden border border-brand-gold/20">
          {/* Subtle overlay circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/10 rounded-full blur-2xl" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Supercharge Your Study Stack Today</h2>
            <p className="text-sm sm:text-base text-indigo-100 font-sans leading-relaxed">
              Join thousands of HAU and international students currently mastering cutting edge computing and academic modules. Start with zero costs and scale as you grow.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3.5">
              <button
                onClick={() => { setSearchQuery(""); setView("catalog"); }}
                className="px-8 py-3.5 bg-white text-brand-maroon rounded-xl font-bold hover:bg-slate-50 transition-all duration-150 shadow-md transform hover:-translate-y-0.5"
              >
                Get Started For Free
              </button>
              <button
                onClick={() => setView("dashboard")}
                className="px-8 py-3.5 bg-brand-orange text-white rounded-xl font-bold border border-brand-gold/30 hover:bg-brand-orange-light transition-all duration-150"
              >
                Access My Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
