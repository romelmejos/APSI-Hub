/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, Star, Clock, X, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { Course } from "../types";
import CourseCard from "../components/CourseCard";

interface CatalogPageProps {
  courses: Course[];
  setView: (view: string) => void;
  setSelectedCourseId: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function CatalogPage({
  courses,
  setView,
  setSelectedCourseId,
  searchQuery,
  setSearchQuery
}: CatalogPageProps) {
  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [selectedRating, setSelectedRating] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const coursesPerPage = 6;

  // Extracted unique categories
  const categories = useMemo(() => {
    const cats = new Set(courses.map(c => c.category));
    return ["All", ...Array.from(cats)];
  }, [courses]);

  // Filtering Logic
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search query matching
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.subcategory.toLowerCase().includes(q) ||
          c.instructor.name.toLowerCase().includes(q)
      );
    }

    // Category matching
    if (selectedCategory !== "All") {
      result = result.filter(c => c.category === selectedCategory);
    }

    // Difficulty matching
    if (selectedDifficulty !== "All") {
      result = result.filter(c => c.difficulty === selectedDifficulty);
    }

    // Duration matching
    if (selectedDuration !== "All") {
      if (selectedDuration === "short") {
        result = result.filter(c => c.durationHours < 12);
      } else if (selectedDuration === "medium") {
        result = result.filter(c => c.durationHours >= 12 && c.durationHours <= 18);
      } else if (selectedDuration === "long") {
        result = result.filter(c => c.durationHours > 18);
      }
    }

    // Rating matching
    if (selectedRating !== "All") {
      const ratingLimit = parseFloat(selectedRating);
      result = result.filter(c => c.rating >= ratingLimit);
    }

    // Sorting Logic
    if (sortBy === "popular") {
      result.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [courses, searchQuery, selectedCategory, selectedDifficulty, selectedDuration, selectedRating, sortBy]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSelectedDuration("All");
    setSelectedRating("All");
    setSortBy("popular");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Pagination bounds
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage) || 1;
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * coursesPerPage;
    return filteredCourses.slice(startIndex, startIndex + coursesPerPage);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCourseClick = (id: string) => {
    setSelectedCourseId(id);
    setView("details");
  };

  return (
    <div className="pb-16 animate-in fade-in duration-300" id="catalog-page-container">
      
      {/* Header and Search */}
      <div className="mb-8 space-y-4">
        <div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">University Course Catalog</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-1">Acquire rigorous, certificate-aligned training across core science, business, and tech sectors.</p>
        </div>

        {/* Search, Sort, and Mobile Filter Trigger bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by course title, topic, or instructor..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full h-11 pl-10 pr-4 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon transition-all"
              id="catalog-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-3 w-full sm:w-auto flex-shrink-0">
            {/* Mobile filter trigger */}
            <button
              onClick={() => setShowMobileFilters(true)}
              className="md:hidden flex flex-1 sm:flex-initial items-center justify-center gap-2 px-4 h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              id="mobile-filter-trigger"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>

            {/* Sorting Select */}
            <div className="relative flex-1 sm:flex-initial">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-44 h-11 pl-9 pr-8 text-xs font-semibold uppercase tracking-wider rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-brand-maroon transition-all appearance-none cursor-pointer"
                id="catalog-sort-select"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ArrowUpDown className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== "All" || selectedDifficulty !== "All" || selectedDuration !== "All" || selectedRating !== "All" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 pt-1.5 text-xs">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] mr-1">Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-maroon/5 dark:bg-brand-maroon/25 text-brand-maroon dark:text-brand-gold border border-brand-maroon/10 dark:border-brand-gold/20 font-medium">
                Search: "{searchQuery}"
                <X className="w-3.5 h-3.5 cursor-pointer hover:text-brand-maroon-light" onClick={() => setSearchQuery("")} />
              </span>
            )}
            {selectedCategory !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                Category: {selectedCategory}
                <X className="w-3.5 h-3.5 cursor-pointer hover:text-slate-950" onClick={() => { setSelectedCategory("All"); setCurrentPage(1); }} />
              </span>
            )}
            {selectedDifficulty !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                Difficulty: {selectedDifficulty}
                <X className="w-3.5 h-3.5 cursor-pointer hover:text-slate-950" onClick={() => { setSelectedDifficulty("All"); setCurrentPage(1); }} />
              </span>
            )}
            {selectedDuration !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                Duration: {selectedDuration === "short" ? "<12 hours" : selectedDuration === "medium" ? "12-18 hours" : ">18 hours"}
                <X className="w-3.5 h-3.5 cursor-pointer hover:text-slate-950" onClick={() => { setSelectedDuration("All"); setCurrentPage(1); }} />
              </span>
            )}
            {selectedRating !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium">
                Rating: {selectedRating}+
                <X className="w-3.5 h-3.5 cursor-pointer hover:text-slate-950" onClick={() => { setSelectedRating("All"); setCurrentPage(1); }} />
              </span>
            )}
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-brand-maroon dark:text-brand-gold font-bold hover:underline ml-2"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset All</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* DESKTOP SIDEBAR FILTERS PANEL */}
        <aside className="hidden md:block space-y-6" id="desktop-filters-sidebar">
          {/* Category Filter */}
          <div className="border border-slate-200 rounded-xl bg-white dark:bg-slate-800 p-5 space-y-4 shadow-sm">
            <h3 className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Disciplines</h3>
            <div className="space-y-1.5">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-maroon/10 text-brand-maroon dark:bg-brand-maroon/30 dark:text-brand-gold"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  {cat === "All" ? "All Disciplines" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level Filter */}
          <div className="border border-slate-200 rounded-xl bg-white dark:bg-slate-800 p-5 space-y-3 shadow-sm">
            <h3 className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Difficulty Level</h3>
            <div className="space-y-2">
              {["All", "Beginner", "Intermediate", "Advanced"].map((level, idx) => (
                <label key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="difficulty"
                    checked={selectedDifficulty === level}
                    onChange={() => { setSelectedDifficulty(level); setCurrentPage(1); }}
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-brand-maroon focus:ring-brand-maroon"
                  />
                  <span>{level === "All" ? "All Levels" : level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="border border-slate-200 rounded-xl bg-white dark:bg-slate-800 p-5 space-y-3 shadow-sm">
            <h3 className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Course Duration</h3>
            <div className="space-y-2">
              {[
                { label: "All Durations", value: "All" },
                { label: "Short (<12 hours)", value: "short" },
                { label: "Medium (12-18 hours)", value: "medium" },
                { label: "Long (>18 hours)", value: "long" }
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="duration"
                    checked={selectedDuration === item.value}
                    onChange={() => { setSelectedDuration(item.value); setCurrentPage(1); }}
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-brand-maroon focus:ring-brand-maroon"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="border border-slate-200 rounded-xl bg-white dark:bg-slate-800 p-5 space-y-3 shadow-sm">
            <h3 className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-bold">Minimum Rating</h3>
            <div className="space-y-2">
              {[
                { label: "All Ratings", value: "All" },
                { label: "4.5★ and Above", value: "4.5" },
                { label: "4.8★ and Above", value: "4.8" }
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="rating"
                    checked={selectedRating === item.value}
                    onChange={() => { setSelectedRating(item.value); setCurrentPage(1); }}
                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-700 text-brand-maroon focus:ring-brand-maroon"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* COURSE GRID & PAGINATION */}
        <div className="md:col-span-3 space-y-8" id="catalog-main-content">
          {paginatedCourses.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-sm text-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-full text-slate-400 dark:text-slate-500 mb-4">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">No Courses Found</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed max-w-sm mb-6">
                We couldn't find any courses matching your filters. Try clearing some selections or searching for a different term.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-brand-maroon text-white rounded-xl text-sm font-semibold hover:bg-brand-maroon-light shadow-md transition-colors border border-brand-gold/15"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Grid block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {paginatedCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onClick={() => handleCourseClick(course.id)}
                  />
                ))}
              </div>

              {/* Pagination controls */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Showing {((currentPage - 1) * coursesPerPage) + 1} - {Math.min(currentPage * coursesPerPage, filteredCourses.length)} of {filteredCourses.length} courses
                </p>

                <div className="flex items-center gap-1.5 font-sans">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePageChange(idx + 1)}
                      className={`w-9 h-9 text-xs font-bold rounded-lg transition-colors ${
                        currentPage === idx + 1
                          ? "bg-brand-maroon text-white shadow-md shadow-brand-maroon/20 border border-brand-gold/15"
                          : "border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

      </div>

      {/* MOBILE RESPONSIVE FILTERS DRAWER / MODAL */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end md:hidden animate-in fade-in duration-200" id="mobile-filters-drawer">
          <div className="w-80 h-full bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-2xl relative animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
              <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                aria-label="Close filters drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Filters Content */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-1 divide-y divide-slate-100 dark:divide-slate-800">
              {/* Category Filter */}
              <div className="space-y-3 pb-4">
                <h3 className="font-display font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">Disciplines</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                      className={`px-3 py-2 rounded-lg text-[11px] font-bold text-center border truncate transition-all ${
                        selectedCategory === cat
                          ? "bg-brand-maroon border-brand-maroon text-white shadow-md shadow-brand-maroon/10"
                          : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {cat === "All" ? "All" : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Level Filter */}
              <div className="space-y-2 py-4">
                <h3 className="font-display font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">Difficulty Level</h3>
                <div className="space-y-2">
                  {["All", "Beginner", "Intermediate", "Advanced"].map((level, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="mobile-difficulty"
                        checked={selectedDifficulty === level}
                        onChange={() => { setSelectedDifficulty(level); setCurrentPage(1); }}
                        className="w-4.5 h-4.5 rounded border-slate-300 dark:border-slate-700 text-brand-maroon focus:ring-brand-maroon"
                      />
                      <span>{level === "All" ? "All Levels" : level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration Filter */}
              <div className="space-y-2 py-4">
                <h3 className="font-display font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">Course Duration</h3>
                <div className="space-y-2">
                  {[
                    { label: "All Durations", value: "All" },
                    { label: "Short (<12 hours)", value: "short" },
                    { label: "Medium (12-18 hours)", value: "medium" },
                    { label: "Long (>18 hours)", value: "long" }
                  ].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="mobile-duration"
                        checked={selectedDuration === item.value}
                        onChange={() => { setSelectedDuration(item.value); setCurrentPage(1); }}
                        className="w-4.5 h-4.5 rounded border-slate-300 dark:border-slate-700 text-brand-maroon focus:ring-brand-maroon"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="space-y-2 py-4">
                <h3 className="font-display font-bold text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">Minimum Rating</h3>
                <div className="space-y-2">
                  {[
                    { label: "All Ratings", value: "All" },
                    { label: "4.5★ and Above", value: "4.5" },
                    { label: "4.8★ and Above", value: "4.8" }
                  ].map((item, idx) => (
                    <label key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                      <input
                        type="radio"
                        name="mobile-rating"
                        checked={selectedRating === item.value}
                        onChange={() => { setSelectedRating(item.value); setCurrentPage(1); }}
                        className="w-4.5 h-4.5 rounded border-slate-300 dark:border-slate-700 text-brand-maroon focus:ring-brand-maroon"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 flex gap-3">
              <button
                onClick={handleResetFilters}
                className="flex-1 h-11 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors"
              >
                Reset All
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 h-11 bg-brand-maroon text-white text-xs font-bold rounded-xl hover:bg-brand-maroon-light shadow-md transition-colors border border-brand-gold/15"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
