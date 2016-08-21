console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardOne === cardFour) {
// 	alert ("Sorry try again")
// }
// else if (cardOne === cardTwo){
// 	alert ("You found a match!")
// }
// else if (cardOne === cardThree){
// 	alert ("Sorry try again")
// }
// else if (cardThree === cardFour) {
// 	alert ("You found a match!")
// }

var cards  = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

var boardButton = document.getElementById('board-button');



createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.className = "card";
		document.getElementById("game-board").appendChild(newDiv);
		newDiv.setAttribute('data-card', cards[i]);
		newDiv.addEventListener('click', isTwoCards);
		}


function isTwoCards() {
  	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; 
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; 
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


var isMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
    	alert("You found a match!");
  	} else {
   		alert("Sorry, try again.");
  	}
}
} 

boardButton.addEventListener('click', createBoard);

