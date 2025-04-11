import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  ramdomCardGenerator()
};

let jackArray = ["♦", "♥", "♠", "♣",];
let cardArray = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K",];
let jack = document.querySelectorAll(".jack");
let cardNumber = document.querySelector(".cardNumber");
let card = document.querySelector(".card");

function ramdomCardGenerator() {
  // Easter Egg
  if (Math.random() < 0.0133) {
    jack[0].innerHTML = "★";
    jack[1].innerHTML = "★";
    cardNumber.innerHTML = "Joker";
    card.style.color = "orange";
    alert("🎉 Easter Egg UNLOCKED!");
    timeLeft = 11
    return;
  }

  // Normal card
  let getJack = jackArray[ramdomNumberGenerator(jackArray.length)];
  let getCardNumber = cardArray[ramdomNumberGenerator(cardArray.length)];

  if (getJack === "♦" || getJack === "♥") {
    card.style.color = "red";
  } else (card.style.color = "Black");

  jack[0].innerHTML = getJack;
  jack[1].innerHTML = getJack;
  cardNumber.innerHTML = getCardNumber;
  timeLeft = 11

};


function ramdomNumberGenerator(num) {
  return Math.floor(Math.random() * num);
};


// Timer 
let countdownElement = document.getElementById("countdown");
let timeLeft = 10;

function updateCountdown() {
  timeLeft--;
  countdownElement.textContent = `Next card in: ${timeLeft}`;

  if (timeLeft === 0) {
    ramdomCardGenerator();
  }
}
setInterval(updateCountdown, 1000);

// Button event
let nextbutton = document.querySelector(".btn");
nextbutton.addEventListener("click", ramdomCardGenerator);


// text input event
let heightInput = document.getElementsByName("height");
let widthInput = document.getElementsByName("width");


widthInput[0].addEventListener("change", (e) => {
  if (e.target.value !== "") {
    card.style.width = e.target.value + "px";
  }
  else { card.style.width = 250 }
});

heightInput[0].addEventListener("change", (e) => {
  if (e.target.value !== "") {
    card.style.height = e.target.value + "px";
  }
  else { card.style.width = 250 }
});

