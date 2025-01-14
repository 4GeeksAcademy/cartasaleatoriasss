import "bootstrap";
import "./style.css";

window.onload = function() {
  let cardNumber = [
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
  let simbolo = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomsimboloNumber = Math.floor(Math.random() * simbolo.length);
  let finalsimbolo = simbolo[randomsimboloNumber];

  document.getElementById("cardContent").innerHTML =
    cardNumber[randomCardNumber];
  document.getElementById("theCard").className = "";
  document.getElementById("theCard").classList.add("card");
  document
    .getElementById("theCard")
    .classList.add(getsimboloeClass(finalsimbolo));
};

function getsimboloeClass(simbolo) {
  switch (simbolo) {
    case "Diamonds":
      return "simbolo-diamonds";
    case "Spades":
      return "simbolo-spades";
    case "Hearts":
      return "simbolo-hearts";
    case "Clubs":
      return "simbolo-clubs";
  }
}
