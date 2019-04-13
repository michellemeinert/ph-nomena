'use strict';
// function Game (canvas) {
//   this.canvas = canvas;
//   this.ctx = ctx;
//   this.player = player;
//   this.obstacles = obstacles;
//   this.death = death;
// }

//  Game.prototype.startLoop () {
//    const loop = function () {
//      window.requestAnimationFrame(loop)
//    }
//    window.requestAnimationFrame(loop);
//  }

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.obstacles = [];
    this.death = false;
  }

  startLoop(){
 
    const loop = () => {
      if (Math.random() > 0.97) { // setting the probability  to 3% that a new enemy is created 
        const randomNum = Math.random() * this.canvas.width;
        this.obstacles.push(new Obstacles(this.canvas, randomNum))
      }

      this.clearCanvas();
      this.drawCanvas();
      this.updateCanvas();
      this.objectsColliding();

       if (this.death === false){
        window.requestAnimationFrame(loop); // callback loop -- creates actual loop 
       }
       
       console.log(this.player.direction);

    }
    window.requestAnimationFrame(loop) // start loop
  }

  clearCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
  
  updateCanvas(){
    this.player.playerMovement();
    this.obstacles.forEach( (obstac) => {
      obstac.obstacleMovement();
      });
  }

  drawCanvas(){
    this.player.drawPlayer();
    this.obstacles.forEach( (obstac) => {
    obstac.drawObstacles();
    });
  }

  objectsColliding(){
    this.obstacles.forEach( (obstac, index) => {
      const collides = this.player.collisionsWithObstacles(obstac)
     if(collides){
       this.obstacles.splice(index, 1);
       this.player.updateLives();
       console.log(this.player.lives)
     }
     if (this.player.lives === 0){
       this.death === true;
       this.buildGameOverScreen();
     }
    });
  }
  gameOver(buildGameOverScreen){
   this.buildGameOverScreen = buildGameOverScreen;
  }
}
