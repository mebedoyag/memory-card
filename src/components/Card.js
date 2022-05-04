import React from "react";

function Card(props) {
  return (
  <li className="cat">
    <img 
      id={props.id}
      alt={props.name}
      src={props.image}
      onClick={() => props.handleClick(props.id)}
    />
  </li>
  );
}

export default Card;