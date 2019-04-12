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
}
buildStartScreen();
function buildGameScreen() {
  console.log('game screen');
 const gameScreen = buildDom(`
 <section class="game-container">
  <canvas id="canvas"></canvas>
 </section>
 `)
}
function buildGameOverScreen() {
  const gameOverScreen = buildDom (`
  <section>
   <h1>Game Over</h1>
   <button class="restart-button">Restart</button>
  </section>
  `)
}
}
main();