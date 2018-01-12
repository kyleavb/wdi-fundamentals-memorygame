var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a Match!");
	}else{
		alert("Sorry try again");
	}
}

var flipCard = function(cardId){
	console.log("User flipped "+ cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
	
}

var bob = prompt("Number");
flipCard(bob);
var bit = prompt("Number 0-3");
flipCard(bit);


