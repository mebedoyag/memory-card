import React from "react";

function Card(props) {
  return (
  <li className="cat">
    <img 
      src={props.image} 
      onClick={() => {
        props.handleScore(props.animalId);
        // props.shuffleAnimals();
      }}
    />
  </li>
  );
}

export default Card;