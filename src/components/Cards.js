import React from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div>
      <ul className="cards">
        {
          props.animals.map(animal => (
            <Card 
              key={animal.id}
              id={animal.id}
              selected={animal.selected}
              name={animal.name}
              image={animal.image}
              handleClick={props.handleClick}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default Cards;