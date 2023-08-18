/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  const symbols = ["diamond", "heart", "pica", "trebol"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const indexRandomSymbol = Math.floor(Math.random() * symbols.length);

  const indexRandomNumber = Math.floor(Math.random() * numbers.length);

  console.log(symbols[indexRandomSymbol]);
  console.log(numbers[indexRandomNumber]);

  document.querySelector(".card").classList.add(symbols[indexRandomSymbol]);
  document.querySelector(".card").innerHTML = numbers[indexRandomNumber];
};
