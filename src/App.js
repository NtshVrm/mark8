import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍔": "Burger",
  "🍟": "Fries",
  "🍫": "Chocolate",
  "🍕": "Pizza",
  "🌭": "Hotdog",
  "🧇": "Waffle",
  "🍦": "Ice Cream",
  "🍜": "Noodles",
  "🍞": "Bread",
  "🍩": "Doughnut"
};

var foods = Object.keys(foodDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function foodinputHandler(event) {
    var userInput = event.target.value;

    var meaning = foodDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have this in our database";
    }

    // console.log(meaning);
    setMeaning(meaning);
  }

  function foodClickHandler(emoji) {
    var meaning = foodDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out </h1>
      <input onChange={foodinputHandler}></input>
      <div>The Food is: {meaning}</div>

      <div>Click on any emoji below:</div>
      {foods.map(function (emoji) {
        return (
          <span
            onClick={() => foodClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
