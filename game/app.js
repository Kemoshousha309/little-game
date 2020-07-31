/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gameState;

int();




/* textContent to put an ordenary text but innerHtml to put a Html text*/

// document.querySelector("#score-" + activePlayer).textContent = dice;
// // document.querySelector("#score-" + activePlayer).innerHTML =' <em> dice <em>';

// var x = document.querySelector("#current-"+ activePlayer).textContent;
// console.log(x);anonymous






document.querySelector(".btn-roll").addEventListener('click', function() {
	
	if(gameState){
		// get a random number

	var dice = Math.floor(Math.random()*6)+1;

	// change the img
	document.querySelector(".dice").style.display = "block";

	document.querySelector(".dice").src ="dice-"+dice+".png";

	// update the round score 

	if(dice !== 1){

		roundScore += dice;
		document.getElementById('current-' + activePlayer).textContent = roundScore;

	}
	else{

		nextPlayer()			


	}

	}

});

document.querySelector(".btn-hold").addEventListener("click", function() {

	if(gameState){

	scores[activePlayer] += roundScore;
	document.getElementById('score-'+activePlayer).textContent =scores[activePlayer];
	

	if (scores[activePlayer] >= 20){

		document.getElementById("name-"+ activePlayer).textContent ="WINNER!";
		document.querySelector(".dice").style.display = "none";
		document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
		document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
		gameState = false;
		setTimeout(int, 10000); //reset the game after some seconds
		
	} 
	else{
		nextPlayer()	
	}

	}
})

function nextPlayer() {

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent ="0";
	document.getElementById('current-1').textContent ="0";

	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");
	document.querySelector(".dice").style.display = "none";			

};

document.querySelector(".btn-new").addEventListener("click", int);





function int() {

	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gameState = true; // state variables that decide that if the game is active or not, we can play it or not.


	document.querySelector(".dice").style.display = "none";

	document.getElementById('current-0').textContent ="0";
	document.getElementById('current-1').textContent ="0";
	document.getElementById('score-0').textContent ="0";
	document.getElementById('score-1').textContent ="0";
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");
	document.querySelector(".player-0-panel").classList.remove('winner');
	document.querySelector(".player-1-panel").classList.remove('winner');
	document.getElementById("name-0").textContent ="Player 1";
	document.getElementById("name-1").textContent ="Player 2";



};