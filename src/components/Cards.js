import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div>
      <ul className="cards">
        {
          Object.keys(props.animal).map(ani => <Card image={props.animal[ani].image} />)                                                                                                                                                                                                                                                                                                                                                                                                                       
        }
      </ul>
      <button onClick={props.loadSampleAnimals}>Load Sample Animal</button>
    </div>
  );
}

export default Cards;