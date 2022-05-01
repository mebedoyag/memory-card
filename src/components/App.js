import React, { useState } from "react";
import Header from "./Header";
import Preferences from "./Preferences";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import sampleAnimals from "../sampleAnimals";
import Footer from "./Footer";

function App() {
  // const [type, setTytpe] = useState('image');
  const [animals, setAnimals] = useState({});
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const loadSampleAnimals = () => {
    setAnimals(sampleAnimals);
  }

  const changeSelectedStatus = (cat) => {
    const copyAnimal = {...animals[cat], selected: true };
    const copyAnimals = { ...animals, [cat]: copyAnimal };
    setAnimals(copyAnimals);
  }

  const resetSelectedStatus = () => {
    return Object.keys(animals).reduce((acc, current) => {
      const copyAnimal = {...animals[current], selected: false };
      acc[current] = copyAnimal;
      return acc;
    }, {})
  }

  const handleScore = (clickedCat) => {
    console.log(clickedCat);
    if (animals[clickedCat].selected) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      const temp = resetSelectedStatus();
      setAnimals(temp);
    } else {
      setScore(score + 1);
      changeSelectedStatus(clickedCat);
    }
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
        loadSampleAnimals={loadSampleAnimals} 
        handleScore={handleScore}
      /> 
      <Footer author="Mike" />
    </div>
  );
}

export default App;