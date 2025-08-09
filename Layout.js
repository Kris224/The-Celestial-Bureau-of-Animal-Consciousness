import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        
        :root {
          --ministry-ink: #2D1B14;
          --ministry-parchment: #F4F1E8;
          --ministry-stamp: #8B4513;
          --ministry-gold: #B8860B;
          --ministry-sepia: #704214;
        }
        
        .ministry-stamp {
          position: relative;
          border: 3px solid var(--ministry-stamp);
          border-radius: 50%;
          transform: rotate(-12deg);
          background: radial-gradient(circle, #D2B48C 0%, #A0522D 100%);
        }
        
        .ministry-paper {
          background: linear-gradient(180deg, #F9F6F0 0%, #F2EDE1 100%);
          box-shadow: 0 4px 20px rgba(45, 27, 20, 0.15);
          position: relative;
        }
        
        .ministry-paper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.03'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23704214'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }
        
        .typewriter {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.1em;
        }
      `}</style>
      
      <header className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 text-stone-100 shadow-2xl border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to={createPageUrl("Ministry")} className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
            <div className="ministry-stamp text-stone-800 w-16 h-16 flex items-center justify-center font-bold text-sm">
              OFFICIAL
            </div>
            <div>
              <h1 className="text-3xl font-bold font-serif" style={{fontFamily: 'Crimson Text, serif'}}>
                The Ministry of Absurd Inventions
              </h1>
              <p className="text-amber-200 text-sm font-medium tracking-wide">
                Department of Peculiar Pet Psychology • Est. 1847
              </p>
            </div>
          </Link>
        </div>
      </header>

      <main className="relative">
        {children}
      </main>

      <footer className="bg-stone-800 text-stone-300 py-8 mt-16 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-lg mb-2">
            Est. 1847 • Serving Peculiar Pet Owners Since the Victorian Era
          </p>
          <p className="text-sm opacity-75">
            All analyses are conducted by our finest imaginary specialists
          </p>
        </div>
      </footer>
    </div>
  );
}