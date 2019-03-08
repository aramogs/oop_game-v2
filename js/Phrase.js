//Phrase class: 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
let count = 0;
class Phrase {
    //Phrase constructor:Receibes a phrase to use in the methods 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////    
    constructor(phrase) {
        this.phrase = phrase;
    }

    //addPhraseToDisplay():Receibes a phrase from the constructor and shows it on the screen 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////    
    addPhraseToDisplay() {
        //Selecting the <ul> on the phrase <div>
        let test = document.getElementById('phrase').firstElementChild;
        //Loopoing the phrase length for every letter
        for (let i = 0; i < this.phrase.length; i++) {
            let letter = '';
            //If prhase is empty use a css style with opacity 0 and also the show style     
            if (this.phrase[i] == " ") {
                letter = `<li class="letter_hide show ${this.phrase[i]}">${this.phrase[i]}</li>`;
                // If the phrase is not empty use the style letter
                //This also adds the letter to the be a class for each loop, this is used to select the letter while guessing the word using getElementsByClassname   
            } else {
                letter = `<li class="letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
            //Every loop inserts the HTML of letter in the <ul>    
            test.insertAdjacentHTML('beforeEnd', letter)
        }

    }

    //checkLetter():This method checks if the letter is in the current phrase 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////    
    checkLetter() {
        //Declaring local variables
        //pressedKey: used to get the textContent of the event
        //keyClass: Using pressedKey selects all the classes containing the used clicked letter
        //qwertyEvent: using an eventlistener from app.js on the qwerty <div> we get the clicked target 
        const pressedKey = event.target.textContent;
        const keyClass = document.getElementsByClassName(pressedKey);
        const qwertyEvent = event.target;

        //If the event its from the physical keyboard then return true and end the cycle
        if (event instanceof KeyboardEvent) {
            return true;
            // If the class its not empty then use method showMatchedLetter to show the letter    
        } else if (keyClass !== undefined && keyClass.length !== 0) {
            this.showMatchedLetter(event);
            //If the class does not contains the pressedKey then: 
        } else {
            //Assign the "wrong" css style to the clicked letter
            //Assing the "disable" attribute to the clicked letter
            //Call removeLife() and send the value of missed
            //After sending the value add +1 to the value of missed  
            qwertyEvent.classList.add('wrong');
            qwertyEvent.setAttribute('disabled', 'true');
            game.removeLife(this.missed);
            game.missed++;
        }

    }
    //showMatchedLetter():Called by checkLetter(), this method gets the event information and uses it to display the letters 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////      
    showMatchedLetter() {
        //Declaring local variables
        //pressedKey: used to get the textContent of the event
        //keyClass: Using pressedKey selects all the classes containing the used clicked letter
        //qwertyEvent: using an eventlistener from app.js on the qwerty <div> we get the clicked target 
        const pressedKey = event.target.textContent
        const keyClass = document.getElementsByClassName(pressedKey);
        const qwertyEvent = event.target;
        //Every time there is a class with the pressedKey value do the following:
        for (let i = 0; i < keyClass.length; i++) {
            //Assign the "show" style to the current letter
            //Assign the "chosen" style to the clicked letter
            //Assign the "disable" attribute to the clicked letter
            //Add +1 to the count variable
            //Call checkForWin() and send the value of count  
            keyClass[i].classList.add('show');
            qwertyEvent.classList.add('chosen');
            qwertyEvent.setAttribute('disabled', 'true');
            count++;
            game.checkForWin(count);
        }
    }
}

