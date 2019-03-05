let overlay = document.getElementById('overlay');

function startGame(){
    let buttonText =  document.getElementById('btn__reset').textContent;
    if(buttonText === 'Start Game'){
        overlay.style.display = 'none';
        loadPhrase();  
    }else{
       window.location.reload();
    }    

}

function gameOver(message) {
if (message == "You win") {
    overlay.classList.replace("start", "win");
}else{
    overlay.classList.replace("start", "lose");
    
}
    

    overlay.style.display = 'block';
    document.getElementById('game-over-message').innerHTML = message;
    document.getElementById('btn__reset').textContent = 'Reset Game';
}

let count = 0;
function checkWin(count) {
    let currentPhrase = document.getElementsByClassName('letter');   
    if(count == currentPhrase.length){
        gameOver('You win');
    }
}
let loose = 0;
function checkLoose(count){
    if(count == 5){
        gameOver('You loose');
    }
}