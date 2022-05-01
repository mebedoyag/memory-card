import React from "react";

function Preferences(props) {
  return (
    <form className="preferences">
      <p>What do you want to see? </p>
      <div>
        <input type="radio" id="image" name="type" value="image" />
        <label htmlFor="image">Images</label>
      </div>
      <div>
        <input type="radio" id="gif" name="type" value="gif" />
        <label htmlFor="gif">Gifs</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Preferences;