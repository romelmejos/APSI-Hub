/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GraduationCap, Bell, Moon, Sun, Menu, X, User, BookOpen } from "lucide-react";

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  enrolledCount: number;
  notifications: Array<{ id: string; text: string; time: string; read: boolean }>;
  markNotificationsAsRead: () => void;
}

export default function Navbar({
  currentView,
  setView,
  darkMode,
  setDarkMode,
  enrolledCount,
  notifications,
  markNotificationsAsRead
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNavClick = (view: string) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  const toggleNotif = () => {
    setNotifOpen(!notifOpen);
    if (!notifOpen && unreadCount > 0) {
      markNotificationsAsRead();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FAF9F6]/90 backdrop-blur-md dark:bg-[#120005]/90 border-brand-maroon/10 dark:border-brand-gold/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick("home")} 
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo"
          >
            <div className="flex items-center -space-x-2">
              <div className="w-9 h-9 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/30 shadow-sm">
                <span className="text-xs" title="School of Computing">🛡️</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-brand-maroon flex items-center justify-center border border-brand-gold/30 shadow-md transform group-hover:scale-105 transition-all duration-200">
                <span className="text-sm" title="Student Council Foxes">🦊</span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-sm tracking-tight text-slate-900 dark:text-white uppercase">
                HAU <span className="text-brand-maroon dark:text-brand-gold">School of Computing</span>
              </span>
              <span className="text-[9px] font-bold text-brand-orange dark:text-brand-gold-dark uppercase tracking-widest mt-0.5">
                College Student Council
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-sans text-sm font-medium">
            <button
              onClick={() => handleNavClick("home")}
              className={`px-4 py-2 rounded-lg transition-colors duration-150 ${
                currentView === "home"
                  ? "bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold dark:bg-brand-maroon/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("catalog")}
              className={`px-4 py-2 rounded-lg transition-colors duration-150 ${
                currentView === "catalog"
                  ? "bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold dark:bg-brand-maroon/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              Course Catalog
            </button>
            <button
              onClick={() => handleNavClick("dashboard")}
              className={`px-4 py-2 rounded-lg transition-colors duration-150 ${
                currentView === "dashboard"
                  ? "bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold dark:bg-brand-maroon/30"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
            >
              Dashboard
            </button>
          </nav>

          {/* Controls & User Profile */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150"
              aria-label="Toggle theme mode"
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Notifications panel */}
            <div className="relative">
              <button
                onClick={toggleNotif}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150 relative"
                id="notif-btn"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                    <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">Recent Notifications</span>
                    <button 
                      onClick={() => setNotifOpen(false)} 
                      className="text-xs text-brand-maroon dark:text-brand-gold hover:underline font-medium"
                    >
                      Dismiss
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-700">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-6 text-center text-xs text-slate-400 dark:text-slate-500">
                        No notifications yet
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <div key={n.id} className={`px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-150 ${!n.read ? "bg-brand-maroon/5 dark:bg-brand-maroon/20" : ""}`}>
                          <p className="text-xs text-slate-700 dark:text-slate-200 font-sans leading-relaxed">
                            {n.text}
                          </p>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">
                            {n.time}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Student Quick Stats (Enrolled course count badge) */}
            <div 
              onClick={() => handleNavClick("dashboard")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-maroon/25 dark:border-brand-maroon/50 bg-brand-maroon/5 dark:bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold text-xs font-semibold cursor-pointer hover:bg-brand-maroon/10 dark:hover:bg-brand-maroon/25 transition-colors duration-150 animate-in fade-in zoom-in-95 duration-200"
              id="student-dashboard-shortcut"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Enrolled: {enrolledCount}</span>
            </div>

            {/* Profile Avatar */}
            <div 
              onClick={() => handleNavClick("dashboard")}
              className="w-8 h-8 rounded-full ring-2 ring-brand-maroon/25 hover:ring-brand-maroon/75 cursor-pointer overflow-hidden bg-slate-200 flex items-center justify-center transition-all duration-150"
              id="user-profile-avatar"
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" 
                alt="Student Avatar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-lg">
          <button
            onClick={() => handleNavClick("home")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150 ${
              currentView === "home"
                ? "bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold dark:bg-brand-maroon/30"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("catalog")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150 ${
              currentView === "catalog"
                ? "bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold dark:bg-brand-maroon/30"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            Course Catalog
          </button>
          <button
            onClick={() => handleNavClick("dashboard")}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-150 ${
              currentView === "dashboard"
                ? "bg-brand-maroon/10 text-brand-maroon dark:text-brand-gold dark:bg-brand-maroon/30"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            }`}
          >
            Dashboard
          </button>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 px-4 py-2">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" 
                alt="Student Avatar" 
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-bold text-slate-800 dark:text-white">Romel Mejos</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">romelmejos94@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
