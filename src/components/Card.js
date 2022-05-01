import React from "react";

function Card(props) {
  return (
  <li className="cat">
    <img src={props.image} />
  </li>
  );
}

export default Card;