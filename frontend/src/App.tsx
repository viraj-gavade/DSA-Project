import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './components/Game';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
          <div className="max-w-4xl mx-auto flex justify-center gap-8 p-4">
            <Link 
              to="/" 
              className="text-primary hover:text-primary/80 text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-accent hover:no-underline"
            >
              🎮 Play Game
            </Link>
            <Link 
              to="/about" 
              className="text-primary hover:text-primary/80 text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-accent hover:no-underline"
            >
              📚 About
            </Link>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 flex-1">
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <footer className="footer">
          <div className="footer-content">
            © 2025 Viraj Gavade — All rights reserved | MIT License
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;




