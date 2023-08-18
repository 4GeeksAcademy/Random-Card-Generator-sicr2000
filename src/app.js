/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];

  function randomSymbolFunction() {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.lenght)];

    return symbols[randomSymbol];
  }

  function randomNumberFunction() {
    const randomNumber = numbers[Math.floor(Math.random() * numbers.lenght)];

    return numbers[randomNumber];
  }

  console.log(randomNumberFunction());
  console.log(randomSymbolFunction());

  document.querySelector(".icon").innerHTML = randomSymbolFunction();
  document.querySelector(".number").innerHTML = randomNumberFunction();
};
