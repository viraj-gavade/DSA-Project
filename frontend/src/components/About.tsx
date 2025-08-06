import React from 'react';

function About() {
  return (
    <div className="py-6 relative z-0">
      {/* Main About Page Container with Backdrop Blur */}
      <div className="backdrop-blur-md bg-black/30 rounded-2xl p-8 mx-4 my-6 border border-white/20 shadow-2xl relative z-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">About Tower of Hanoi</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-300 border-b-2 border-blue-300 pb-2 mb-4 drop-shadow-md">
              What is Tower of Hanoi?
            </h2>
            <div className="space-y-4 text-white/90">
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
            <h2 className="text-2xl font-semibold text-green-300 border-b-2 border-green-300 pb-2 mb-4 drop-shadow-md">
              Data Structure &amp; Algorithm Concept
            </h2>
            <div className="space-y-6 text-white/90">
              <p>
                The Tower of Hanoi is an excellent example of several fundamental DSA concepts:
              </p>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2 drop-shadow-sm">Stack Data Structure</h3>
                <p>
                  Each rod in the Tower of Hanoi represents a <strong className="text-blue-300">stack</strong> - a Last-In-First-Out (LIFO) 
                  data structure. Disks can only be added or removed from the top of each stack, which perfectly 
                  mirrors the rules of the puzzle.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2 drop-shadow-sm">Recursion</h3>
                <p className="mb-2">
                  The Tower of Hanoi can be solved elegantly using <strong className="text-green-300">recursive algorithms</strong>. 
                  To move n disks from source to destination:
                </p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Move n-1 disks from source to auxiliary rod</li>
                  <li>Move the largest disk from source to destination</li>
                  <li>Move n-1 disks from auxiliary to destination</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2 drop-shadow-sm">Problem Solving</h3>
                <p>
                  This puzzle teaches <strong className="text-purple-300">divide and conquer</strong> strategies and helps understand 
                  how complex problems can be broken down into simpler, recursive subproblems.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-red-300 border-b-2 border-red-300 pb-2 mb-4 drop-shadow-md">
              Tech Stack
            </h2>
            <p className="text-white/90 mb-6">This Tower of Hanoi implementation uses modern web technologies:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-4 shadow-lg">
                <div>
                  <h4 className="font-semibold text-white mb-2 drop-shadow-sm">Backend</h4>
                  <p className="text-sm text-white/80">
                    <strong className="text-yellow-300">Flask</strong> - Modern Python web framework for building APIs with automatic 
                    documentation and type validation.
                  </p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-4 shadow-lg">
                <div>
                  <h4 className="font-semibold text-white mb-2 drop-shadow-sm">Frontend</h4>
                  <p className="text-sm text-white/80">
                    <strong className="text-cyan-300">React</strong> - Component-based JavaScript library for building 
                    interactive user interfaces.
                  </p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-4 shadow-lg">
                <div>
                  <h4 className="font-semibold text-white mb-2 drop-shadow-sm">Language</h4>
                  <p className="text-sm text-white/80">
                    <strong className="text-blue-300">TypeScript</strong> - Adds static type checking to JavaScript 
                    for better development experience and fewer bugs.
                  </p>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg p-4 shadow-lg">
                <div>
                  <h4 className="font-semibold text-white mb-2 drop-shadow-sm">Communication</h4>
                  <p className="text-sm text-white/80">
                    <strong className="text-pink-300">Axios</strong> - Promise-based HTTP client for making API requests 
                    between frontend and backend.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-300 border-b-2 border-yellow-300 pb-2 mb-4 drop-shadow-md">
              Implementation Approach
            </h2>
            
            <div className="space-y-6 text-white/90">
              <div>
                <h3 className="text-lg font-medium text-white mb-2 drop-shadow-sm">Progressive Difficulty</h3>
                <p className="mb-2">
                  The game features three difficulty levels to provide a gradual learning curve:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong className="text-green-300">Easy (3 disks):</strong> Minimum 7 moves - Perfect for learning the basic mechanics</li>
                  <li><strong className="text-yellow-300">Medium (5 disks):</strong> Minimum 31 moves - Develops strategic thinking</li>
                  <li><strong className="text-red-300">Hard (8 disks):</strong> Minimum 255 moves - Challenges advanced problem-solving skills</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-2 drop-shadow-sm">Backend Validation</h3>
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
                <h3 className="text-lg font-medium text-white mb-2 drop-shadow-sm">User Experience Features</h3>
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

          <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <p className="italic text-blue-200 font-medium text-lg drop-shadow-sm">
                "The Tower of Hanoi is not just a puzzle - it's a journey through the fundamentals 
                of computer science and algorithmic thinking."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
