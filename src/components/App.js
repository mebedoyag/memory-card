import React, { useEffect, useState } from "react";
import Header from "./Header";
import Preferences from "./Preferences";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import sampleAnimals from "../sampleAnimals";
import shuffleArray from "../helpers";
import Footer from "./Footer";

function App() {
  // const [type, setTytpe] = useState('image');
  const [animals, setAnimals] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);

  const resetStatus = () => {
    animals.forEach(animal => {
      animal.selected = false;
    })
  }

  const handleRepetition = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
  }

  const handleIncrement = () => {
    setScore(score + 1);
  }
    
  const handleScore = (id) => {
    animals.forEach(animal => {
      if (animal.id === id && animal.selected === false) {
        animal.selected = true;
        handleIncrement();

      } else if (animal.id === id && animal.selected === true) {
        handleRepetition();
        resetStatus();
      }
    })
  }
  
  const shuffleAnimals = () => {
    const animalsCopy = shuffleArray(animals);
    setAnimals(animalsCopy);
  }
  
  const handleClick = (id) => {
    shuffleAnimals();
    handleScore(id);
  }
  
  const loadSampleAnimals = () => {
    setAnimals(sampleAnimals);
  }
  
  return (
    <div className="memory-game">
      <div className="top">
        <Header animal="cats"/>
        <Preferences />
        <ScoreBoard current={score} best={bestScore}/>
      </div>
      <Cards 
        animals={animals} 
        handleClick={handleClick}
      /> 
      <button onClick={loadSampleAnimals} className="btt-load-sample">Load Sample Animal</button>
      <Footer author="Mike" />
    </div>
  );
}

export default App;