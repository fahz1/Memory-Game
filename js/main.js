console.log("up and running");
// var cardOne = "queen1";
// var cardTwo = "queen2";
// var cardThree = "king1";
// var cardFour = "king2";
// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardThree);
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if(cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    console.log("you found match");
  } else {
    console.log("try again");
  }
} else {
  console.log("nop");
}
