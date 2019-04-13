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
    this.obstaclesTop = [];
    this.obstaclesBottom = [];
    this.death = false;
  }

  startLoop(){
  
    const loop = () => {
      if (Math.random() > 0.9) { // setting the probability  to 10% that a new topObstacle is created 
        this.obstaclesTop.push(new ObstaclesTop(this.canvas))
      }
      if (Math.random() > 0.85) { // setting the probability  to 15% that a new bottomObstacle is created 
        this.obstaclesBottom.push(new ObstaclesBottom(this.canvas))
      }
      console.log(this.obstaclesBottom);
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
    this.obstaclesTop.forEach( (obstaclesTop) => {
      obstaclesTop.obstacleMovementTop();
      });
    this.obstaclesBottom.forEach( (obstaclesBottom) => {
      obstaclesBottom.obstacleMovementBottom();
      });
  }

  drawCanvas(){
    this.player.drawPlayer();
    this.obstaclesTop.forEach( (obstaclesTop) => {
    obstaclesTop.drawObstaclesTop();
    });
    this.obstaclesBottom.forEach( (obstaclesBottom) => {
    obstaclesBottom.drawObstaclesBottom();
    });
  }

  objectsColliding(){
    this.obstaclesTop.forEach( (obstac, index) => {
      const collidesTop = this.player.collisionsWithObstacles(obstac)
     if(collidesTop){
       this.obstaclesTop.splice(index, 1);
       this.player.updateLives();
       console.log(this.player.lives)
     }
     if (this.player.lives === 0){
       this.death === true;
       this.buildGameOverScreen();
       }
      });

    this.obstaclesBottom.forEach( (obstac, index) => {
      const collidesBottom = this.player.collisionsWithObstacles(obstac)
     if(collidesBottom){
       this.obstaclesBottom.splice(index, 1);
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
