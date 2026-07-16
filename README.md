# HAU School of Computing College Student Council Portal 🦊🛡️

A modern, high-fidelity, responsive academic companion and course portal built specifically for the student body of the **Holy Angel University (HAU) School of Computing (SoC)**. Inspired by elite learning portals, this portal is customized with the brand identity of the **SoC College Student Council**, featuring the iconic Maroon and Gold colors and the Fox mascot. 

This platform enables SoC Foxes to access syllabus catalogs, study guides, interactive workspaces, note-taking with timestamp-jumping capabilities, peer classroom discussions, and a personalized student tracking dashboard.

---

## ✨ Features

- **🛡️ SoC Student Council Identity**: Themed with the official school identity, including customized crests, the iconic council branding, and a beautiful landing page layout echoing the "See You Next Semester, Foxes!" spirit.
- **🎓 Holy Angel University Syllabi**: Curriculums ranging from *Computer Science (CS)* to *Information Technology (IT)*, *Cybersecurity Specialist*, and *Deep Learning & AI*.
- **⚡ Advanced Course Catalog & Filters**: Dynamically sort and filter by Category, Difficulty Level, Duration, and Star Ratings. Includes responsive search with fuzzy-match.
- **🖥️ High-Fidelity Classroom Workspace**: Includes:
  - An interactive, custom video player HUD.
  - Interactive lecture-note taking that pins study points directly to video playback seconds (clicking the badge jumps the playhead!).
  - Live Classroom Discussion Forums allowing upvoting and peer replies.
  - Lecture Resources and downloadable files.
- **📊 Personalized Student Dashboard**: Real-time stats widgets (enrolled tracks, completed lectures, weekly hours), a daily login streak counter, a custom SVG bar chart mapping study time, and digital verifiable Certificates of Completion (unsealed at 100% course progress).
- **🌗 Ambient Night Mode**: Easily toggle between high-contrast crisp light backgrounds and soothing midnight-slate themes.
- **🔔 Interactive Notification HUD**: Action-based feedback banners that pop into view and sync with the header alert indicator.

---

## 🛠️ Tech Stack & Architecture

- **Runtime & Bundler**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)

---

## 🚀 Local Installation & Execution

Follow these simple steps to run the portal on your local computer:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system.
```bash
node --version
npm --version
```

### 2. Download or Extract the Files
Extract the project archive into a folder of your choice and open your terminal inside that directory.

### 3. Install Dependencies
Run the following command to download and compile all the required libraries:
```bash
npm install
```

### 4. Set Up Environment Variables (Optional)
This application runs entirely client-side with mock streaming assets and local storage persistence. However, if you want to configure environment parameters, rename `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 5. Launch the Development Server
Boot up the fast Vite dev server:
```bash
npm run dev
```

The terminal will print a local URL (usually `http://localhost:3000` or `http://localhost:5173`). Open this link in your browser to interact with the fully live portal!

---

## 📂 Project Directory Structure

```text
├── index.html               # Main HTML entry point (Document Head & Metadata)
├── package.json             # NPM dependencies & build commands
├── vite.config.ts           # Vite Bundler configuration with React & Tailwind
├── src/
│   ├── main.tsx             # React bootstrap & mounting logic
│   ├── index.css            # Global stylesheets & Tailwind custom Google fonts
│   ├── types.ts             # Shared TypeScript structures, models, and interfaces
│   ├── App.tsx              # Core app controller, router state, and modal handlers
│   ├── data/
│   │   └── courses.ts       # Core collegiate course database (curriculums, reviews, FAQs)
│   ├── components/
│   │   ├── Navbar.tsx       # Header, responsive mobile drawer, & dark mode toggler
│   │   ├── Footer.tsx       # Newsletter sign-up & footer links
│   │   └── CourseCard.tsx   # Premium card display with gradient vector thumbnails
│   └── pages/
│       ├── HomePage.tsx     # Landing page with search bar, metrics, & testimonials
│       ├── CatalogPage.tsx  # Interactive catalog page with filters, sorting, and pagination
│       ├── DetailsPage.tsx  # Syllabus accordion, course banner, and enrollment panel
│       ├── LearningPage.tsx # Video player workspace, note pinning, and board discussions
│       └── DashboardPage.tsx# Analytical student panel, study chart, & digital diplomas
```

---

## 🔒 State Flow & Data Persistence

1. **Client Routing (`currentView` State)**: Managed in `App.tsx` and propagated down. Toggle states are `'home' | 'catalog' | 'details' | 'learning' | 'dashboard'`.
2. **Local Storage Synchronization**:
   - Course enrollment tracks, active note logs, and discussion posts are stored securely in `localStorage` unique to individual course IDs.
   - Cleared caches automatically reload with pre-enrolled CS-101 (Deep Learning) data so the student dashboard renders dynamically on first load.
3. **Interactive Player Timeline Tracking**: Built upon direct React `ref` handlers communicating time updates directly back to custom sliders, fully preventing cross-origin media locks.

---

## 🦊 Holy Angel University School of Computing College Student Council

Designed with excellence to serve the SoC community.
- **Email**: socstudentcouncil@gmail.com
- **Socials**: @haucscsoc
