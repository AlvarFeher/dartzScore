'use client'
import styles from './globals.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Inter_Tight } from 'next/font/google';
import { useEffect, useState } from 'react';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '700','900'], 
  display: 'swap', 
});

function PlayerNames() {
  const router = useRouter();
  
    const [selected, setSelected] = useState('301');
    
    const handleSelect = (value) => {
      setSelected(value);
    };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
   const player1NameInput = document.getElementById('player1Name').value.trim();
   const player2NameInput = document.getElementById('player2Name').value.trim();

   const player1Name = player1NameInput === "" ? "Player 1" : player1NameInput;
   const player2Name = player2NameInput === "" ? "Player 2" : player2NameInput;
    
  router.push(`/play?player1Name=${player1Name}&player2Name=${player2Name}&gamemode=${selected}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="playerNamesContainer">
        <div className="playerName">
          <label>Player 1 Name </label>
          <input type="text" id="player1Name" />
        </div>
        <div className="playerName">
          <label>Player 2 Name </label>
          <input type="text" id="player2Name" />
        </div>
      </div>
      <div>
        <div>Game Mode</div>
        <div className="gamemodes">
          <button 
            type="button" 
            className={`gameButton ${selected === '301' ? 'selected' : ''}`}
            onClick={() => handleSelect('301')}
          >
            301
          </button>
          <button 
            type="button" 
            className={`gameButton ${selected === '501' ? 'selected' : ''}`}
            onClick={() => handleSelect('501')}
          >
            501
          </button>
          <button 
            type="button" 
            className={`gameButton ${selected === '701' ? 'selected' : ''}`}
            onClick={() => handleSelect('701')}
          >
            701
          </button>
        </div>
      </div>
      <button class="startGame" type="submit">START GAME</button>
    </form>
  );

  }

function App() {
  return (
    <div className="App">
      <h1 className= {interTight.className}>Dartz Score</h1>
      <PlayerNames />
    </div>
  );
}

export default App;