var cardsInPlay = [];
var cards = [
{
	rank: "queen",
	suit: "heart",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "heart",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


var checkForMatch = function(){
	if(cardsInPlay[0].rank === cardsInPlay[1].rank){
		alert("You found a Match!");
	}else{
		alert("Sorry try again");
	}
}

var flipCard = function(){
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	

	if(cardsInPlay.length === 2){
		checkForMatch();
	}
}

var createBoard = function(){
	for(i=0;i<cards.length;i++){
		cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard();

