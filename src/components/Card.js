import React from "react";

function Card(props) {
  return (
  <li className="cat">
    <img 
      src={props.image} 
      onClick={() => props.handleScore(props.animalId)} 
    />
  </li>
  );
}

export default Card;