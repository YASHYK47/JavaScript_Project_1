/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundscore,activePlayer,game;

init();
// document.querySelector('#currentscore-'+activePlayer).innerHTML='<em>'+dice+'</em>';
// var x=document.querySelector('#currentscore-0').textContent;
document.querySelector('.rolldice').addEventListener('click',function(){
	//1).random number
	if(game==true){
		var dice=Math.floor(Math.random()*6)+1;
		var diceDom=document.querySelector('.dice');
		diceDom.style.display="block";
		diceDom.src="dice-"+dice+".png";
	//2).display result
		if(dice!==1){
			roundscore+=dice
		// scorecard+=dice
			document.querySelector('#currentscore-'+activePlayer).textContent=roundscore;
		// document.querySelector('#');
	}
	else{
		nextplayer();	
	}
}
});

document.querySelector('.hold').addEventListener('click',function(){
	if(game){
		scores[activePlayer]+=roundscore;
		document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
		if(scores[activePlayer]>=100){	
			document.querySelector('#player-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display="none";
			// document.getElementById('player-'+activePlayer).textContent='WINNER!!';
			document.querySelector('.panel-'+activePlayer).classList.add('winner');
			document.querySelector('.panel-'+activePlayer).classList.remove('active');
			document.getElementById('currentscore-0').textContent='0';
			document.querySelector('.current').style.color='black';
			document.getElementById('currentscore-1').textContent='0';
			game=false;
		// init();
	}
	// document.getElementById('score-1').textContent=scores[activePlayer];
	else{
		nextplayer();
	}
}
});
document.querySelector('.newgame').addEventListener('click',init);

function init(){
	scores=[0,0];
	roundscore=0;
	activePlayer=0;
	game=true;
	document.getElementById('currentscore-0').textContent='0';
	document.getElementById('currentscore-1').textContent='0';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.querySelector('.dice').style.display="none";
	document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';
	document.querySelector('.panel-0').classList.remove('winner');
	document.querySelector('.panel-1').classList.remove('winner');
	document.querySelector('.panel-0').classList.remove('active');
	document.querySelector('.panel-1').classList.remove('active');
	document.querySelector('.panel-0').classList.add('active');
}
function nextplayer(){
	if(activePlayer===0){
			activePlayer=1;
	}
	else{
			activePlayer=0;
	}
	roundscore=0;
	document.getElementById('currentscore-0').textContent='0';
	document.getElementById('currentscore-1').textContent='0';
	document.querySelector('.dice').style.display="none";
	document.querySelector('.panel-0').classList.toggle('active');
	document.querySelector('.panel-1').classList.toggle('active');	
}