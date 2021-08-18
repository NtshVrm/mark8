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
  "🍩": "Doughnut",
  "🥞": "Pancakes",
  "🥨": "Pretzel",
  "🍤": "Prawns",
  "🍰": "Cake"
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
      <section className="section ow edu">
        <div className="container container-center title">
          <h1 className="color-inverted"> FOOD EMOJI INTERPRETER</h1>

          <input onChange={foodinputHandler}></input>
          <div className="purple">
            <u>THE FOOD IS:</u> <div className="blue">{meaning}</div>
          </div>

          <div className="purple">CLICK ON ANY EMOJI BELOW ⬇:</div>
          {foods.map(function (emoji) {
            return (
              <span
                className="ow"
                onClick={() => foodClickHandler(emoji)}
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
                key={emoji}
              >
                {" "}
                {emoji}
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}
