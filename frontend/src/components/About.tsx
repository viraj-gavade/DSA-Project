import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-foreground">About Tower of Hanoi</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary border-b-2 border-primary pb-2 mb-4">
          What is Tower of Hanoi?
        </h2>
        <div className="space-y-4 text-muted-foreground">
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
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Only one disk may be moved at a time</li>
            <li>Each move consists of taking the top disk from one of the stacks and placing it on another rod</li>
            <li>No disk may be placed on top of a disk that is smaller than it</li>
          </ul>
          <p>
            The minimum number of moves required to solve a Tower of Hanoi puzzle is 2<sup>n</sup> - 1, 
            where n is the number of disks.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 border-b-2 border-green-600 pb-2 mb-4">
          Data Structure & Algorithm Concept
        </h2>
        <div className="space-y-6 text-muted-foreground">
          <p>
            The Tower of Hanoi is an excellent example of several fundamental DSA concepts:
          </p>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Stack Data Structure</h3>
            <p>
              Each rod in the Tower of Hanoi represents a <strong>stack</strong> - a Last-In-First-Out (LIFO) 
              data structure. Disks can only be added or removed from the top of each stack, which perfectly 
              mirrors the rules of the puzzle.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Recursion</h3>
            <p className="mb-2">
              The Tower of Hanoi can be solved elegantly using <strong>recursive algorithms</strong>. 
              To move n disks from source to destination:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Move n-1 disks from source to auxiliary rod</li>
              <li>Move the largest disk from source to destination</li>
              <li>Move n-1 disks from auxiliary to destination</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Problem Solving</h3>
            <p>
              This puzzle teaches <strong>divide and conquer</strong> strategies and helps understand 
              how complex problems can be broken down into simpler, recursive subproblems.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 border-b-2 border-red-600 pb-2 mb-4">
          Tech Stack
        </h2>
        <p className="text-muted-foreground mb-6">This Tower of Hanoi implementation uses modern web technologies:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <div className="card-content">
              <h4 className="font-semibold text-foreground mb-2">Backend</h4>
              <p className="text-sm text-muted-foreground">
                <strong>FastAPI</strong> - Modern Python web framework for building APIs with automatic 
                documentation and type validation.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">
                <strong>React</strong> - Component-based JavaScript library for building 
                interactive user interfaces.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h4 className="font-semibold text-foreground mb-2">Language</h4>
              <p className="text-sm text-muted-foreground">
                <strong>TypeScript</strong> - Adds static type checking to JavaScript 
                for better development experience and fewer bugs.
              </p>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h4 className="font-semibold text-foreground mb-2">Communication</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Axios</strong> - Promise-based HTTP client for making API requests 
                between frontend and backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-600 border-b-2 border-yellow-600 pb-2 mb-4">
          Implementation Approach
        </h2>
        
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Progressive Difficulty</h3>
            <p className="mb-2">
              The game features three difficulty levels to provide a gradual learning curve:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Easy (3 disks):</strong> Minimum 7 moves - Perfect for learning the basic mechanics</li>
              <li><strong>Medium (5 disks):</strong> Minimum 31 moves - Develops strategic thinking</li>
              <li><strong>Hard (8 disks):</strong> Minimum 255 moves - Challenges advanced problem-solving skills</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Backend Validation</h3>
            <p className="mb-2">
              All game rules are enforced server-side to ensure data integrity:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Source rod emptiness validation</li>
              <li>Disk size placement rules</li>
              <li>Game state consistency</li>
              <li>Move history tracking</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">User Experience Features</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Real-time timer tracking</li>
              <li>Visual feedback for valid/invalid moves</li>
              <li>Interactive rod selection with highlighting</li>
              <li>Responsive design for different screen sizes</li>
              <li>Progress tracking across rounds</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="card-content text-center">
          <p className="italic text-blue-800 font-medium">
            "The Tower of Hanoi is not just a puzzle - it's a journey through the fundamentals 
            of computer science and algorithmic thinking."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
