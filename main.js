'use strict';
function main() {
 const main = document.querySelector('main')

 function buildScreens (html) {
 main.innerHTML = html;
 }

function buildStartScreen () {
  buildScreens(`
  <section id="start-screen-section">
  <h1 id="game-name">Phänomena</h1>
  <h2 id="theme-choice">Choose your Vibe</h2>
  <button class ="theme1 button">sensory overload</button>
  <button class ="theme2 button">invisibility</button>
  <button class ="theme3 button">black lodge </button>
  </section>
  `)
  const theme1Button = document.querySelector('.theme1')
  const theme2Button = document.querySelector('.theme2')
  const theme3Button = document.querySelector('.theme3')
  theme1Button.addEventListener('click', buildGameScreen)
  theme2Button.addEventListener('click', buildGameScreen)
  theme3Button.addEventListener('click', buildGameScreen)
}

function buildGameScreen() {
  buildScreens(`
  <section class="game-container">
  <canvas id="canvas"></canvas>
  </section>
 `)

 //setTimeout(buildGameOverScreen, 3000000);
 // setting the canvas to the same dynamic height and width as parent container 
 const gameContainer = document.querySelector('.game-container');
 const width = gameContainer.offsetWidth;
 const height = gameContainer.offsetHeight;
 const canvas = document.querySelector('canvas');
 canvas.setAttribute('width', width);
 canvas.setAttribute('height', height);

 let game = new Game (canvas);
 game.startLoop();
 game.gameOver(buildGameOverScreen);

 
 document.addEventListener('keydown', () => {
   //debugger;
  console.log(event.keyCode);
  if (event.keyCode === 37) {
    game.player.goLeft = true;
   // game.player.playerGoLeft();
   game.player.playerGoLeft();
  } else if (event.keyCode === 39) {
    game.player.goRight = true;
    //game.player.playerGoRight();
    game.player.playerGoRight();
    
    
  }
 });
  document.addEventListener('keyup',  () => {
   if (event.keyCode === 37 || event.keyCode === 39){
    //game.player.playerApplyFriction();
    game.player.goLeft = false;
    game.player.goRight = false;
    game.player.playerResetPostion();
    //game.player.currentFunction = game.player.playerApplyFriction;
   } 
  });
 document.addEventListener('keydown', () => {
   console.log(event.keyCode)
   if (event.keyCode === 32) {
     game.player.jumping = true;
     game.player.currentFunction = game.player.playerJumpUp;
     //game.player.playerJumpUp();
   }
 });
 document.addEventListener('keyup', () => {
  console.log(event.keyCode)
  if (event.keyCode === 32) {
    game.player.jumping = false; 
    game.player.currentFunction = game.player.playerFallDown;
    //game.player.playerFallDown();
  }
});
 
}

function buildGameOverScreen() {
  buildScreens (`
  <section>
   <h1>Game Over</h1>
   <button class="restart-button">You\'ll fail, again</button>
  </section>
  `)
  const resetButton = document.querySelector('.restart-button')
  resetButton.addEventListener('click', buildGameScreen)
}
buildStartScreen();
}

window.addEventListener('load', main);