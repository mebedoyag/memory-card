import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1>Dog Memory Card</h1>
      <h2>Cute and funny {props.animal}</h2>
    </header>
  );
}

export default Header;