---
layout: default
title: Getting Started with ReactJS and JSX | HAU APSI Classroom
---

<section class="relative py-16 px-6 text-center text-white" style="background: linear-gradient(135deg, rgb(107, 29, 46), rgb(74, 19, 32));">
  <div class="relative z-10 max-w-4xl mx-auto">
    <h1 class="font-bold mb-4 text-3xl md:text-4xl text-white">Getting Started with ReactJS and JSX</h1>
    <p class="text-lg opacity-90 mb-8 text-white">Learn the fundamentals of building dynamic user interfaces with React and Vite.</p>
  </div>
</section>

<main class="max-w-4xl mx-auto px-6 py-12 space-y-12">

  <section id="requirements">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">1. Requirements & Setup</h2>
    
    <div class="bg-white rounded-xl p-8 shadow-sm border-l-4 border-gold mb-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Development Environment Setup</h3>
      <p class="text-gray-700 mb-6">Professional development requires a specific toolchain to ensure consistency and efficiency. You should have a good understanding of HTML, CSS, and JavaScript before proceeding.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2"><i data-lucide="download" class="w-4 h-4 text-maroon"></i> Software Installation</h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li><strong>Google Chrome:</strong> Essential for Developer Tools and React DevTools.</li>
            <li><strong>VS Code:</strong> The recommended code editor.</li>
            <li><strong>Node.js:</strong> Required for modern build tools like Vite (Version 18+).</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2"><i data-lucide="book-open" class="w-4 h-4 text-maroon"></i> Fundamental Knowledge</h4>
          <ul class="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li><strong>JS Basics:</strong> Variables (`const`/`let`), Arrow Functions, and `.map()`.</li>
            <li><strong>HTML/CSS:</strong> Basic tag structure and class selectors.</li>
          </ul>
        </div>
      </div>

      <h4 class="font-bold text-gray-900 mt-6 mb-2 flex items-center gap-2"><i data-lucide="puzzle" class="w-4 h-4 text-maroon"></i> VS Code Extensions</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-600 text-sm">
        <li><strong>Live Server:</strong> Used initially for simple HTML files.</li>
        <li><strong>ESLint:</strong> Critical for catching syntax errors and enforcing best practices in real-time.</li>
      </ul>
    </div>
  </section>

  <section id="what-is-react">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">2. What is React?</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm">
      <p class="text-gray-700 mb-4">React is an open-source JavaScript library for building dynamic and interactive user interfaces (UIs). Created and released by Facebook in May 2013, it is used to build Single Page Applications (SPAs) and allows us to create reusable UI components.</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-700 mb-8">
        <li>See <a href="https://reactjs.org/versions/" target="_blank" class="text-maroon hover:underline font-medium">React versions</a></li>
        <li>Read the <a href="https://reactjs.org/docs/getting-started.html" target="_blank" class="text-maroon hover:underline font-medium">Official Documentation</a></li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-900 mb-4">Why React?</h3>
      
      

      <div class="space-y-6">
        <div>
          <h4 class="font-bold text-maroon mb-2">Core Technical Advantages</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li><strong>Component-Based Architecture:</strong> UI is broken down into small, isolated reusable pieces.</li>
            <li><strong>The Virtual DOM:</strong> React creates a lightweight copy of the page in its memory, isolates exactly what changed, and updates only that specific element, preventing lag.</li>
            <li><strong>Declarative UI:</strong> Describe what the UI should look like based on current state, and React handles the updates.</li>
            <li><strong>JSX Syntax:</strong> Write HTML structure directly inside your JavaScript code.</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-maroon mb-2">Business & Career Benefits</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li><strong>Massive Job Market:</strong> Highly sought after globally, opening doors to high-paying roles.</li>
            <li><strong>Backed by Meta:</strong> Guarantees stability and continuous updates.</li>
            <li><strong>Unmatched Ecosystem:</strong> A massive community with pre-built solutions and UI packages.</li>
            <li><strong>Cross-Platform Efficiency:</strong> Learn React once, and use React Native to build iOS and Android apps.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="setup-react">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">3. Initializing a React App</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-6">
      
      <div>
        <p class="text-gray-700 mb-2">First, make sure Node.js is installed. Check your terminal:</p>
        <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code>node -v
