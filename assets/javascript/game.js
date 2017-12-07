var gameOver=false;
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var ties = 0;
	var GuessesLeft = 15;
	var currentGuess = 0;



	 document.onkeyup = function(event) {

     
      var userGuess = event.key;
      console.log(userGuess);


		var computerGuess = computerChoices[Math.floor(Math. random() * computerChoices.length)];
		console.log(computerGuess);
		

		if((userGuess === computerGuess)){
			wins++;
		}
		else if ((userGuess !== computerGuess)){
			GuessesLeft--;
		}
		
		if((GuessesLeft === 0)){
			gameOver===true;
		}

		if((gameOver=== true)){
			losses++
			GuessesLeft=== 9;
		}

var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Ties: " + ties + "</p>" +
          "<p>Guesses-Left: " + GuessesLeft + "</p>";
         

			document.querySelector("#wut").innerHTML = html;




		};

	

///write span and give it an id, then var whatever = document.getElementbyID(id of span);
//then whatever.innerHtml = userGuess