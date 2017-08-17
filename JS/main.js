var cards = [
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/images/queen-of-diamonds.png"
	},
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/images/king-of-diamonds.png"
	}

];


var cardsInPlay = [];

var checkForMatch = function() {

 if(cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("you found a match");
		}
		else {
			alert("sorry try again!");
		};
 	};
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped" + " " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();

};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/images/back.png');
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
			document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();



