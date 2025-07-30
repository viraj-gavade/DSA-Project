import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Define GameState type
type GameState = {
  [key: string]: number[];
};

const API_BASE_URL = 'http://localhost:8000';

function Game() {
  const [gameState, setGameState] = useState<GameState>({
    A: [],
    B: [],
    C: []
  });
  const [fromRod, setFromRod] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [numDisks, setNumDisks] = useState<number>(3);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showHowToPlay, setShowHowToPlay] = useState<boolean>(true);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // Map round to disk count
  const getDisksForRound = (round: number): number => {
    switch (round) {
      case 1: return 3;
      case 2: return 5;
      case 3: return 8;
      default: return 3;
    }
  };

  // Check if game is won (all disks on rod C in correct order)
  const isWon = useCallback((): boolean => {
    const rodC = gameState.C || [];
    if (rodC.length !== numDisks) return false;
    
    // Check if disks are in correct order [N, N-1, ..., 2, 1]
    for (let i = 0; i < rodC.length; i++) {
      if (rodC[i] !== numDisks - i) return false;
    }
    return true;
  }, [gameState.C, numDisks]);

  // Fetch current game state
  const fetchGameState = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/state`);
      setGameState(response.data);
    } catch (error) {
      console.error('Error fetching game state:', error);
    }
  };

  // Reset game with specified round
  const resetGame = async (round: number = currentRound) => {
    try {
      const disks = getDisksForRound(round);
      await axios.post(`${API_BASE_URL}/reset`, { disks });
      // Update state
      setCurrentRound(round);
      setNumDisks(disks);
      setFromRod(null);
      setErrorMessage('');
      // Don't start timer automatically - wait for user to click start
      setGameStarted(false);
      setStartTime(null);
      setElapsedTime(0);
      // Refetch state after reset
      await fetchGameState();
    } catch (error) {
      console.error('Error resetting game:', error);
    }
  };

  // Start the game and begin timer
  const startGame = () => {
    setGameStarted(true);
    setStartTime(Date.now());
    setElapsedTime(0);
  };

  // Start next round
  const startNextRound = () => {
    const nextRound = currentRound + 1;
    resetGame(nextRound);
  };

  // Handle rod click
  const handleRodClick = async (rodName: string) => {
    // Don't allow moves if game hasn't started
    if (!gameStarted) {
      setErrorMessage('Click "Start Game" to begin playing!');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    if (fromRod === null) {
      // First click - select source rod
      setFromRod(rodName);
      setErrorMessage('');
    } else {
      // Second click - attempt move
      try {
        await axios.post(`${API_BASE_URL}/move`, {
          from_rod: fromRod,
          to_rod: rodName
        });
        // Clear selection and refetch state
        setFromRod(null);
        setErrorMessage('');
        await fetchGameState();
      } catch (error: any) {
        // Show user-friendly error message
        const apiMessage = error.response?.data?.detail || 'Move failed';
        let userMessage = apiMessage;
        
        // Convert API messages to user-friendly messages
        if (apiMessage === 'Source rod is empty.') {
          userMessage = `Rod ${fromRod} is empty! Please select a rod with disks to move.`;
        } else if (apiMessage.includes('Cannot place larger disk on smaller disk')) {
          userMessage = `Invalid move! You cannot place a larger disk on top of a smaller disk.`;
        }
        
        setErrorMessage(userMessage);
        setFromRod(null);
        
        // Auto-clear error message after 3 seconds
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
  };

  // Initialize game on component mount
  useEffect(() => {
    // Always initialize the game with Easy difficulty (3 disks) on first load
    resetGame(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (startTime && gameStarted && !isWon()) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, gameStarted, isWon]);

  // Render a single disk
  const renderDisk = (diskSize: number) => {
    const width = 40 + diskSize * 20; // Base width + size multiplier
    const colors = ['bg-red-500', 'bg-teal-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];
    const colorClass = colors[diskSize - 1] || 'bg-gray-400';
    
    return (
      <div
        key={diskSize}
        className={`disk ${colorClass}`}
        style={{ width: `${width}px` }}
      >
        {diskSize}
      </div>
    );
  };

  // Render a single rod
  const renderRod = (rodName: string) => {
    const disks = gameState[rodName] || [];
    const isSelected = fromRod === rodName;
    
    return (
      <div
        key={rodName}
        onClick={() => handleRodClick(rodName)}
        className={`rod ${isSelected ? 'selected' : ''}`}
      >
        <h3 className="rod-title">
          Rod {rodName}
        </h3>
        
        {/* Rod pole */}
        <div className="rod-pole" />
        
        {/* Disks (render from bottom to top) */}
        <div className="disks-container">
          {disks.map((diskSize, index) => renderDisk(diskSize))}
        </div>
        
        {/* Base */}
        <div className="rod-base" />
      </div>
    );
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-center gap-5 mb-4">
        <h1 className="text-3xl font-bold text-foreground">Tower of Hanoi</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="btn btn-secondary"
        >
          How to Play
        </button>
      </div>
      <h2 className="text-xl font-semibold text-center mb-4">Round {currentRound} - {numDisks} Disks</h2>
      
      {/* Timer Display */}
      <div className="timer-display">
        Time: {elapsedTime}s
      </div>

      {/* Difficulty Selector */}
      <div className="difficulty-selector">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Difficulty:</h3>
        <div className="difficulty-buttons">
          <button 
            onClick={() => resetGame(1)}
            className={`btn min-w-36 ${currentRound === 1 ? 'btn-success' : 'btn-outline'}`}
          >
            Easy (3 disks)
          </button>
          <button 
            onClick={() => resetGame(2)}
            className={`btn min-w-36 ${currentRound === 2 ? 'btn-warning' : 'btn-outline'}`}
          >
            Medium (5 disks)
          </button>
          <button 
            onClick={() => resetGame(3)}
            className={`btn min-w-36 ${currentRound === 3 ? 'btn-danger' : 'btn-outline'}`}
          >
            Hard (8 disks)
          </button>
        </div>
      </div>
      
      {isWon() && (
        <div className="victory-banner animate-slide-up">
          🎉 You Won Round {currentRound}! 🎉
          {currentRound < 3 ? (
            <div className="mt-4">
              <button 
                onClick={startNextRound}
                className="btn btn-success"
              >
                Start Round {currentRound + 1}
              </button>
            </div>
          ) : (
            <div className="mt-4 text-base">
              🏆 All rounds complete! You're a Tower of Hanoi master! 🏆
            </div>
          )}
        </div>
      )}
      
      <div className="text-center mb-6 space-y-3">
        {!gameStarted && (
          <button 
            onClick={startGame}
            className="btn btn-success text-lg px-8 py-3"
          >
            🚀 Start Game
          </button>
        )}
        <div>
          <button 
            onClick={() => resetGame()} 
            className="btn btn-default"
          >
            Reset Round {currentRound} ({numDisks} disks)
          </button>
        </div>
      </div>
      
      {errorMessage && (
        <div className="alert alert-error animate-fade-in">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
      
      {fromRod && (
        <div className="alert alert-info animate-fade-in">
          <strong>Step 2:</strong> Selected rod {fromRod}. Click destination rod to move the top disk.
        </div>
      )}
      
      {!fromRod && !errorMessage && gameStarted && (
        <div className="alert alert-info animate-fade-in">
          <strong>Step 1:</strong> Click on a rod with disks to select it as the source.
        </div>
      )}

      {!gameStarted && !errorMessage && !showHowToPlay && (
        <div className="alert alert-info animate-fade-in">
          <strong>Ready to play!</strong> Click "Start Game" to begin the timer and start moving disks.
        </div>
      )}
      
      {/* Game board */}
      <div className="game-board">
        {renderRod('A')}
        {renderRod('B')}
        {renderRod('C')}
      </div>
      
      <div className="mt-8 text-xs opacity-70">
        <h3 className="font-semibold mb-2">Game State (Debug):</h3>
        <pre className="text-left bg-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
          {JSON.stringify(gameState, null, 2)}
        </pre>
      </div>

      {/* Initial How to Play Modal - shows on first load */}
      {showHowToPlay && (
        <div className="modal-backdrop animate-fade-in">
          <div className="modal-content animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-foreground">🎮 Welcome to Tower of Hanoi!</h2>
            
            <div className="text-left space-y-4">
              <p className="text-lg"><strong>Goal:</strong> Move all disks from Rod A to Rod C</p>
              
              <div>
                <p className="font-semibold mb-2">Quick Rules:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Only move one disk at a time</li>
                  <li>Only move the top disk from a rod</li>
                  <li>Never place a larger disk on a smaller one</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">How to Play:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Click on a rod to select it (source)</li>
                  <li>Click on another rod to move the disk there (destination)</li>
                  <li>Solve in minimum moves for the best score!</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">💡 Tip: The minimum moves for 3 disks is 7 moves!</p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowHowToPlay(false)}
              className="btn btn-success mt-6 text-lg px-8"
            >
              Got it! Let's Play 🚀
            </button>
          </div>
        </div>
      )}

      {/* Regular How to Play Modal */}
      {showModal && (
        <div className="modal-backdrop animate-fade-in">
          <div className="modal-content animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-foreground">How to Play</h2>
            
            <div className="text-left space-y-4">
              <p><strong>Goal:</strong> Move all disks from Rod A to Rod C in the correct order (largest at bottom, smallest at top).</p>
              
              <div>
                <p className="font-semibold mb-2">Rules:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Move one disk at a time</li>
                  <li>Only move the top disk from a rod</li>
                  <li>Never place a larger disk on a smaller disk</li>
                  <li>Use Rod B as a helper</li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Rounds:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Round 1: 3 disks</li>
                  <li>Round 2: 5 disks</li>
                  <li>Round 3: 8 disks</li>
                </ul>
              </div>
              
              <p><strong>Controls:</strong> Click a rod to select it, then click another rod to move the top disk.</p>
            </div>
            
            <button 
              onClick={() => setShowModal(false)}
              className="btn btn-secondary mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
