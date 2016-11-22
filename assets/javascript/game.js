var hangmanGame = {

	words : [
		{
			word: "3.14159265",
			type: "num",
			clue: "March 14 is named after this special number.",
			used: false
		},
		{	word: "2.71828183",
			type: "num",
			clue: "Apert's middle name, named after Euler.",
			used: false
		},
		{
			word: "1.61803399",
			type: "num",
			clue: "Fibonacci's favorite number.",
			used: false
		},
		{
			word: "zero",
			type: "txt",
			clue: "Can you really say this actually exists?",
			used: false
		},
		{
			word: "infinite",
			type: "txt",
			clue: "Great in theory, but you can't actually get there in reality.",
			used: false
		},
		{
			word: "binary",
			type: "txt",
			clue: "There are only 10 types of people in the world, those who can read this and those who can't.",
			used: false
		},
		{
			word: "fermat's last theorem",
			type: "txt",
			clue: "Somehow Homer Simpson knew something about this.",
			used: false
		},
		{
			word: "calculus",
			type: "txt",
			clue: "Now, was it Newton or Leibniz...",
			used: false
		},
		{
			word: "geometry",
			type: "txt",
			clue: "It's amazing what you can do with a compass and a straight edge",
			used: false
		},
		{
			word: "pythagorean theorem",
			type: "txt",
			clue: "Why two shorter flights always take longer than one nonstop flight.",
			used: false
		},
		{
			word: "dimensions",
			type: "txt",
			clue: "Our universe only has three of them",
			used: false
		},
		{
			word: "polygon",
			type: "txt",
			clue: "Shapes, shapes, shapes everywhere!!!",
			used: false
		},
		{
			word: "imaginary numbers",
			type: "txt",
			clue: "They have more real world applications than their name implies.",
			used: false
		},
		{
			word: "square root",
			type: "txt",
			clue: "Describes the relationship of ff to fe01.",
			used: false
		},
		{
			word: "quadratic equation",
			type: "txt",
			clue: "Curves and Parabolas can be represented thusly.",
			used: false
		},
		{
			word: "prime numbers",
			type: "txt",
			clue: "These pesky numbers refused to be factored like the rest.",
			used: false
		},
		{
			word: "set theory",
			type: "txt",
			clue: "How we know the sum of all natural numbers is -1/12.",
			used: false
		},
		{
			word: "topology",
			type: "txt",
			clue: "Möbius Strips, Klein Bottles, knots and other interesting physical things",
			used: false
		}
	],
	currentTerm: {},
	letterArray : [],
	blanks: [],
	maxGuesses : 6,
	usedGuesses : 0,
	usedLetters : [],
	userGuess : "",
	wins : 0,
	losses : 0,
	gameOn: false,
	getRandomTerm: function() {
		var randomIndex = Math.floor(Math.random() * this.words.length);
		while (this.words[randomIndex].used) {
			randomIndex = Math.floor(Math.random() * this.words.length);
		};
		this.currentTerm = this.words[randomIndex];
		this.words[randomIndex].used = true;
		//console.log(this.currentTerm.word.length + this.currentTerm.word.charAt(0));
		this.termToArray();
	},
	termToArray: function() {
		for (let x = 0; x < this.currentTerm.word.length; x++) {
			var letter = this.currentTerm.word.charAt(x);
			if (letter === String.fromCharCode(32) 
				|| letter === String.fromCharCode(222) 
				|| letter === String.fromCharCode(190)) {
				this.blanks.push(letter);
				this.letterArray.push(letter);
			} else {
				this.blanks.push("_");
				this.letterArray.push(letter.toLowerCase());
			}
		}
		//console.log(this.blanks.toString());
		this.displayBoard();
	},
	displayBoard: function() {
		//compile and display condition of current board
		var currentBoard = '';
		for (let y = 0; y < this.blanks.length; y++) {
			currentBoard+= ' ' + this.blanks[y] + ' ';
			//console.log(this.blanks[y]);
		}
		document.querySelector(".blanks").innerHTML = currentBoard;

		//display letters with those guessed in darker colors than those available
		//display alphabet for txt type words and numbers for num type words
		if (this.currentTerm.type === "txt") {
			var alphanum = [];
			for (let i = 65; i < 91; i++) {
				var char = String.fromCharCode(i).toLowerCase();
				if ((this.blanks.indexOf(char) > -1) 
					|| (this.usedLetters.indexOf(char) > -1)) {
					alphanum.push('<span class="guessed"> ' + char + ' </span>')
				} else {
					alphanum.push('<span class="available"> ' + char + ' </span>')
				}
			}
		} else { 
			var alphanum = [];
			for (let i = 48; i < 58; i++) {
				var char = String.fromCharCode(i);
				if (this.blanks.indexOf(char) > -1) {
					alphanum.push('<span class="guessed"> ' + char + ' </span>')
				} else {
					alphanum.push('<span class="available"> ' + char + ' </span>')
				}
			}
		}
		var availablechar = '';
		for (let j = 0; j < alphanum.length; j++) {
			availablechar+= alphanum[j];
		}
		document.querySelector(".remaining").innerHTML = availablechar;

		//display number of guesses remaining
		var remaingingGuesses = (this.maxGuesses - this.usedGuesses);
		console.log("Remaining Guesses: " + remaingingGuesses);
		//console.log("Letters Guessed: " + this.usedLetters);
		document.querySelector(".alerts").innerHTML = "Remaining Guesses: " + remaingingGuesses;



	},
	checkForDuplicate: function() {
		if (this.blanks.indexOf(this.userGuess) > -1) {
			//play beep and display "Letter Already Guessed"
			return false;
		} else { 
			return true;
		}
	},
	checkIfCorrect: function() {
		if(this.checkForDuplicate()) {
			if (this.letterArray.indexOf(this.userGuess) > -1) {
				for (let x = 0; x < this.blanks.length; x++) {
					if (this.letterArray[x] === this.userGuess) {
						this.blanks[x] = this.userGuess;
						//play a pleasant sound
					}
				}
			} else {
				this.usedGuesses++;
				this.usedLetters.push(this.userGuess);
				//play an annoying sound
				if (this.usedGuesses > 3) {
					console.log("Hint: " + this.currentTerm.clue);
					//should we give nonDev's a visible clue?
				}
				
			}
			this.displayBoard();
		}
	},
	checkForEndGame: function() {
		var blanksCheck = this.blanks.toString();
		var lettersCheck = this.letterArray.toString();

		if (this.usedGuesses >= this.maxGuesses) {
			this.gameOn = false;
			this.losses++;
			//display you lose and current term
			
			//display used terms
			this.reset();
			document.querySelector("#startButton").innerHTML = "Play Again?";
		} else if (blanksCheck === lettersCheck) {
			this.gameOn = false;
			this.wins++;
			//display you win with winning sound/image
			
			//display used terms
			this.reset();
			//use querySelector to change text of button to Play Again?
			document.querySelector("#startButton").innerHTML = "Play Again?";
		}
	},
	reset: function() {
		this.currentTerm = {};
		this.letterArray = [];
		this.blanks = [];
		this.usedGuesses = 0;
		this.usedLetters = [];
	},
}

var startGame = function() {
	hangmanGame.gameOn = true;
	reset();
	hangmanGame.getRandomTerm();
	console.log("--New Game--");
	//use querySelector to change content of start button to Start Over
	document.querySelector("#startButton").innerHTML = "Start Over";
}

document.onkeyup = function(event) {

	if (hangmanGame.gameOn === true) {
  		hangmanGame.userGuess = event.key;
		if (((event.keyCode > 64) && (event.keyCode < 91)) 
			|| ((event.keyCode > 95) && (event.keyCode < 106))
			|| ((event.keyCode > 47) && (event.keyCode < 58))) {
			//console.log(hangmanGame.userGuess);
		hangmanGame.checkIfCorrect();
		hangmanGame.checkForEndGame();

		}
	}
}