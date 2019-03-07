class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['hello there', 'how are you','javascript','classes','constructor'];
        this.activePhrase = '';
    }
    startGame() {
        let buttonText = document.getElementById('btn__reset').textContent;
        if (buttonText === 'Start Game') {
            const phrase = this.getRandomPhrase();
            this.activePhrase = new Phrase(phrase);
            this.activePhrase.addPhraseToDisplay();
            overlay.style.display = 'none';
        } else {
            window.location.reload();
        }
    }
    isInputPhisychal() {
        if (event instanceof KeyboardEvent) {
            const input = event.key.toLowerCase();
            const letterReg = /[a-z]/g;
            const inputIsLetter = input.match(letterReg);
            if (inputIsLetter) {
                const buttonElements = document.querySelectorAll('.key');
                let targetLetter;
                for (let i = 0; i < buttonElements.length; i++) {
                    if (buttonElements[i].textContent === input) {
                        targetLetter = buttonElements[i];
                    }
                }
                const keyClass = document.getElementsByClassName(input);

                const checkInput = (targetLetter.className.includes("chosen"));
                if (keyClass !== undefined && keyClass.length !== 0) {
                    for (let i = 0; i < keyClass.length; i++) {
                        if (keyClass[i].className !== targetLetter.textContent && !checkInput) {
                            keyClass[i].classList.add('show');
                            targetLetter.classList.add('chosen');
                            targetLetter.setAttribute('disabled', 'true');
                            count++;
                            console.log(count)
                            game.checkForWin(count);
                        }
                    }

                } else if(!targetLetter.className.includes("wrong")){
                    targetLetter.classList.add('wrong');
                    targetLetter.setAttribute('disabled', 'true');
                    game.removeLife(this.missed);
                    game.missed++;
                }
            }
        }
    }
    handleInteraction() {
        const phrase = new Phrase();
        if (event.target.className !== "keyrow") {
            phrase.checkLetter();
        }
    }
    getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length);
        this.randPhrase = this.phrases[random];
        return this.randPhrase;
    }
    removeLife() {
        let test = document.querySelectorAll('img')[this.missed];
        test.src = "images/lostHeart.png";

        if (this.missed == 4) {
            console.log("you loose")
            this.gameOver('You loose');
        }
    }
    checkForWin() {
        let currentPhrase = document.getElementsByClassName('letter');
        if (count == currentPhrase.length) {
            this.gameOver('You win');
        }
    }
    gameOver(message) {
        let overlay = document.getElementById("overlay");

        if (message == "You win") {
            overlay.classList.replace("start", "win");
            message = `You win the phrase was <br>"${this.activePhrase.phrase}"`
        } else {
            overlay.classList.replace("start", "lose");
        }

        overlay.style.display = 'block';
        document.getElementById('game-over-message').innerHTML = message;
        document.getElementById('btn__reset').textContent = 'Reset Game';
    }
}