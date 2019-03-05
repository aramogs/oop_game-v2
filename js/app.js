
document.getElementById('btn__reset').addEventListener('click',function(){
   startGame();
});


document.getElementById('qwerty').addEventListener('click', function(event){
    pressedKey = event.target.textContent;
    const keyClass = document.getElementsByClassName(pressedKey);
    qwertyEvent = event.target;
    test = keyClass.className;
    if(event.target.className !== "keyrow"){
    if (keyClass !== undefined && keyClass.length !== 0 ) {
        for (let i = 0; i < keyClass.length; i++) {
            if (keyClass[i].className !== qwertyEvent.textContent) {
                keyClass[i].classList.add('show');
                qwertyEvent.classList.add('chosen');
                qwertyEvent.setAttribute('disabled', 'true');
                count++;
                checkWin(count);
            }
        }

    }else{
    loose++;
    qwertyEvent.classList.add('wrong');
    qwertyEvent.setAttribute('disabled', 'true');
    document.getElementsByClassName('tries')[0].remove();
    checkLoose(loose);
    }
}
});



