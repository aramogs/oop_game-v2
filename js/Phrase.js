class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    addPhraseToDisplay() {
        let test = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = '';
            if (this.phrase[i] == " ") {
                letter = `<li class="letter_hide show ${this.phrase[i]}">${this.phrase[i]}</li>`;
            } else {
                letter = `<li class="letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
            test.insertAdjacentHTML('beforeEnd', letter)
        }

    }
    checkLetter() {
        const pressedKey = event.target.textContent;
        const keyClass = document.getElementsByClassName(pressedKey);
        const qwertyEvent = event.target;
        if (event instanceof KeyboardEvent) {
            return true;
        } else if (keyClass !== undefined && keyClass.length !== 0) {
            this.showMatchedLetter(event);
        } else {

            qwertyEvent.classList.add('wrong');
            qwertyEvent.setAttribute('disabled', 'true');
            game.removeLife(this.missed);
            game.missed++;
        }

    }
    showMatchedLetter() {
        const pressedKey = event.target.textContent
        const keyClass = document.getElementsByClassName(pressedKey);
        const qwertyEvent = event.target;

        for (let i = 0; i < keyClass.length; i++) {
            if (keyClass[i].className !== qwertyEvent.textContent) {
                keyClass[i].classList.add('show');
                qwertyEvent.classList.add('chosen');
                qwertyEvent.setAttribute('disabled', 'true');
                count++;
                game.checkForWin(count);
            }
        }


    }

}