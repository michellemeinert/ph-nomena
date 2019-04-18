'use strict';
function main() {
 const main = document.querySelector('main')

 function buildScreens (html) {
 main.innerHTML = html;
 }

// let myStorage = window.localStorage;
// function setUsernames (name) {
//   let usernames = [];
//   usernames.push(name);
//   let usernamesString = JSON.stringify(usernames);
//   return usernamesString;
// }

// function setHighscore (score) {
//  let currentHighscore = game.player.score;
//  if (currentHighscore < score) {
//    currentHighscore = score;
//  }
//  return currentHighscore;
// }
// myStorage.setItem('names', setUsernames());
// myStorage.setItem('highscore', setHighscore());


function buildStartScreen () {
  buildScreens(`
  <section id="screen-sections">
  <h1 id="game-headings">Phänomena</h1>
  <label for="name">Username: </label>
  <input type="text" id="name" name="name" required>

 <button class ="start-button buttons"><p class="buttonsParagraph">You will fail!</p></button>
  </section>
  `)
  
  // const username = document.getElementById('name');
  // setUsernames(username);

  const startButton = document.querySelector('.start-button')
  startButton.addEventListener('click', buildGameScreen)
}

function buildGameScreen() {
  buildScreens(`
  <section class="game-container">
  <canvas id="canvas"></canvas>
  </section>
 `)
 
 //setTimeout(buildGameOverScreen, 3000000);
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
  if (event.keyCode === 37) {
    game.player.goLeft = true;
    game.player.playerGoLeft();
  } else if (event.keyCode === 39) {
    game.player.goRight = true;
    game.player.playerGoRight();

    }
 });
  document.addEventListener('keyup',  () => {
   if (event.keyCode === 37 || event.keyCode === 39){

    game.player.goLeft = false;
    game.player.goRight = false;
    game.player.playerResetPostion();
   } 
  });
 document.addEventListener('keydown', () => {
   if (event.keyCode === 32) {
     game.player.jumping = true;
     game.player.currentFunction = game.player.playerJumpUp;
   }
 });
 document.addEventListener('keyup', () => {
  if (event.keyCode === 32) {
    game.player.jumping = false; 
    if (!game.player.jumping && !game.player.onPlatform){
    game.player.currentFunction = game.player.playerFallDown;
  }
  }
});
 
}

function buildGameOverScreen() {
  buildScreens (`
  <section id="screen-sections">
   <h1 id="game-headings">Game Over</h1>
   <button class="restart-button buttons"><p class="buttonsParagraph">You\'ll fail, again</p></button>
  </section>
  `)
  const resetButton = document.querySelector('.restart-button')
  resetButton.addEventListener('click', buildGameScreen)
}
buildStartScreen();
}

window.addEventListener('load', main);