<span class="text-gray-400"># Expected output: v22.15.0 or similar</span></code></pre>
      </div>

      <div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Install Vite & Create Application</h3>
        <p class="text-gray-700 mb-2">We will use the Vite build tool. Run this command to create a project named <code>my-react-app</code>:</p>
        <pre class="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code>npm create vite@latest my-react-app -- --template react</code></pre>
      </div>

      <div>
        <p class="text-gray-700 mb-2">Follow the terminal prompts (press <code>y</code> to proceed). If successful, you will see:</p>
        <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code>VITE v8.0.15 ready in 262 ms

  <span class="text-green-400">➜</span>  <strong class="text-white">Local:</strong>   http://localhost:5173/
  <span class="text-green-400">➜</span>  <strong class="text-white">Network:</strong> use --host to expose</code></pre>
      </div>
    </div>
  </section>

  <section id="modify-app">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">4. Your First React App</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm">
      <p class="text-gray-700 mb-4">Look in the <code>my-react-app/src</code> folder. Open <code>App.jsx</code>. Replace the default boilerplate with this simple code:</p>
      
      <div class="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="text-gray-400 text-xs font-mono ml-2">src/App.jsx</span>
      </div>
      <pre class="bg-gray-900 text-blue-300 p-4 rounded-b-lg text-sm font-mono overflow-x-auto mb-4"><code><span class="text-purple-400">function</span> <span class="text-blue-400">App</span>() {
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">div</span> <span class="text-yellow-300">className</span><span class="text-gray-300">=</span><span class="text-green-300">"App"</span><span class="text-gray-300">&gt;</span>
      <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span><span class="text-white">Hello World!</span><span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>
    <span class="text-gray-300">&lt;/</span><span class="text-red-400">div</span><span class="text-gray-300">&gt;</span>
  );
}

