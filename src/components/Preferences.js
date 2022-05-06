import React from "react";

function Preferences(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.loadSampleAnimals();
  }

  const { type } = props;

  return (
    <form className="preferences">
      <p>What do you want to see? </p>
      <div>
        <input 
          type="radio" 
          id="image" 
          name="type" 
          value="image" 
          checked={type === "image" ? true : false}
        />
        <label htmlFor="image">Images</label>
      </div>
      <div>
        <input 
          type="radio" 
          id="gif" 
          name="type" 
          value="gif" 
          checked={type === "gif" ? true : false}
        />
        <label htmlFor="gif">Gifs</label>
      </div>
      <button type="submit" onClick={handleClick}>Let's play!</button>
    </form>
  );
}

export default Preferences;