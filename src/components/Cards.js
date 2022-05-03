import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div>
      <ul className="cards">
        {
          Object.keys(props.animals).map(animal => {
            return (
              <Card 
                image={props.animals[animal].image} 
                animal={props.animals[animal]}
                animalId={animal}
                handleScore={props.handleScore} 
                shuffleAnimals={props.shuffleAnimals}
              />
            );
          })                                                                                                                                                                                                                                                                                                                                                                                                                       
        }
      </ul>
      <button onClick={props.loadSampleAnimals}>Load Sample Animal</button>
    </div>
  );
}

export default Cards;