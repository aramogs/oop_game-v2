//Declaring a new game globally
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const game = new Game();
//Eventlistener: Triggered by clicking btn__reset, after the click it game.startGame method 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('btn__reset').addEventListener('click', () => game.startGame());

//Eventlistener: Triggered by using the screen keyboard it starts the game.handleInteraction method
/////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('qwerty').addEventListener('click', () => game.handleInteraction(event));

//Eventlistener:Triggered by the physical keyboard, every time a key is pressed it triggers   game.handleInteraction() game.isInputPhisychal()
/////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("keypress", function () {
  game.handleInteraction();
  game.isInputPhisychal();
})