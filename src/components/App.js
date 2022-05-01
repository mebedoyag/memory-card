import React, { useState } from "react";
import Header from "./Header";
import Preferences from "./Preferences";
import ScoreBoard from "./ScoreBoard";
import Cards from "./Cards";
import sampleAnimals from "../sampleAnimals";
import Footer from "./Footer";

function App() {
  const [type, setTytpe] = useState('image');
  const [level, setLevel] = useState(0);
  const [animal, setAnimals] = useState({});

  const loadSampleAnimals = () => {
    setAnimals(sampleAnimals);
  }

  return (
    <div className="memory-game">
      <div className="top">
        <Header animal="dogs"/>
        <Preferences />
        <ScoreBoard current={10} best={100}/>
      </div>
      <Cards animal={animal} loadSampleAnimals={loadSampleAnimals} /> 
      <Footer author="Mike" />
    </div>
  );
}

export default App;