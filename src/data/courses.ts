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
            embedHtml: `<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/react-essential-training/what-is-react?autoplay=false&claim=AQEKmOSTbrlADQAAAZ9rFgnUeuidsx8hmGwayJiAOhaByT43XZKSO40cy8qiiRIOAeP-ExUvP12HJ9Q9aUIQfDCQEkZkXfBOOdTkkoBzlFNe-21FQc8HTM3HVQnUQ-8QzqUxrha6bG3TovXFLQ1Pcpb_qnxVL27Huzlsd7WpifZE3hJ_IJzX2VZNNONIJmxnI5PCVbML79IeLXXQOSSI5GsvILk475mcMFXbbdEPCHtPfmxXb-ShtOqHaMucDtbI1AElH6M8JSmu1oTrJprbJ0lOZjZhDgCEPETCtalE995EuWVjhDItljGK_P8XDVs2Qy3kP8X8rb2jpo5NPkV_Uae415vqgnI6sbUmrdAFop85uIDi2smq7DMBxkUkkPwtpSe1JSir23hxzAy7lWE9rXjenq7TPKmCXRRCzS3L7IP6GoU4kbjXKM6G7gYaKkXXrPDoqSuFjVVtXQdRs-xaVs2RmyblnCJRMMrEpiXwaTgaVRYLVdq6qGIqN6_oNDgvapZ5IWRGfIkWomDJEozkxapl0eL3mAKu-zupoYZCS21TLTVl1xsKpapmZ3nPwSMrecXqiMkAy5vc5tWMTDOV-eRzy4XzWThP0ZhocQEcTskqKTZookGJCYA4yoHbdDwjrv29rnK_7QNUGNwxxnTIXs3DA0fbn5AKZ7QTcdN743Emx_OWHyN-TPkProZMJzLSCy_eaWiz8KXQGa1Oscc6prTAz4C9Gp5MSVvH95Z-KjuxAvOzUWrvoCqPJqNZLjPkEWxW3077BaVjg4sRKkbWUZ-y9v9PqOO5ZcjsEmcEGKfsyx2zkRl1GHPDXYE5Xd0AU_9NpV_V8A08gxIU2zhMr0Jj9X2sqe_fZtCVXl6s9zXWkKg3iB_Sq4hn6BiKW9KSHqIwYbx9gMHkh4LG0yyMMFaWsxXuWAWE_L5Yv9nxhbTL-kl4A3ZN_eeITgpijX6w-r71OLMRyUg1YU5VoydEmYz9Xo8Y29oKjpO6HxAihDgdd5BIOr8e7ZTpk59Wj9YFlIUt94LYkJR1_TDJ7_yrAEL95WhK3O5rphO72LwqgBpFY6u1Wtt8LHVAX3vfMoOQ7cNsDHcZxPth-tvzajUUCp0_zx3UFrsY1c8u9h9bGuTTN9e33rIWteIGmziopMIVIjkiazBD-5sTBAu2ytimCvon3ayLI8nFLsBWZva0SJ4OFRVtlo5n63hAqVeucePO1i2O3eS1nKAseyCuYafWUhgPI5VtVp9DPfpyt58FFL84BkiOQNZWVOfLLjW3TzMTtRnTFpcnYwoDclBQLNffhnRd83POR9_CzA" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></p>`,
            description: "Understand the core purpose of React in building modern interactive UIs. Setup your local environment or standard web container using GitHub Codespaces, and configure VS Code for development.",
            lessonMD: lesson1MD
          },
          {
            id: "cs-l2",
            title: "1.2 How React Works Under the Hood & React Compiler",
            duration: "8:21",
            durationSeconds: 1125,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            embedHtml: `<iframe width="862" height="485" src="https://www.youtube.com/embed/-xwXPYEc8nc?list=PLIAAss__korQ" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            description: "Deconstruct the Virtual DOM reconciliation, fiber nodes, and the brand-new React compiler. See how React optimizes renders automatically.",
            lessonMD: lesson1MD
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