<span class="text-purple-400">export default</span> App;</code></pre>
      <p class="text-sm text-gray-500 italic">Save the file and check your browser to see the changes update instantly!</p>
    </div>
  </section>

  <section id="jsx-basics">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">5. Understanding JSX</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-8">
      
      <div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">What is JSX?</h3>
        <p class="text-gray-700">JSX stands for JavaScript XML. It allows us to write HTML elements directly in JavaScript without needing <code>createElement()</code> methods. It is translated into regular JavaScript at runtime.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-900 mb-2">With JSX (Easy)</h4>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">const</span> myElement = <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>I Love JSX!<span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>;</code></pre>
        </div>
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Without JSX (Hard)</h4>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">const</span> myElement = React.<span class="text-blue-400">createElement</span>(<span class="text-green-300">'h1'</span>, {}, <span class="text-green-300">'I do not use JSX!'</span>);</code></pre>
        </div>
      </div>

      <div class="border-l-4 border-maroon pl-6 py-2 space-y-6 bg-gray-50 rounded-r-lg">
        <div>
          <h4 class="font-bold text-gray-900">1. One Top Level Element</h4>
          <p class="text-sm text-gray-700 mb-2">HTML code must be wrapped in ONE parent element. You can use a wrapper <code>&lt;div&gt;</code> or a React Fragment <code>&lt;&gt;&lt;/&gt;</code>.</p>
          <pre class="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">const</span> myElement = (
  <span class="text-gray-300">&lt;&gt;</span>
    <span class="text-gray-300">&lt;</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>Paragraph 1<span class="text-gray-300">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>
    <span class="text-gray-300">&lt;</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>Paragraph 2<span class="text-gray-300">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>
  <span class="text-gray-300">&lt;/&gt;</span>
);</code></pre>
        </div>

        <div>
          <h4 class="font-bold text-gray-900">2. Elements Must be Closed</h4>
          <p class="text-sm text-gray-700 mb-2">JSX follows strict XML rules. Empty elements must close with <code>/&gt;</code>.</p>
          <pre class="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">const</span> myElement = <span class="text-gray-300">&lt;</span><span class="text-red-400">input</span> <span class="text-yellow-300">type</span><span class="text-gray-300">=</span><span class="text-green-300">"text"</span> <span class="text-gray-300">/&gt;</span>;</code></pre>
        </div>

        <div>
          <h4 class="font-bold text-gray-900">3. Attribute class = className</h4>
          <p class="text-sm text-gray-700 mb-2">Because <code>class</code> is a reserved word in JavaScript, JSX uses <code>className</code>.</p>
          <pre class="bg-gray-900 text-gray-300 p-3 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">const</span> myElement = <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span> <span class="text-yellow-300">className</span><span class="text-gray-300">=</span><span class="text-green-300">"myclass"</span><span class="text-gray-300">&gt;</span>Hello World<span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>;</code></pre>
        </div>
      </div>
    </div>
  </section>

  <section id="jsx-expressions">
    <h2 class="text-2xl font-bold text-maroon mb-6 border-b-2 border-gray-200 pb-2">6. JSX Expressions & Logic</h2>
    <div class="bg-white rounded-xl p-8 shadow-sm space-y-6">
      
      <p class="text-gray-700">You can embed any valid JavaScript expression (math, variables, function calls) inside JSX by wrapping it in curly braces <code>{ }</code>.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Variables in JSX</h4>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>() {
  <span class="text-purple-400">const</span> hp = <span class="text-orange-300">218</span> * <span class="text-orange-300">1.36</span>;
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>It has {hp} horsepower<span class="text-gray-300">&lt;/</span><span class="text-red-400">p</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
        </div>
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Dynamic Attributes</h4>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Car</span>() {
  <span class="text-purple-400">const</span> x = <span class="text-green-300">"myclass"</span>;
  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span> <span class="text-yellow-300">className</span><span class="text-gray-300">=</span>{x}<span class="text-gray-300">&gt;</span>Hello World<span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
        </div>
      </div>

      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-2">Conditional Rendering (If Statements)</h3>
      <p class="text-gray-700 mb-4">React supports <code>if</code> statements outside of the JSX block. Inside JSX, you must use a ternary operator.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Option 1: Outside JSX</h4>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Fruit</span>() {
  <span class="text-purple-400">const</span> x = <span class="text-orange-300">5</span>;
  <span class="text-purple-400">let</span> y = <span class="text-green-300">"Apple"</span>;
  
  <span class="text-purple-400">if</span> (x &lt; <span class="text-orange-300">10</span>) {
    y = <span class="text-green-300">"Banana"</span>;
  }

  <span class="text-purple-400">return</span> <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>{y}<span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>;
}</code></pre>
        </div>
        <div>
          <h4 class="font-bold text-gray-900 mb-2">Option 2: Inside JSX (Ternary)</h4>
          <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm font-mono overflow-x-auto"><code><span class="text-purple-400">function</span> <span class="text-blue-400">Fruit</span>() {
  <span class="text-purple-400">const</span> x = <span class="text-orange-300">5</span>;
  
  <span class="text-purple-400">return</span> (
    <span class="text-gray-300">&lt;</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>
      {x &lt; <span class="text-orange-300">10</span> ? <span class="text-green-300">"Banana"</span> : <span class="text-green-300">"Apple"</span>}
    <span class="text-gray-300">&lt;/</span><span class="text-red-400">h1</span><span class="text-gray-300">&gt;</span>
  );
}</code></pre>
        </div>
      </div>
    </div>
  </section>

  <section id="activity" class="bg-maroon text-white rounded-xl p-8 shadow-md mt-12">
    <i data-lucide="code-2" class="w-12 h-12 mx-auto mb-4 opacity-80"></i>
    <h2 class="text-black text-2xl font-bold mb-4 text-center">Hands-on Activity</h2>
    <p class="text-black opacity-90 mb-6 max-w-2xl mx-auto text-center">This repository contains starter files for a JSX/React quiz.</p>
    <ul class="text-black text-left">
      <ol><strong>Files</strong>
        <li>/src/App.jsx: Replace or edit this component as directed in the tutorial.</li>
        <li>/assignment.js: Existing starter file where you write the required functions/logic.</li>
        <li>/package.json: Basic Node package configuration.</li>
      </ol> <br> <br>
      <ol><strong>Getting started</strong>
        <li>Open the project in your editor.</li>
        <li>Complete the TODOs in the existing /assignment.js file.</li>
        <li>Update /src/App.jsx according to the exercise steps.</li>
      </ol>
    </ul>
    <a href="https://classroom50.org/HAU-SOC"  class="inline-block px-8 py-3 rounded-lg font-bold transition hover:opacity-90" style="background: rgb(245, 196, 90); color: rgb(74, 19, 32);">Class Portal</a>
  </section>

</main>
