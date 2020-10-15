import React from "react";
import "./App.css";

const Decks = (props) => {
  return (
    <div className="cardWrapper">
      <button onClick={() => props.handleChange("1")} className="cardButtons">
        <h1>pile 1</h1>
        <p className="pileNumbers">{props.pile.pile1.toString()}</p>
      </button>
      <button onClick={() => props.handleChange("2")} className="cardButtons">
        <h1>pile 2</h1>
        <p className="pileNumbers">{props.pile.pile2.toString()}</p>
      </button>
      <button onClick={() => props.handleChange("3")} className="cardButtons">
        <h1>pile 3</h1>
        <p className="pileNumbers">{props.pile.pile3.toString()}</p>
      </button>
    </div>
  );
};
export default Decks;
