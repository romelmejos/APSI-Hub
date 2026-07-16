/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  rating: number;
  coursesCount: number;
  studentsCount: number;
}

export interface Review {
  id: string;
  studentName: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  durationSeconds: number;
  videoUrl: string; // Simulated placeholder video ID or state
  description: string;
  resources?: Array<{ name: string; type: string; size: string }>;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  subcategory: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string; // e.g. "12h 45m"
  durationHours: number; // For filtering
  rating: number;
  reviewsCount: number;
  enrolledStudents: number;
  price: number; // 0 for free, or a price
  image: string; // Course thumbnail image representation or CSS gradient
  instructor: Instructor;
  overview: string;
  outcomes: string[];
  curriculum: Module[];
  reviews: Review[];
  featured: boolean;
}

export interface Note {
  id: string;
  courseId: string;
  lessonId: string;
  lessonTitle: string;
  timestamp: string; // e.g. "02:15"
  timestampSeconds: number;
  text: string;
  createdAt: string;
}

export interface DiscussionReply {
  id: string;
  author: string;
  authorRole: "Student" | "Instructor" | "TA";
  avatar: string;
  content: string;
  createdAt: string;
}

export interface DiscussionPost {
  id: string;
  courseId: string;
  title: string;
  content: string;
  author: string;
  authorRole: "Student" | "Instructor" | "TA";
  avatar: string;
  likes: number;
  replies: DiscussionReply[];
  createdAt: string;
}

export interface EnrolledCourse {
  courseId: string;
  progress: number; // 0 to 100
  lastLessonId: string;
  completedLessons: string[]; // list of lessonIds completed
  enrolledAt: string;
}

export interface StudentProfile {
  name: string;
  email: string;
  avatar: string;
  major: string;
  university: string;
  streakDays: number;
  weeklyStudyHours: number[]; // Monday to Sunday (7 values)
  enrolled: EnrolledCourse[];
}
