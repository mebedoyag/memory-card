import React, { useEffect, useState } from "react";
import Header from "./Header";
import Preferences from "./Preferences";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import sampleAnimals from "../sampleAnimals";
import genRandArray from "../helpers";
import Footer from "./Footer";

function App() {
  // const [type, setTytpe] = useState('image');
  const [animals, setAnimals] = useState({});
  const [currentAnimal, setCurrentAnimal] = useState("");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const reordered = obj => {
    return genRandArray(6).reduce((acc, current) => {
      const temp = `animal${current}`;
      acc[temp] = { ...sampleAnimals[temp] };

      return acc;
    }, {});
  }

  const loadSampleAnimals = () => {
    // const reorderedAnimals = reordered(sampleAnimals);
    setAnimals(sampleAnimals);
  }

  const shuffleAnimals = () => {
    const reorderedAnimals = reordered(animals);
    setAnimals(reorderedAnimals);
  }

  useEffect(() => {
    if (score !== 0) {
      const changeSelectedStatus = (cat) => {
        const copyAnimal = {...animals[cat], selected: true };
        const copyAnimals = { ...animals, [cat]: copyAnimal };
        setAnimals(copyAnimals);
      }
      changeSelectedStatus(currentAnimal);
    }
  }, [score]);


  useEffect(() => {
    const resetSelectedStatus = () => {
      return Object.keys(animals).reduce((acc, current) => {
        const copyAnimal = {...animals[current], selected: false };
        acc[current] = copyAnimal;
        return acc;
      }, {})
    }
    setAnimals(resetSelectedStatus());
  }, [score]);


  const handleScore = (clickedCat) => {
    if (animals[clickedCat].selected) {
      console.log("i am here");
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    } else {
      setScore(score + 1);
      setCurrentAnimal(clickedCat);
    }
  }

  useEffect(() => {
    shuffleAnimals();
  }, [score, bestScore]);

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
        shuffleAnimals={shuffleAnimals}
      /> 
      <Footer author="Mike" />
    </div>
  );
}

export default App;