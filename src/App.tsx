/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import DetailsPage from "./pages/DetailsPage";
import LearningPage from "./pages/LearningPage";
import DashboardPage from "./pages/DashboardPage";
import { COURSES } from "./data/courses";
import { EnrolledCourse } from "./types";
import { CheckCircle2, X, Award, GraduationCap, ArrowRight, BellRing } from "lucide-react";

export default function App() {
  // 1. ROUTING AND ACTIVE SELECTION STATES
  const [currentView, setView] = useState<string>("home");
  const [selectedCourseId, setSelectedCourseId] = useState<string>("CS-101");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 2. THEME STATES
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("edulearn_dark_mode");
    return saved === "true";
  });

  // 3. ENROLLMENT & LESSON COMPLETIONS STATES
  const [enrolled, setEnrolled] = useState<EnrolledCourse[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // 4. NOTIFICATIONS STATE
  const [notifications, setNotifications] = useState<Array<{ id: string; text: string; time: string; read: boolean }>>([]);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);

  // 5. ENROLLMENT MODAL STATES
  const [showEnrollSuccessModal, setShowEnrollSuccessModal] = useState<boolean>(false);
  const [justEnrolledCourseTitle, setJustEnrolledCourseTitle] = useState<string>("");

  // Initialize theme mode
  useEffect(() => {
    localStorage.setItem("edulearn_dark_mode", darkMode.toString());
  }, [darkMode]);

  // Sync / Initialize User enrollment databases
  useEffect(() => {
    // 1. Load enrollment
    const savedEnroll = localStorage.getItem("edulearn_enrolled");
    const savedLessons = localStorage.getItem("edulearn_completed_lessons");

    if (savedEnroll && savedLessons) {
      setEnrolled(JSON.parse(savedEnroll));
      setCompletedLessons(JSON.parse(savedLessons));
    } else {
      // Pre-enroll student in CS-101 to make the dashboard render beautifully on first launch!
      const initialEnroll: EnrolledCourse[] = [
        {
          courseId: "CS-101",
          progress: 18, // Dynamic progress on lessons completion
          lastLessonId: "cs-l1",
          completedLessons: ["cs-l1"],
          enrolledAt: new Date().toLocaleDateString()
        }
      ];
      setEnrolled(initialEnroll);
      setCompletedLessons(["cs-l1"]);
      
      localStorage.setItem("edulearn_enrolled", JSON.stringify(initialEnroll));
      localStorage.setItem("edulearn_completed_lessons", JSON.stringify(["cs-l1"]));
    }

    // 2. Load Notifications
    const defaultNotifs = [
      { id: "notif-1", text: "Welcome to the Application and System Integration (CS-101) Course Portal! Prof. Romel Mejos welcomes you.", time: "Just now", read: false },
      { id: "notif-2", text: "You have been registered in CS-101. Access your curriculum dashboard to start streaming lectures.", time: "Just now", read: false }
    ];
    setNotifications(defaultNotifs);
  }, []);

  // Sync to local storage on enrollment state update
  const syncEnrollment = (nextEnroll: EnrolledCourse[], nextLessons: string[]) => {
    setEnrolled(nextEnroll);
    setCompletedLessons(nextLessons);
    localStorage.setItem("edulearn_enrolled", JSON.stringify(nextEnroll));
    localStorage.setItem("edulearn_completed_lessons", JSON.stringify(nextLessons));
  };

  // Trigger floating alert HUD notification
  const triggerNotification = (text: string) => {
    setActiveAlert(text);
    
    // Add to top bell notifications list
    const newNotif = {
      id: `notif-${Date.now()}`,
      text,
      time: "Just now",
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);

    // Clear floating prompt after 4 seconds
    setTimeout(() => {
      setActiveAlert(null);
    }, 4500);
  };

  // Toggle lesson complete state
  const toggleLessonCompleted = (lessonId: string) => {
    let nextLessons = [...completedLessons];
    const isAlreadyDone = nextLessons.includes(lessonId);

    if (isAlreadyDone) {
      nextLessons = nextLessons.filter(id => id !== lessonId);
      triggerNotification("Marked lesson as incomplete.");
    } else {
      nextLessons.push(lessonId);
      triggerNotification("Congratulations! Lesson marked complete.");
    }

    // Update progress percentage on enrolled course
    const nextEnroll = enrolled.map(e => {
      const courseMatch = COURSES.find(c => c.id === e.courseId);
      if (!courseMatch) return e;

      // Find all lessons for this course
      const allLessonIds = courseMatch.curriculum.flatMap(m => m.lessons.map(l => l.id));
      const hasCompletedThisLesson = allLessonIds.includes(lessonId);

      if (hasCompletedThisLesson) {
        const completedInThisCourse = allLessonIds.filter(id => nextLessons.includes(id)).length;
        const progressPercent = Math.round((completedInThisCourse / allLessonIds.length) * 100);
        return {
          ...e,
          completedLessons: allLessonIds.filter(id => nextLessons.includes(id)),
          progress: progressPercent
        };
      }
      return e;
    });

    syncEnrollment(nextEnroll, nextLessons);
  };

  // Enroll in Course
  const handleEnrollCourse = () => {
    const course = COURSES.find(c => c.id === selectedCourseId);
    if (!course) return;

    // Verify if already enrolled
    if (enrolled.some(e => e.courseId === selectedCourseId)) {
      setView("learning");
      return;
    }

    const newEnroll: EnrolledCourse = {
      courseId: selectedCourseId,
      progress: 0,
      lastLessonId: course.curriculum[0].lessons[0].id,
      completedLessons: [],
      enrolledAt: new Date().toLocaleDateString()
    };

    const nextEnroll = [...enrolled, newEnroll];
    syncEnrollment(nextEnroll, completedLessons);

    setJustEnrolledCourseTitle(course.title);
    setShowEnrollSuccessModal(true);
    triggerNotification(`Successfully registered in ${course.id}!`);
  };

  const markNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Active course reference matching routing ID
  const activeCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES[0];
  const activeEnrollStatus = enrolled.some(e => e.courseId === selectedCourseId);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-[#FDFBF7] via-[#FAF9F6] to-[#F5F2EC] text-slate-800 dark:from-[#0B0103] dark:via-[#120105] dark:to-[#1A030A] dark:text-slate-100 transition-all-custom relative overflow-hidden">
        {/* Subtle decorative geometric background grids/polygons in light mode to match the attached announcement card */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80002005_1px,transparent_1px),linear-gradient(to_bottom,#80002005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E06A00]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-maroon/5 blur-[120px] pointer-events-none" />
        
        {/* TOP NAVIGATION BAR */}
        <Navbar
          currentView={currentView}
          setView={setView}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          enrolledCount={enrolled.length}
          notifications={notifications}
          markNotificationsAsRead={markNotificationsAsRead}
        />

        {/* FLOATING HUD NOTIFICATION ALERT PANEL */}
        {activeAlert && (
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex items-center gap-3 px-4.5 py-3 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl max-w-sm">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <BellRing className="w-4.5 h-4.5 animate-bounce" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold leading-normal font-sans">
                  {activeAlert}
                </p>
              </div>
              <button onClick={() => setActiveAlert(null)} className="text-white/40 hover:text-white" aria-label="Dismiss alert">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* CORE ROUTING PAGES LAYOUT */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {currentView === "home" && (
            <HomePage
              courses={COURSES}
              setView={setView}
              setSelectedCourseId={setSelectedCourseId}
              setSearchQuery={setSearchQuery}
            />
          )}

          {currentView === "catalog" && (
            <CatalogPage
              courses={COURSES}
              setView={setView}
              setSelectedCourseId={setSelectedCourseId}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}

          {currentView === "details" && (
            <DetailsPage
              course={activeCourse}
              isEnrolled={activeEnrollStatus}
              onEnroll={handleEnrollCourse}
              setView={setView}
            />
          )}

          {currentView === "learning" && (
            <LearningPage
              course={activeCourse}
              completedLessons={completedLessons}
              toggleLessonCompleted={toggleLessonCompleted}
              setView={setView}
              triggerNotification={triggerNotification}
            />
          )}

          {currentView === "dashboard" && (
            <DashboardPage
              enrolled={enrolled}
              courses={COURSES}
              completedLessons={completedLessons}
              setView={setView}
              setSelectedCourseId={setSelectedCourseId}
            />
          )}
        </main>

        {/* CLASSROOM ENROLL SUCCESS OVERLAY MODAL */}
        {showEnrollSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" id="enrollment-success-modal">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-6 relative border border-slate-100 dark:border-slate-700 animate-in scale-in duration-300">
              
              {/* Close Cross */}
              <button 
                onClick={() => setShowEnrollSuccessModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Close successful enrollment modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">Cohort Admitted</span>
                <h3 className="font-display font-black text-xl text-slate-900 dark:text-white leading-tight">Enrollment Complete!</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                  You are officially admitted into the cohort of <strong>{justEnrolledCourseTitle}</strong>. Your study timeline starts immediately.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  onClick={() => setShowEnrollSuccessModal(false)}
                  className="flex-1 py-3 text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl transition-colors"
                >
                  Explore Other Syllabi
                </button>
                <button
                  onClick={() => { setShowEnrollSuccessModal(false); setView("learning"); }}
                  className="flex-1 py-3 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Go to Classroom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* BOTTOM GLOBAL FOOTER */}
        <Footer />

      </div>
    </div>
  );
}
