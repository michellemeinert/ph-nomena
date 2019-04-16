'use strict';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.platforms = [];
    this.deathSquares = [];
    this.death = false;
  }

  startLoop(){
  
    const loop = () => {
      if (Math.random() > 0.6) { // setting the probability  to 50% that a new platform is created 
        this.platforms.push(new Platforms(this.canvas))
        console.log(this.platforms);
      }
      if (Math.random() > 0.7) { // setting the probability  to 50% that a new platform is created 
        this.deathSquares.push(new DeathSquares(this.canvas))
        console.log(this.deathSquares);
      }
      this.clearCanvas();
      if (this.player.currentFunction) {
        this.player.currentFunction();
      }
      this.drawCanvas();
      this.updateCanvas();
      this.objectsColliding();
     // this.removePlatformsFromArray();

       if (this.death === false){
        window.requestAnimationFrame(loop); // callback loop -- creates actual loop 
       }
      }
    window.requestAnimationFrame(loop) // start loop
  }

  clearCanvas(){
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
  }
  
  updateCanvas(){
    if (this.player.goLeft) {
      this.player.playerGoLeft();
    } else if (this.player.goRight) {
      this.player.playerGoRight();
    }
    this.platforms.forEach( (platforms) => {
      platforms.platformsMovement();
    });
    this.deathSquares.forEach( (square) => {
      square.deathSquaresMovement();
      });
    if (!this.player.jumping){
    this.setPlayerOnPlatform();
    } else if (!this.player.jumping && !this.player.onPlatform) {
    this.player.gravity = 0.5;
    } else if (this.player.jumping && !this.player.onPlatform) {
     this.player.jumping = true;
    }
    //this.removePlatformsFromArray();
  }

  drawCanvas(){
    this.player.drawPlayer();
    this.platforms.forEach( (platforms) => {
    platforms.drawPlatforms();
    });
    this.deathSquares.forEach( (square) => {
    square.drawDeathSquares();
    });
  }

  objectsColliding(){
   if(this.player.collisionsWithWalls(this.canvas)){
      this.player.updateLives();
   }
  
   if (this.player.lives === 0){
       this.death === true;
       this.buildGameOverScreen();
       }
  }
  setPlayerOnPlatform(){
    let testOne = false;
    this.platforms.forEach( (element) => {
      const isPlayerOnPlatform = this.player.checkIfOnTopOfPlatform(element);
      if(isPlayerOnPlatform) {
        testOne = true;
        this.player.doWhenOnTopOfPlatform(element);
      } 
     });
     if(!testOne) {
       this.player.onPlatform = false;
     }
  }

  removePlatformsFromArray() {
   if(this.platforms.length > 0){
     this.platforms.forEach((element, index) => {
      const isOutsideOfCanvas = this.platforms.outsideOfCanvas(element);
      if(isOutsideOfCanvas) {
        this.platforms.splice(index, 1);
      }
     });
   } 
 }

   outsideOfCanvas(element) {
    oustsideLeft = element.x < 0 + element.randomWidth;
    outsideTop = element.y < 0 + element.height;
    outsideRight = element.x > this.canvas.width - element.randomWidth;
    outsideBottom = lement.y > this.canvas.height - element.height;
    if (outsideLeft|| outsideTop|| outsideRight || outsideBottom){
      console.log('outside');
      return;
    }
  }
  

  gameOver(buildGameOverScreen){
   this.buildGameOverScreen = buildGameOverScreen;
  }
}
