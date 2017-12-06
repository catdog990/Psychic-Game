var gameOver=false;
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var ties = 0;
	var GuessesLeft = 9;
	var currentGuess = 0;
//***function runs whenever a key is pressed***///
	document.onkeyup = function(event){

		var userGuess = event.key;
//***might need to go abouve onkeyup**//
		var computerGuess = computerChoices[Math.floor(Math. random() * computerChoices.length)];

		if((userGuess === computerGuess)){
			wins++;
		}
		else if ((userGuess !== computerGuess)){
			GuessesLeft--;
		}
		
		if((GuessesLeft = 0)){
			gameOver=true;
		}


		}


