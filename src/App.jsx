import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the list of heroes
  const [heroes, setHeroes] = useState([
    { name: 'Phantom Assassin', type: 'Agility', level: 1 },
  ]);

  // Function to handle level increment
  const handleIncrement = (index) => {
    const newHeroes = [...heroes];
    newHeroes[index].level++;
    setHeroes(newHeroes);
  };

  // Function to handle level decrement
  const handleDecrement = (index) => {
    const newHeroes = [...heroes];
    if (newHeroes[index].level > 1) {
      newHeroes[index].level--;
      setHeroes(newHeroes);
    }
  };

  return (
    <div className="app-container">
      <div className="App">
        <h1>Hero Status</h1>
        <div className="heroes-container">
          {heroes.map((hero, index) => (
            <div key={index} className="hero">
              <img
                src="https://ifedmid.files.wordpress.com/2014/12/dota-2-foreseer-s-contract-update-brings-phantom-assassin-arcana-special-event-465378-2.jpg?w=1154" // Replace with your image link
                alt="Hero"
                className="hero-image"
                style={{ width: '100px', height: 'auto' }} // Adjust size here
              />
              <h2>{hero.name}</h2>
              <p>Type: {hero.type}</p>
              <p>Level: {hero.level}</p>
              <div className="level-controls">
                <button onClick={() => handleDecrement(index)}>-</button>
                <button onClick={() => handleIncrement(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
