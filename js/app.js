const game = new Game();
let count = 0;

document.getElementById('btn__reset').addEventListener('click',()=>game.startGame());
document.getElementById('qwerty').addEventListener('click',()=> game.handleInteraction(event));

document.addEventListener("keypress", function () {
  game.handleInteraction();
  game.isInputPhisychal();
})