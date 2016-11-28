//game as an object
var hangmanGame = {

	words : [
		{
			word: "3.14159265",
			type: "num",
			clue: "March 14 is named after this special number.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/ZNiRzZ66YN0?list=PL4870492ACBDC2E7C" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "googol",
			type: "txt",
			clue: "Homonym for a famous search engine",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/5JOAoiX1LHA" frameborder="0" allowfullscreen></iframe>'
		},
		{	
			word: "2.71828183",
			type: "num",
			clue: "Apert's middle name, named after Euler.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/seUU2bZtfgM?list=PLt5AfwLFPxWJm_xYEUbnOi0foDNp2dwEX" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "1.61803398",
			type: "num",
			clue: "Fibonacci's favorite number.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/D8ntDpBm6Ok?list=PLt5AfwLFPxWIDalIezb351yUymQhXaRv-" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "zero",
			type: "txt",
			clue: "Can you really say this actually exists?",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/8t1TC-5OLdM?list=PLt5AfwLFPxWLNZRKWlcRmTABh_SExiiCj" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "infinity",
			type: "txt",
			clue: "Great in theory, but you can't actually get there in reality.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/dDl7g_2x74Q" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "binary",
			type: "txt",
			clue: "There are only 10 types of people in the world, those who can read this and those who can't.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/umYvFdU54Po" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "fermat's last theorem",
			type: "txt",
			clue: "Somehow Homer Simpson knew something about this.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/qiNcEguuFSA?list=PLt5AfwLFPxWLD3KG-XZQFTDFhnZ3GHMlW" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "calculus",
			type: "txt",
			clue: "Now, was it Newton or Leibniz...",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/shEk8sz1oOw" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "geometry",
			type: "txt",
			clue: "It's amazing what you can do with a compass and a straight edge",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/6Lm9EHhbJAY" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "pythagorean theorem",
			type: "txt",
			clue: "Why two shorter flights always take longer than one nonstop flight.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/ItiFO5y36kw" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "dimensions",
			type: "txt",
			clue: "Our universe only has three of them",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/2s4TqVAbfz4" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "polygon",
			type: "txt",
			clue: "Shapes, shapes, shapes everywhere!!!",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/87uo2TPrsl8" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "imaginary numbers",
			type: "txt",
			clue: "They have more real world applications than their name implies.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/NGMRB4O922I" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "square root",
			type: "txt",
			clue: "Describes the relationship of ff to fe01.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/5sKah3pJnHI" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "quadratic equation",
			type: "txt",
			clue: "Curves and Parabolas can be represented thusly.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/uCsD3ZGzMgE" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "prime numbers",
			type: "txt",
			clue: "These pesky numbers refused to be factored like the rest.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/2JM2oImb9Qg?list=PL0D0BD149128BB06F" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "infinite series",
			type: "txt",
			clue: "{1 + 2 + 3 + 4 + ....} = -1/12.",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/w-I6XTVZXww" frameborder="0" allowfullscreen></iframe>'
		},
		{
			word: "topology",
			type: "txt",
			clue: "Möbius Strips, Klein Bottles, knots and other interesting physical things",
			used: false,
			site: '<iframe width="100%" src="https://www.youtube.com/embed/W18FDEA1jRQ?list=PLt5AfwLFPxWJeBhzCJ_JXdaIXi_YJl7Bh" frameborder="0" allowfullscreen></iframe>'
		}
	],
	sounds: {
		dupe: {
			sound: new Howl({ 
				src: ['assets/sounds/NFF-zing.wav']
			}),
			volume: 0.25
		},
		missed: {
			sound: new Howl({
				src: ['assets/sounds/NFF-wrong-move.wav']
			}),
			volume: 0.25
		},
		correct: {
			sound: new Howl({
				src: ['assets/sounds/cling_1.wav']
			}),
			volume: 0.25
		},
		win: {
			sound: new Howl({
				src: ['assets/sounds/crowd-cheering-1.mp3']
			}),
			volume: 0.25
		},
		lose: {
			sound: new Howl({
				src: ['assets/sounds/losingSound.wav']
			}),
			volume: 0.25
		}
	},
	hangmanPosition: 0,
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
	//function to find random word not yet played
	getRandomTerm: function() {
		var randomIndex = Math.floor(Math.random() * this.words.length);
		//there is a danger of an infinite loop here if all words are played
		while (this.words[randomIndex].used) {
			randomIndex = Math.floor(Math.random() * this.words.length);
		};
		this.currentTerm = this.words[randomIndex];
		this.words[randomIndex].used = true;
		//calls function to create two arrays used for gameplay
		this.termToArray();
	},
	//takes apart current word letter by letter, stores in an array 
	//and creates blanks for gameplay comparison
	termToArray: function() {
		for (let x = 0; x < this.currentTerm.word.length; x++) {
			this.letterArray = this.currentTerm.word.split("");
			//really struggling here to get nonalphanumeric characters passed
			if (this.letterArray[x] === " " 
				|| this.letterArray[x] === "." 
				|| this.letterArray[x] === "'") {
				this.blanks.push(this.letterArray[x]);
			} else {
				this.blanks.push("_");
			}
		}
		//console.log(this.blanks.toString());
		this.displayBoard();
	},
	//this function displays the current state of the game until either
	//the word is guessed or the number of missed guesses surpassed
	displayBoard: function() {
		//compile and display condition of current board form blanks array
		var currentBoard = '';
		for (let y = 0; y < this.blanks.length; y++) {
			currentBoard+= '&nbsp;' + this.blanks[y] + '&nbsp;';
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
	//checks that user hasn't reused a previous guess, for now there is no penalty
	checkForDuplicate: function() {
		if ((this.blanks.indexOf(this.userGuess) > -1) 
			|| (this.usedLetters.indexOf(this.userGuess) > -1)) {
			this.sounds.dupe.sound.play();
			return false;
		} else { 
			return true;
		}
	},
	//changes blanks array to include correct answers
	checkIfCorrect: function() {
		if(this.checkForDuplicate()) {
			if (this.letterArray.indexOf(this.userGuess) > -1) {
				for (let x = 0; x < this.blanks.length; x++) {
					if (this.letterArray[x] === this.userGuess) {
						this.blanks[x] = this.userGuess;
						//play a pleasant sound
						this.sounds.correct.sound.play();
					}
				}
			} else {
				this.usedGuesses++;
				this.usedLetters.push(this.userGuess);
				this.hangmanPosition-=75;
				document.querySelector('#gameStatus').style.left = this.hangmanPosition + 'px';
				//play an annoying sound
				if (this.usedGuesses < 6) {
					this.sounds.missed.sound.play();
				}

				if (this.usedGuesses > 3) {
					//should we give nonDev's a visible clue?
					console.log("Hint: " + this.currentTerm.clue);	
				}
				
			}
			//call displayBoard to display changes
			this.displayBoard();
		}
	},
	//checks to see whether all guesses have been used or word solved
	checkForEndGame: function() {
		var blanksCheck = this.blanks.toString();
		//not sure we need letterscheck, could use this.currentTerm.word
		var lettersCheck = this.letterArray.toString();

		if (this.usedGuesses >= this.maxGuesses) {
			this.gameOn = false;
			
			/* -- for mobile and tab keyboards, needs work
			document.activeElement.blur();
			-- */
			
			this.losses++;

			//display you lose and current term
			document.querySelector(".alerts").innerHTML = "Sorry, you lose. The correct answer was: " + this.currentTerm.word;
			// --- display used terms - in process

			//play losing sound
			var id1 = this.sounds.lose.sound.play();
			this.sounds.lose.sound.rate(0.75, id1);

			//use querySelector to change text of button to Play Again?
			document.querySelector("#startButton").innerHTML = "Play Again?";
		} else if (blanksCheck === lettersCheck) {
			this.gameOn = false;
			
			/* -- for mobile and tab keyboards, needs work
			//document.activeElement.blur();
			-- */

			this.wins++;

			//display you win with winning sound/image
			document.querySelector(".alerts").innerHTML = "Good Job. You got it right!";
			// --- display used terms - in process

			//play winning sound
			var id1 = this.sounds.win.sound.play();
			this.sounds.win.sound.fade(0.5, 0, 4000, id1);

			//display endgame video
			document.querySelector(".endGame").innerHTML = "<h4>Watch this :</h4>" + this.currentTerm.site;
			//use querySelector to change text of button to Play Again?
			document.querySelector("#startButton").innerHTML = "Play Again?";
		}
	},
	//called everytime start button is pushed to reinitialize game
	//need a master reset to reset word bank as well
	reset: function() {
		this.currentTerm = {};
		this.letterArray = [];
		this.blanks = [];
		this.usedGuesses = 0;
		this.usedLetters = [];
		this.hangmanPosition = 0;
		document.querySelector('#gameStatus').style.left = "0px";
	},
}

//called by index.html on startButton click
var startGame = function() {
	console.log("--New Game--");
	hangmanGame.reset();
	hangmanGame.gameOn = true;
	hangmanGame.getRandomTerm();

	/*
		Will need better solution for mobile and tablet keyboards
		since keycodes are device specific come back to this
	document.getElementById("dummy").focus();
	*/

	//use querySelector to change content of start button to Start Over
	document.querySelector("#startButton").innerHTML = "Start Over";
}

//registers key presses by user only when the game has begun
document.onkeyup = function(event) {

	if (hangmanGame.gameOn) {
		
  		hangmanGame.userGuess = event.key;

  		/* to get to read mobile keyboards, will have to use
  		a solution comparing elements to an array of acceptable
  		keys, such as the following (using jQuery)
  		see: http://stackoverflow.com/questions/31979619/how-to-get-keycodes-from-android-mobile-device-keyboard
  		and: http://stackoverflow.com/questions/302122/jquery-event-keypress-which-key-was-pressed

  			//keyboard maping array   
			var keyboardMap = ["", "", "", "CANCEL", "", "", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "RETURN", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "WIN", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "", "", "COMMA", "", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
			//Allowed keys         
			var allowedKeyNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "DELETE", "BACK_SPACE", "DECIMAL", "LEFT", "RIGHT", "TAB", "SUBTRACT", "PERIOD"];
			var allowedKeyTxt = ...
			//bind keydown to your element
			element.on("keydown", function (e) {
        		var key = e.charCode || e.keyCode || 0;
        		var keyValue = keyboardMap[key];
        		if ($.inArray(keyValue, allowedKey) !== -1){
              		return true;
        		}
        		else{
              		return  false;
        		}
			}
		*/

		//only allow alphabetical keys for type = txt
  		//only allow numerical keys for type = num
  		if ( (hangmanGame.currentTerm.type === "txt") 
  			&& ((event.keyCode > 64) && (event.keyCode < 91)) ) {
  				hangmanGame.checkIfCorrect();
				hangmanGame.checkForEndGame();
  		} else if ( (hangmanGame.currentTerm.type === "num")
  			&& ((event.keyCode > 47) && (event.keyCode < 58)) ) {
				hangmanGame.checkIfCorrect();
				hangmanGame.checkForEndGame();
		}
	}
}
