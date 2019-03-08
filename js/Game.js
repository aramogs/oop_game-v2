//Game class: 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
class Game {
    //Game constructor: 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////    
    constructor() {
        //Initializing the missed value to "0"
        //Creating the phrases to be used on the phrase class
        //Initializing the current phrase to ""
        this.missed = 0;
        this.phrases = ['hello there', 'how are you', 'javascript', 'classes', 'constructor'];
        this.activePhrase = '';
    }
    //StartGame: Triggered by app.js when btn__reset is clicked 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////   
    startGame() {
        //Getting the textContent fron btn__reset
        let buttonText = document.getElementById('btn__reset').textContent;
        //If the textContent equals Start Game then:
        if (buttonText === 'Start Game') {
            //Call the getRandomPhrase to select a random phrase to use
            //Assign the new phrase to prhase class
            //Call the addPhraseToDisplay method on phrase class
            //Change the style of display overlay to "none"
            const phrase = this.getRandomPhrase();
            this.activePhrase = new Phrase(phrase);
            this.activePhrase.addPhraseToDisplay();
            overlay.style.display = 'none';
        //If the textContent is not equals Start Game then reload the window, and start a new game    
        } else {
            window.location.reload();
        }
    }
    //handleInteraction: Used to check the letters by calling checkLetter() method from Phrase classs 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 
    handleInteraction() {
        const phrase = new Phrase();
        //If the event clssName is not "keyrow" then call checkLetter() from Phare class
        if (event.target.className !== "keyrow") {
            phrase.checkLetter();
        }
    }
    //getRamdomPhrase: Called by startGame() this method selects a random phrase from phrase variable 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    getRandomPhrase() {
        //Using  math.random and the phrases length, select a random phrase
        //Selecting a random phrase from phrases[]
        //Return the random phrase
        const random = Math.floor(Math.random() * this.phrases.length);
        this.randPhrase = this.phrases[random];
        return this.randPhrase;
    }
    //removeLife: Called by checkLetter() method from Phrase class this method is used to change the heart png image from full to gray, also to end the game if the player looses 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    removeLife() {
        //Selects the heart img using the missed value to move between the hearts
        //After getting the value of missed and selecting the heart then change the image to lostHeart.png
        let test = document.querySelectorAll('img')[this.missed];
        test.src = "images/lostHeart.png";
        //If the missed variable equals 4 then call gameOver() method and send some text
        if (this.missed == 4) {
            this.gameOver('Sorry you lost :( <br> try again');
        }
    }
    //checkForWin: Called by showMatchedLetter() method from Prhase class, this method checks the number of letters on the phrase if the count variable is equals to the length of the phrase then the gameOver method is called
    ///////////////////////////////////////////////////////////////////////////////////////////////////////// 
    checkForWin() {
        //Getting the phrase by selecting all the "letter" classes
        let currentPhrase = document.getElementsByClassName('letter');
        //If the lenght of the "letter" classes is equals to the count variable then call gameOver() method and send some text
        if (count == currentPhrase.length) {
            this.gameOver('You win');
        }
    }
    //gameOver: Called by removeLife() and checkForWin() methods
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    gameOver(message) {
        //Selects the overlay elemnt
        let overlay = document.getElementById("overlay");
        //If the receibed message is equals "You win" then:
        //Overlay style is replaced to the win style
        //The massage is changed
        if (message == "You win") {
            overlay.classList.replace("start", "win");
            message = `You win the phrase was <br>"${this.activePhrase.phrase}"`
        //If the message receibed is not equals "You win" then:
        //Change overlay style to lose    
        } else {
            overlay.classList.replace("start", "lose");
        }
        //Change overlay style to block (visible)
        //Change the game-over-message to the message
        //change the btn__reset text
        overlay.style.display = 'block';
        document.getElementById('game-over-message').innerHTML = message;
        document.getElementById('btn__reset').textContent = 'Reset Game';
    }

    //isInputPhisychal: Used to check the letters when the physichal keyboard is used
    /////////////////////////////////////////////////////////////////////////////////////////////////////////   
    isInputPhisychal() {
        //If the event if from the keyboard then:
        if (event instanceof KeyboardEvent) {
            //Change the pressed key toLowerCase
            //Assign only alphabet characters
            //Check if the pressed key is between the alphabet characters
            const input = event.key.toLowerCase();
            const letterReg = /[a-z]/g;
            const inputIsLetter = input.match(letterReg);
            //If there is a match then: 
            if (inputIsLetter) {
                //Select all the .key classes
                const buttonElements = document.querySelectorAll('.key');
                let targetLetter;
                //Loop between the .key classes lenght
                for (let i = 0; i < buttonElements.length; i++) {
                    //If the .key class equals the pressed letter then assign the value to targetLetter
                    if (buttonElements[i].textContent === input) {
                        targetLetter = buttonElements[i];
                    }
                }
                //keyClasss equals the className that contains the pressed key
                //checkInput equals the className that includes chosen
                const keyClass = document.getElementsByClassName(input);
                const checkInput = (targetLetter.className.includes("chosen"));
                //If the keyClass is not empty then:
                if (keyClass !== undefined && keyClass.length !== 0) {
                    //Loop the lenght of the keyClass
                    for (let i = 0; i < keyClass.length; i++) {
                        if (keyClass[i].className !== targetLetter.textContent && !checkInput) {
                            //Add class "show" to the letter
                            //Add class "chosen" to the pressed key on the screen keyboard
                            //Set attribute "disable" to the pressed key on the screen keyboard
                            //Add +1 to the count variable
                            //Caññ checkForWin() method and send the count variable
                            keyClass[i].classList.add('show');
                            targetLetter.classList.add('chosen');
                            targetLetter.setAttribute('disabled', 'true');
                            count++;
                            game.checkForWin(count);
                        }
                    }
                            //If className does not includes "wrong" then:
                } else if (!targetLetter.className.includes("wrong")) {
                    //Add class "wrong"
                    //Add attribute "diabel" to the pressed key on the screen keyboard
                    //Call removeLife and send missed variable value
                    //Add +1 to the missed variable
                    targetLetter.classList.add('wrong');
                    targetLetter.setAttribute('disabled', 'true');
                    game.removeLife(this.missed);
                    game.missed++;
                }
            }
        }
    }
}


    