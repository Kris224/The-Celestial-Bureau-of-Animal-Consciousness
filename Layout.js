
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, FileText, Stamp, Heart } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        
        :root {
          --ministry-burgundy: #8B1538;
          --ministry-gold: #D4A574;
          --ministry-cream: #F7F3E9;
          --ministry-sage: #9CAF88;
        }
        
        .ministry-stamp {
          position: relative;
          border: 3px solid var(--ministry-burgundy);
          border-radius: 50%;
          transform: rotate(-12deg);
        }
        
        .ministry-paper {
          background: linear-gradient(180deg, #FEFDF8 0%, #F9F6E8 100%);
          box-shadow: 0 4px 20px rgba(139, 21, 56, 0.1);
        }
        
        .typewriter {
          font-family: 'Courier New', monospace;
          letter-spacing: 0.1em;
        }
      `}</style>
      
      <header className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Ministry")} className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
              <div className="ministry-stamp bg-yellow-400 text-red-900 w-16 h-16 flex items-center justify-center font-bold text-sm">
                OFFICIAL
              </div>
              <div>
                <h1 className="text-3xl font-bold font-serif" style={{fontFamily: 'Crimson Text, serif'}}>
                  The Ministry of Absurd Inventions
                </h1>
                <p className="text-red-200 text-sm font-medium tracking-wide">
                  Department of Peculiar Pet Psychology
                </p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to={createPageUrl("Ministry")} 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === createPageUrl("Ministry") 
                    ? 'bg-red-700 text-white' 
                    : 'text-red-200 hover:text-white hover:bg-red-700'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Ministry Hub</span>
              </Link>
              <Link 
                to={createPageUrl("DreamBureau")} 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === createPageUrl("DreamBureau") 
                    ? 'bg-red-700 text-white' 
                    : 'text-red-200 hover:text-white hover:bg-red-700'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Dream Bureau</span>
              </Link>
              <Link 
                to={createPageUrl("AffectionRegistry")} 
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === createPageUrl("AffectionRegistry") 
                    ? 'bg-red-700 text-white' 
                    : 'text-red-200 hover:text-white hover:bg-red-700'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Affection Registry</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        {children}
      </main>

      <footer className="bg-red-900 text-red-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-lg mb-2">
            Est. 1847 • Serving Peculiar Pet Owners Since the Victorian Era
          </p>
          <p className="text-sm opacity-75">
            All dream analyses are conducted by our finest imaginary bureaucrats
          </p>
        </div>
      </footer>
    </div>
  );
}
