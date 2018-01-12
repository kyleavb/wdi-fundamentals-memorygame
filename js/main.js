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

var flipCard = function(cardId){
	console.log("User flipped "+ cards[cardId].rank);
	console.log("Card Suit: "+ cards[cardId].suit);
	console.log("Image Location: "+ cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
	
}

var bob = prompt("Number ");
flipCard(bob);
var bit = prompt("Number 0-3");
flipCard(bit);


