import React, { useState, useRef, useEffect } from 'react';
import './wordle.css';

const validWords = [
  "abbey", "adobe", "alien", "alpha", "angle", "apple", "armor", "arrow", "asset", "atlas",
  "audit", "beach", "beads", "beast", "bison", "blame", "blink", "bliss", "block", "board",
  "boost", "brave", "bread", "brick", "bride", "broad", "brush", "build", "cable", "camel",
  "cargo", "charm", "cheer", "chess", "chill", "claim", "clerk", "cloud", "clown", "coach",
  "color", "comic", "crane", "crash", "crate", "crawl", "creek", "crest", "crown", "curve",
  "daily", "dance", "dealt", "delta", "ditch", "dream", "drink", "drive", "drill", "earth",
  "elder", "elite", "error", "event", "exact", "fairy", "faith", "fault", "fiber", "field",
  "fiery", "flame", "fling", "float", "flora", "flute", "focus", "forge", "forth", "frame",
  "fresh", "frost", "ghost", "giant", "glide", "glory", "glove", "grace", "grain", "grant",
  "graph", "grasp", "grill", "grove", "guest", "habit", "happy", "hatch", "heart", "helix",
  "heron", "hobby", "honey", "horse", "hotel", "house", "ideal", "image", "index", "inner",
  "input", "irony", "ivory", "jewel", "jolly", "joint", "jumpy", "karma", "knack", "knife",
  "labor", "latch", "later", "lemon", "light", "liver", "lofty", "lunar", "lunch", "magic",
  "maker", "mango", "march", "mason", "mayor", "merit", "metal", "miner", "minor", "model",
  "money", "moral", "mount", "mouse", "music", "nerve", "noble", "oasis", "ocean", "offer",
  "olive", "orbit", "order", "organ", "other", "outer", "owner", "paint", "panel", "paper",
  "party", "patch", "peace", "pearl", "pedal", "piano", "pilot", "pinch", "place", "plane",
  "plant", "plaza", "plead", "plush", "point", "power", "praise", "pride", "prime", "prize",
  "probe", "prose", "proud", "quark", "queen", "query", "quick", "quiet", "quirk", "quota",
  "rally", "ranch", "range", "rapid", "raven", "reach", "ready", "realm", "rebel", "reign",
  "relax", "renew", "resin", "revel", "ridge", "risky", "river", "roast", "robot", "rocky",
  "rogue", "roomy", "ruler", "rumor", "salad", "salon", "sandy", "scale", "scare", "scent",
  "scope", "scout", "seize", "sense", "serve", "shade", "shard", "share", "sharp", "shear",
  "sheep", "shelf", "shell", "shift", "shine", "shock", "shout", "shrub", "siren", "skate",
  "skill", "slide", "slope", "smile", "smith", "solar", "solid", "space", "spice", "spike",
  "split", "spoil", "sport", "squad", "stack", "stage", "stake", "stand", "stark", "start",
  "stash", "state", "steal", "steam", "steep", "stiff", "still", "stone", "store", "storm",
  "story", "straw", "strip", "style", "sugar", "super", "swift", "swing", "sword", "table",
  "tasty", "teach", "tease", "tempo", "tenor", "thank", "theme", "thorn", "tiger", "toast",
  "today", "token", "topic", "torch", "tough", "trace", "trail", "train", "treat", "trend",
  "tribe", "trick", "troop", "truck", "trust", "truth", "tulip", "tummy", "tutor", "twice",
  "ultra", "uncle", "union", "unite", "urban", "usage", "value", "vapor", "vault", "vivid",
  "vocal", "voice", "vowel", "wager", "wagon", "waist", "waste", "watch", "water", "whale",
  "wheel", "whisk", "white", "whole", "witty", "woman", "world", "worry", "worth", "wrath",
  "yield", "youth", "zebra", "zesty", "zonal"
];
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * validWords.length);
  return validWords[randomIndex];
};

const Wordle = ({ onClose }) => {
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [solution, setSolution] = useState(getRandomWord()); 
  const maxAttempts = 6;
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const isValidWord = (word) => {
    return validWords.includes(word.toLowerCase());
  };
const handleGuess = () => {
  if (guess.length !== solution.length) {
    setMessage(`Guess must be ${solution.length} letters long.`);
    return;
  }

  if (!isValidWord(guess)) {
    setMessage(`"${guess}" is not a valid word. Try again.`);
    return;
  }

  const solutionArray = solution.toLowerCase().split('');
  const guessArray = guess.toLowerCase().split('');

  const feedback = guessArray.map((letter, index) => {
    if (letter === solutionArray[index]) {
      solutionArray[index] = null; 
      return 'correct';
    }
    return null; 
  });

  guessArray.forEach((letter, index) => {
    if (feedback[index] !== 'correct' && solutionArray.includes(letter)) {
      feedback[index] = 'present';
      solutionArray[solutionArray.indexOf(letter)] = null; 
    } else if (feedback[index] === null) {
      feedback[index] = 'absent'; 
    }
  });

  setHistory([...history, { guess, feedback }]);

  if (guess.toLowerCase() === solution.toLowerCase()) {
    setMessage('🎉 Congratulations! You solved it!');
  } else if (history.length + 1 === maxAttempts) {
    setMessage(`😞 Game over! The solution was "${solution}".`);
  } else {
    setMessage('');
  }

  setGuess('');
};


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  const isGameOver = history.length === maxAttempts || message.includes('Congratulations');
  return (
    <div className="wordle-popup" onClick={() => inputRef.current.focus()}>
      <div className="wordle-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
  
        <h2>Wordle Game</h2>
  
        <div className="history">
          {history.map((entry, index) => (
            <div key={index} className="guess-row">
              {Array.from(entry.guess).map((letter, idx) => (
                <div key={idx} className={`letter-box ${entry.feedback[idx]}`}>
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
  
        {!isGameOver && (
          <>
            <div className="input-row">
              {Array.from({ length: solution.length }).map((_, index) => (
                <div key={index} className="letter-box">
                  {guess[index] || ''}
                </div>
              ))}
            </div>
            <input
              ref={inputRef}
              type="text"
              value={guess}
              onChange={(e) =>
                setGuess(e.target.value.toUpperCase().slice(0, solution.length))
              }
              maxLength={solution.length}
              onKeyDown={handleKeyDown}
              className="hidden-input"
              disabled={isGameOver}
            />
          </>
        )}
  
        <button onClick={handleGuess} disabled={isGameOver}>
          Submit Guess
        </button>
  
        <p className="message">{message}</p>
  
        {isGameOver && (
          <button className="reset-btn" onClick={() => window.location.reload()}>
            Play Again
          </button>
        )}
      </div>
    </div>
  );
  
};

export default Wordle;
