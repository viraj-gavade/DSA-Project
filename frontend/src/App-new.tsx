import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Game from './components/Game';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{
          backgroundColor: '#f8f9fa',
          padding: '15px 0',
          borderBottom: '2px solid #dee2e6',
          marginBottom: '20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px'
          }}>
            <Link 
              to="/" 
              style={{
                textDecoration: 'none',
                color: '#007bff',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
            >
              🎮 Play Game
            </Link>
            <Link 
              to="/about" 
              style={{
                textDecoration: 'none',
                color: '#007bff',
                fontSize: '18px',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
            >
              📚 About
            </Link>
          </div>
        </nav>

        <header className="App-header">
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
