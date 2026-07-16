/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course } from "../types";
import lesson1MD from './module1.md?raw';

export const COURSES: Course[] = [
  {
    id: "CS-101",
    title: "Application and System Integration",
    subtitle: "Master element creation, component architecture, hooks, and critical server/client boundaries in modern React & Next.js.",
    category: "Computer Science",
    subcategory: "Web Development",
    difficulty: "Intermediate",
    duration: "24h 45m",
    durationHours: 24.75,
    rating: 4.9,
    reviewsCount: 1850,
    enrolledStudents: 14250,
    price: 0,
    image: "linear-gradient(135deg, #800020 0%, #E06A00 50%, #FFB81C 100%)", // HAU Crimson-Orange-Gold gradient
    instructor: {
      id: "inst-1",
      name: "Prof. Romel Mejos",
      title: "Senior Lecturer in Web Engineering at HAU School of Computing",
      bio: "Prof. Romel Mejos is a seasoned systems architect and front-end specialist. He designs industry-ready curricula for the Holy Angel University School of Computing and advises student developers on enterprise React integration.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      rating: 4.9,
      coursesCount: 3,
      studentsCount: 24800
    },
    overview: "This course highlights the latest techniques for building robust React applications from the ground up. Students will master element creation, component architecture, and the strategic application of React Hooks. The curriculum covers essential modern tooling, including Vite and Next.js, while exploring critical distinctions between Server and Client Components. By the conclusion of this course, the student will possess the skills to initiate scalable projects and contribute effectively to enterprise-level React codebases with a focus on performance and maintainability.",
    outcomes: [
      "Develop dynamic user interfaces using React components, JSX syntax, and props to manage dynamic data.",
      "Utilize modern state management techniques in React using useState and useReducer hooks.",
      "Implement and manage side effects in React applications using the useEffect hook.",
      "Set up and configure React projects using Vite and Next.js frameworks to streamline setup.",
      "Create file-based App Router structures in Next.js to build server-rendered multi-page applications.",
      "Fetch and render REST API data asynchronously in React components with custom Fetch hooks.",
      "Design and implement Next.js Server Actions to execute secure data mutations and submissions.",
      "Build responsive, eye-safe user interfaces with integrated Tailwind CSS utilities.",
      "Determine boundaries between React Server Components and Client Components to optimize load speeds."
    ],
    curriculum: [
      {
        id: "cs-m1",
        title: "Module 1: Introduction & React Fundamentals",
        lessons: [
          {
            id: "cs-l1",
            title: "1.1 Introduction to React and Workspace Setup",
            duration: "14:20",
            durationSeconds: 860,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            embedHtml: `<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/react-essential-training/what-is-react?autoplay=false&claim=AQEHLl4QbTXGGgAAAZ9qdFZ73aVG2RrTJ-nZGoPaJfZY7IKfL46VpVQrTVDMTpX_VxwsrM1BTJwK4D0HS1_xye_fcCApnC8JNCj5w0huFGB3ks1easADLIUHIFAYwoCVoPBdAoxggof2D3v198TNdzzn9Ephk_qPGGs3DkfiiuLe3KwigE3pB_XIFtLWyLRijYrTVNp7rWD01Ef__1eDwB0f0BD9MYlSs1XT55F50qDfFBMluFC3pona5iR7CatqXkLbp7c2pVZWS7GakVwo2O3WRCLaYDq7tpBQ0Yuj-9fp03wKWj-6vdnJjZ5Bsriyq9_Ped5nmYuprgOLZhZxm4ln0g931_i7-0XoBbxGXPrjmbYMFDEubGCP9KLelzSY6QURvsb7PCQBJUsEa9vLMFShiKj4guPYuUcTU2MyJJyZRcaHRyUX5cQ2y1_ZDm4hVYu3wLKovf8Yl7iGe4D932WvXU7iNlXq-3mu9K6YlQxKZLTYreRaD-94Z8OQFgvaDh7rwgIsr-pAyCP6JUoP8TyB8gCFZpoLQYVCOiFoIP8s6qfORBZi1vT2DYeFYxPwz6rDYPQhUXCZnXc-sUwOCD_IjZwkuxbYaF6v9f9SwmA48U5iO4Boq2loyyeV3Hg95fDJGQ_oUOE2f6LJyfFVHsG1_TtEMiptm4CBcG5qrfKlhO3GcX7t6mPOwLapg45zJ7qNnNPr5G_s6Bot2CLMs-Wu3FcT-KddHOHjQJdTYco67VD2arxJSGu2adu2Vn9ykH0rdkQvbajbg2IUnO216T2NaCfN8NR4_FEBRstLcXZKM6hIMOGZeoldaXbtiVcbX557T6KeLk5M3hrwy2FKwEJKPwcD13WqF-5qq7MOnXUGdEKGYI0M1PO5OYd9xzz22DAds1CWfbntGUt23pOVREPOYEEwsG54RVBLwG_sZ3sfttXkfiHvQJiZHefvz1Xn9eJcqyEhhJmTLoCsJI4fiV8ttlgci-HATuvNzErApAMKLtQLqezYrep6td8XE8KWjGwiJZQEmsvDw8l-s4AhqmvQzHojJYJ36r2tPTqVLQ_CIoAVDnfs19eV411tN3LDuFzjrKXgFFLjSS4p3N7e-jxgh9wZw8HlwBsJyiU7drJGmjntfC36Z2z7-vA6acR4LLX6xLgc5l5pzuBwCnSOflt90DUFqg4CgFHUUooMRm-u8WNXmBnJg5mTbBCqL1Weoha2ZEBRUlv2J5WdAtD9HdDM9wCgNEiKJ4Aq0VTjIZ9EvBDvXYAFv3crvYlPYp3D37v454o3-g0OExnpx7aeOICuh5XFab097w" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p className="mt-3 text-xs text-slate-400"><strong><a href="https://www.linkedin.com/learning/react-essential-training/what-is-react?trk=embed_lil" target="_blank" rel="noreferrer" class="text-brand-gold hover:underline">What is React?</a></strong> from <strong><a href="https://www.linkedin.com/learning/react-essential-training?trk=embed_lil" target="_blank" rel="noreferrer" class="text-brand-gold hover:underline">React Essential Training</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/eve-porcello?trk=embed_lil" target="_blank" rel="noreferrer" class="text-brand-gold hover:underline">Eve Porcello</a></strong></p>`,
            description: "Understand the core purpose of React in building modern interactive UIs. Setup your local environment or standard web container using GitHub Codespaces, and configure VS Code for development.",
            lessonMD: lesson1MD
          },
          {
            id: "cs-l2",
            title: "1.2 How React Works Under the Hood & React Compiler",
            duration: "18:45",
            durationSeconds: 1125,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Deconstruct the Virtual DOM reconciliation, fiber nodes, and the brand-new React compiler. See how React optimizes renders automatically."
          },
          {
            id: "cs-l3",
            title: "1.3 Setting Up Chrome Development and Diagnostics Tools",
            duration: "12:10",
            durationSeconds: 730,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Install and utilize the Chrome React Developer Tools. Learn to audit component trees, inspect state histories, and detect stale renders."
          }
        ]
      },
      {
        id: "cs-m2",
        title: "Module 2: React Elements & JSX Architecture",
        lessons: [
          {
            id: "cs-l4",
            title: "2.1 Initializing a Project with Vite",
            duration: "16:30",
            durationSeconds: 990,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Say goodbye to script tags. Initialize a clean, highly optimized React and TypeScript project using the ultra-fast Vite bundler."
          },
          {
            id: "cs-l5",
            title: "2.2 Creating React Elements & JSX Syntax",
            duration: "21:15",
            durationSeconds: 1275,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Deconstruct the JSX transpiler. Learn how HTML-like syntax gets converted to standard React element nodes, and write valid JSX templates."
          },
          {
            id: "cs-l6",
            title: "2.3 Destructuring Component Properties & defaultProps",
            duration: "15:40",
            durationSeconds: 940,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Master clean variable passing. Use ES6 destructuring to extract props smoothly, implement defaults, and enforce component modularity."
          }
        ]
      },
      {
        id: "cs-m3",
        title: "Module 3: React Components & Data Mutations",
        lessons: [
          {
            id: "cs-l7",
            title: "3.1 React Components: Getting Started & JSON Imports",
            duration: "24:50",
            durationSeconds: 1490,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Build your first nested sub-component, pass structural attributes, and import static JSON arrays as live local variables."
          },
          {
            id: "cs-l8",
            title: "3.2 Dynamic Sort and Search Utilities",
            duration: "22:30",
            durationSeconds: 1350,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Create responsive text search boxes. Bind inputs to component state, filter list displays dynamically, and apply conditional CSS styles."
          },
          {
            id: "cs-l9",
            title: "3.3 Mutating Datasets & Lifecycle Events",
            duration: "28:10",
            durationSeconds: 1690,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Master client-side additions and deletions. Safely purge array indexes, handle form submissions, and refresh lists reactively."
          }
        ]
      },
      {
        id: "cs-m4",
        title: "Module 4: React Hooks In-Depth",
        lessons: [
          {
            id: "cs-l10",
            title: "4.1 State Management: useState & useReducer",
            duration: "26:40",
            durationSeconds: 1600,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Master simple and complex state lifecycles. Learn when to use standard useState counters versus dispatching descriptive useReducer actions."
          },
          {
            id: "cs-l11",
            title: "4.2 Side Effects: useEffect & cleanup functions",
            duration: "22:15",
            durationSeconds: 1335,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Synchronize component renders with external systems. Manage REST API fetches, handle dependency variables, and clean up active event subscriptions."
          },
          {
            id: "cs-l12",
            title: "4.3 Advanced Hooks: useRef, useContext, & Custom Hooks",
            duration: "32:10",
            durationSeconds: 1930,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Create reusable business logic. Write your own custom stateful hooks (useFetch), reference direct DOM nodes with useRef, and trigger context provider states."
          }
        ]
      },
      {
        id: "cs-m5",
        title: "Module 5: Next.js & React Server Components (RSC)",
        lessons: [
          {
            id: "cs-l13",
            title: "5.1 Introduction to Next.js App Router",
            duration: "19:50",
            durationSeconds: 1190,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Set up modern Next.js. Explore the folder structure, understand server-side generation (SSG), and configure multi-page routes via file names."
          },
          {
            id: "cs-l14",
            title: "5.2 Server vs. Client Component Boundaries",
            duration: "25:30",
            durationSeconds: 1530,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Eliminate shipping heavy client bundles. Understand why Next.js defaults to Server Components, and flag client interactivity boundaries using the 'use client' directive."
          }
        ]
      },
      {
        id: "cs-m6",
        title: "Module 6: Asynchronous Next.js & Server Actions",
        lessons: [
          {
            id: "cs-l15",
            title: "6.1 Asynchronous Data Fetching on the Server",
            duration: "23:40",
            durationSeconds: 1420,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Load databases directly inside your page templates. Master async/await fetch calls in Server Components to bypass client API routing layers."
          },
          {
            id: "cs-l16",
            title: "6.2 Next.js Server Actions & Form Security",
            duration: "27:10",
            durationSeconds: 1630,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            description: "Secure data mutations. Implement standard HTML form handlers connected to back-end server functions, enabling rapid inserts without REST gateways."
          }
        ]
      }
    ],
    reviews: [
      {
        id: "rev-1",
        studentName: "Liam Carter",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "Excellent theoretical clarity and practical workspace! Prof. Romel explains the transition from React state to server actions beautifully. This makes Next.js incredibly approachable.",
        date: "2026-06-15"
      },
      {
        id: "rev-2",
        studentName: "Chloe Davenport",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80",
        rating: 5,
        comment: "I love the curriculum's structure! The explanation of Server and Client Components solved so many architectural questions I had. The final project helped me build an enterprise-level portfolio.",
        date: "2026-05-28"
      }
    ],
    featured: true
  }
];
