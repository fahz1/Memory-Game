console.log("up and running");
// var cardOne = "queen1";
// var cardTwo = "queen2";
// var cardThree = "king1";
// var cardFour = "king2";
// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardThree);
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
const checkForMatch = function (){
  if(cardsInPlay[0] === cardsInPlay[1]){
    console.log("you found match");
  } else {
    console.log("try again");
  }
}

const flipCard = function (cardId) {

  let cardOne = cards[0];
  cardsInPlay.push(cardOne);
  console.log("User flipped " + cards[cardId]);

  let cardTwo = cards[2];
  cardsInPlay.push(cardTwo);
  console.log("User flipped " + cards[cardId]);

  if(cardsInPlay.length === 2){
    checkForMatch();
    // if(cardsInPlay[0] === cardsInPlay[1]){
    //   console.log("you found match");
    // } else {
    //   console.log("try again");
    // }
  } else {
    console.log("nop");
  }

}
flipCard(0);
flipCard(1);
flipCard(2);
