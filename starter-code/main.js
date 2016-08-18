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

createBoard = function () {
	for (var i = 1; i < 5; i += 1) {
		var board = document.getElementById("game-board");

		var newDiv = document.createElement('div');

		newDiv.className = "card";

		document.getElementById("game-board").appendChild(newDiv);
	}
}

createBoard()