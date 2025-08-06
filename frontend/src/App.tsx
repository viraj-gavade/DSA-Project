import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './components/Game';
import About from './components/About';
import ThreeBackground from './components/ThreeBackground';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when at top of page
      if (currentScrollY < 10) {
        setIsNavVisible(true);
      }
      // Hide nav when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Router>
      {/* 3D Background for entire app */}
      <ThreeBackground />
      
      <div className="min-h-screen flex flex-col relative z-10">
        <nav className={`fixed top-0 left-0 right-0 z-[9999] shadow-sm transition-transform duration-300 ease-in-out backdrop-blur-md bg-black/20 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="max-w-4xl mx-auto flex justify-center gap-8 p-4">
            <Link 
              to="/" 
              className="text-white hover:text-blue-200 text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 hover:no-underline backdrop-blur-sm border border-white/20"
            >
              🎮 Play Game
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-blue-200 text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 hover:no-underline backdrop-blur-sm border border-white/20"
            >
              📚 About
            </Link>
          </div>
        </nav>

        {/* Add padding to account for fixed nav */}
        <div className="pt-24 relative z-10">
          <div className="max-w-4xl mx-auto px-4 flex-1">
            <Routes>
              <Route path="/" element={<Game />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>

        <footer className="footer backdrop-blur-sm bg-black/20 border-t border-white/20">
          <div className="footer-content text-white/80">
            © 2025 Viraj Gavade — All rights reserved | MIT License
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;




