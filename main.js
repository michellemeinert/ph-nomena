'use strict';
function main() {
 const main = document.querySelector('main')

 function buildScreens (html) {
 main.innerHTML = html;
 return main;
 }

function buildStartScreen () {
  const startScreen = buildScreens(`
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
  console.log('game screen');
 const gameScreen = buildScreens(`
 <section class="game-container">
  <canvas id="canvas"></canvas>
 </section>
 `)

 setTimeout(buildGameOverScreen, 3000);
 const gameContainer = document.querySelector('.game-container')

 const width = gameContainer.offsetWidth;
 const height = gameContainer.offsetHeight;
}

function buildGameOverScreen() {
  const gameOverScreen = buildScreens (`
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
main();