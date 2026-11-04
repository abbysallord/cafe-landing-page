import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between">
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto w-full">
        <span className="text-xl font-bold tracking-tight text-amber-500 font-serif">Velvet & Bean</span>
        <div className="flex gap-6 text-sm font-medium text-stone-400">
          <a href="#menu" className="hover:text-amber-400 transition-colors">Roasts</a>
          <a href="#story" className="hover:text-amber-400 transition-colors">Our Story</a>
          <a href="#visit" className="hover:text-amber-400 transition-colors">Visit Us</a>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-20 text-center flex-1 flex flex-col items-center justify-center">
        <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">Direct Trade Specialty Roasts</span>
        <h1 className="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight font-serif">Coffee Crafted with Obsessive Detail.</h1>
        <p className="mt-6 text-base sm:text-lg text-stone-400 max-w-xl leading-relaxed">Small-batch single origins, hand-pulled espresso, and a quiet space to slow down and create.</p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">View Menu</button>
          <button className="px-6 py-3 rounded-full border border-stone-800 text-stone-300 font-medium hover:bg-stone-900 transition-colors">Find a Table</button>
        </div>
      </main>
      <footer className="border-t border-stone-900 py-6 text-center text-xs text-stone-600">© 2026 Velvet & Bean Roasters. Crafted with Shenoy.</footer>
    </div>
  );
}