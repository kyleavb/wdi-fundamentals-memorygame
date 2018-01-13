var userScore = 0;
var userAttempts = 3;
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
	if(userAttempts > 1){
		if(cardsInPlay[0].rank === cardsInPlay[1].rank){
			alert("You found a Match!");
			userScore = userScore + 100;
			updateHud(false, true);
		}else{
			alert("Sorry try again");
			userAttempts = userAttempts - 1;
			updateHud(true, false);
		}
	}else{
			alert("Game Over");
			document.getElementsByClassName("heart")[0].remove();
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
var createHud = function(){
	for(i=0;i<userAttempts;i++){
		lifeIcon = document.createElement("img");
		lifeIcon.setAttribute("class", "heart");
		lifeIcon.setAttribute("src", "images/heart.png")
		document.getElementsByClassName("attempts")[0].appendChild(lifeIcon);
	}
	scoreElement = document.createElement("p");
	scoreElement.setAttribute("class", "currentScore");
	scoreElement.innerHTML = userScore;
	document.getElementsByClassName("score")[0].appendChild(scoreElement);
}
var updateHud = function(lifeDown, scoreUp){
	if(lifeDown == true){
		document.getElementsByClassName("heart")[0].remove();
	}else if(scoreUp == true){
		var setScore = document.getElementsByClassName("currentScore")[0].innerHTML = userScore; 
	}
	resetBoard();
}
var createBoard = function(){
	for(i=0;i<cards.length;i++){
		cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("class", "playingCard")
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
var resetBoard = function(){
	for(i=0;i<cards.length;i++){
		document.getElementsByClassName("playingCard")[i].setAttribute("src", "images/back.png");
	}
	shuffle(cards);
	cardsInPlay = [];
}

'did not write this function, found online'
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

createHud();
createBoard();

