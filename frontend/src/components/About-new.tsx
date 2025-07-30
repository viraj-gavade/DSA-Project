import React from 'react';

function About() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      lineHeight: '1.6'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>About Tower of Hanoi</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#0070f3', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
          What is Tower of Hanoi?
        </h2>
        <p>
          The Tower of Hanoi is a classic mathematical puzzle invented by French mathematician 
          Édouard Lucas in 1883. The puzzle consists of three rods and a number of disks of 
          different sizes which can slide onto any rod.
        </p>
        <p>
          The puzzle starts with all disks stacked on one rod in order of decreasing size, 
          with the smallest at the top. The objective is to move the entire stack to the 
          last rod, obeying these simple rules:
        </p>
        <ul>
          <li>Only one disk may be moved at a time</li>
          <li>Each move consists of taking the top disk from one of the stacks and placing it on another rod</li>
          <li>No disk may be placed on top of a disk that is smaller than it</li>
        </ul>
        <p>
          The minimum number of moves required to solve a Tower of Hanoi puzzle is 2<sup>n</sup> - 1, 
          where n is the number of disks.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#10b981', borderBottom: '2px solid #10b981', paddingBottom: '10px' }}>
          Data Structure & Algorithm Concept
        </h2>
        <p>
          The Tower of Hanoi is an excellent example of several fundamental DSA concepts:
        </p>
        
        <h3 style={{ color: '#6b7280' }}>Stack Data Structure</h3>
        <p>
          Each rod in the Tower of Hanoi represents a <strong>stack</strong> - a Last-In-First-Out (LIFO) 
          data structure. Disks can only be added or removed from the top of each stack, which perfectly 
          mirrors the rules of the puzzle.
        </p>
        
        <h3 style={{ color: '#6b7280' }}>Recursion</h3>
        <p>
          The Tower of Hanoi can be solved elegantly using <strong>recursive algorithms</strong>. 
          To move n disks from source to destination:
        </p>
        <ol>
          <li>Move n-1 disks from source to auxiliary rod</li>
          <li>Move the largest disk from source to destination</li>
          <li>Move n-1 disks from auxiliary to destination</li>
        </ol>
        
        <h3 style={{ color: '#6b7280' }}>Problem Solving</h3>
        <p>
          This puzzle teaches <strong>divide and conquer</strong> strategies and helps understand 
          how complex problems can be broken down into simpler, recursive subproblems.
        </p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#ef4444', borderBottom: '2px solid #ef4444', paddingBottom: '10px' }}>
          Tech Stack
        </h2>
        <p>This Tower of Hanoi implementation uses modern web technologies:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ 
            backgroundColor: '#f9fafb', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ color: '#374151', margin: '0 0 10px 0' }}>Backend</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong>FastAPI</strong> - Modern Python web framework for building APIs with automatic 
              documentation and type validation.
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f9fafb', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ color: '#374151', margin: '0 0 10px 0' }}>Frontend</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong>React</strong> - Component-based JavaScript library for building 
              interactive user interfaces.
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f9fafb', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ color: '#374151', margin: '0 0 10px 0' }}>Language</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong>TypeScript</strong> - Adds static type checking to JavaScript 
              for better development experience and fewer bugs.
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#f9fafb', 
            padding: '15px', 
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <h4 style={{ color: '#374151', margin: '0 0 10px 0' }}>Communication</h4>
            <p style={{ margin: 0, fontSize: '14px' }}>
              <strong>Axios</strong> - Promise-based HTTP client for making API requests 
              between frontend and backend.
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#f59e0b', borderBottom: '2px solid #f59e0b', paddingBottom: '10px' }}>
          Implementation Approach
        </h2>
        
        <h3 style={{ color: '#6b7280' }}>Progressive Difficulty</h3>
        <p>
          The game features three difficulty levels to provide a gradual learning curve:
        </p>
        <ul>
          <li><strong>Easy (3 disks):</strong> Minimum 7 moves - Perfect for learning the basic mechanics</li>
          <li><strong>Medium (5 disks):</strong> Minimum 31 moves - Develops strategic thinking</li>
          <li><strong>Hard (8 disks):</strong> Minimum 255 moves - Challenges advanced problem-solving skills</li>
        </ul>
        
        <h3 style={{ color: '#6b7280' }}>Backend Validation</h3>
        <p>
          All game rules are enforced server-side to ensure data integrity:
        </p>
        <ul>
          <li>Source rod emptiness validation</li>
          <li>Disk size placement rules</li>
          <li>Game state consistency</li>
          <li>Move history tracking</li>
        </ul>
        
        <h3 style={{ color: '#6b7280' }}>User Experience Features</h3>
        <ul>
          <li>Real-time timer tracking</li>
          <li>Visual feedback for valid/invalid moves</li>
          <li>Interactive rod selection with highlighting</li>
          <li>Responsive design for different screen sizes</li>
          <li>Progress tracking across rounds</li>
        </ul>
      </section>

      <div style={{ 
        backgroundColor: '#f3f4f6', 
        padding: '20px', 
        borderRadius: '10px',
        textAlign: 'center',
        marginTop: '40px',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', color: '#6b7280' }}>
          "The Tower of Hanoi is not just a puzzle - it's a journey through the fundamentals 
          of computer science and algorithmic thinking."
        </p>
      </div>
    </div>
  );
}

export default About;
