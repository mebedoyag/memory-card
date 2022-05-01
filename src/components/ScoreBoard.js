import React from "react";

function ScoreBoard(props) {
  return (
    <div className="score">
      <div>Current Score: {props.current}</div>
      <div>Best Score: {props.best}</div>
    </div>
  );
}

export default ScoreBoard;