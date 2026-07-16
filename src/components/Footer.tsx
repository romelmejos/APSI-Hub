/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GraduationCap, Send, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Partners Section */}
        <div className="border-b border-slate-200 dark:border-slate-900 pb-10 mb-12">
          <p className="text-center text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
            Partnering with world-class universities & academic institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 dark:opacity-40 select-none">
            <span className="font-display font-bold text-lg text-slate-700 dark:text-slate-300">STANFORD UNIVERSITY</span>
            <span className="font-display font-bold text-lg text-slate-700 dark:text-slate-300">MIT ACADEMY</span>
            <span className="font-display font-bold text-lg text-slate-700 dark:text-slate-300">YALE LABS</span>
            <span className="font-display font-bold text-lg text-slate-700 dark:text-slate-300">CALTECH SCI</span>
            <span className="font-display font-bold text-lg text-slate-700 dark:text-slate-300">UC BERKELEY</span>
          </div>
        </div>

        {/* Primary Navigation Directory */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-brand-maroon text-white border border-brand-gold/20">
                <span className="text-sm">🦊</span>
              </div>
              <span className="font-display font-black text-sm tracking-tight text-slate-900 dark:text-white uppercase">
                HAU <span className="text-brand-maroon dark:text-brand-gold">School of Computing</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Holy Angel University School of Computing College Student Council Portal. Providing academic guides, study tools, and interactive curricula to help SoC Foxes achieve academic excellence and graduate with high honors.
            </p>
          </div>

          {/* Directory Column 1 */}
          <div>
            <h4 className="font-display font-bold text-xs text-slate-950 dark:text-white mb-4 uppercase tracking-widest border-l-2 border-brand-maroon pl-2">
              Academic Curricula
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Computer Science (CS)</span></li>
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Information Technology (IT)</span></li>
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Cybersecurity Specialist</span></li>
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Deep Learning & AI</span></li>
            </ul>
          </div>

          {/* Directory Column 2 */}
          <div>
            <h4 className="font-display font-bold text-xs text-slate-950 dark:text-white mb-4 uppercase tracking-widest border-l-2 border-brand-maroon pl-2">
              Council Resources
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Freshman Support Hub</span></li>
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Student Discussion Boards</span></li>
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Lecture Video Notes</span></li>
              <li><span className="text-slate-500 dark:text-slate-400 hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer transition-colors duration-150">Classroom Dashboards</span></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-slate-950 dark:text-white uppercase tracking-widest border-l-2 border-brand-maroon pl-2">
              Fox Newsletter
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Stay updated with academic timelines, council announcements, and incoming university modules.
            </p>
            
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-950/50 animate-in fade-in duration-300">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-semibold">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="student@hau.edu.ph"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 pl-3 pr-10 text-xs rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon transition-all duration-150"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 w-8 h-8 rounded-md bg-brand-maroon text-white flex items-center justify-center hover:bg-brand-maroon-light transition-colors duration-150"
                    aria-label="Subscribe email"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && (
                  <div className="flex items-center gap-1.5 text-[10px] text-red-500 dark:text-red-400 font-medium animate-shake">
                    <ShieldAlert className="w-3 h-3 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center md:text-left">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-sans">
              © 2026 Holy Angel University School of Computing College Student Council. All rights reserved.
            </p>
            <p className="text-[11px] text-brand-maroon dark:text-brand-gold font-bold font-mono flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span>📧 socstudentcouncil@gmail.com</span>
              <span>📸 @haucscsoc</span>
              <span>🌐 haucscsoc.edu.ph</span>
            </p>
          </div>
          <div className="flex gap-6 text-xs font-sans text-slate-400 dark:text-slate-500">
            <span className="hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer">Terms of Service</span>
            <span className="hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer">Privacy Policy</span>
            <span className="hover:text-brand-maroon dark:hover:text-brand-gold cursor-pointer">Council Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
