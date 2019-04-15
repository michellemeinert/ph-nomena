'use strict';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.platforms = [];
    //this.obstaclesBottom = [];
    this.death = false;
  }

  startLoop(){
  
    const loop = () => {
      if (Math.random() > 0.9) { // setting the probability  to 5% that a new topObstacle is created 
        this.platforms.push(new Platforms(this.canvas))
      }
      console.log(this.platforms);
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
   if (!this.player.jumping && this.player.onPlatform){
    setPlayerOnPlatform();
   }
   
  }

  drawCanvas(){
    this.player.drawPlayer();
    this.platforms.forEach( (platforms) => {
    platforms.drawPlatforms();
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
    this.platforms.forEach((element, index) => {
      const isPlayerOnPlatform = this.player.checkIfOnTopOfPlatform(element);
      if(isPlayerOnPlatform) {
        this.player.doWhenOnTopOfPlatform();
      }
     });
  }

  // outsideOfCanvas(element){
  //    oustsideLeft = element.x < 0 + element.randomWidth;
  //    outsideTop = element.y < 0 + element.height;
  //    outsideRight = element.x > this.canvas.width - element.randomWidth;
  //    outsideBottom = lement.y > this.canvas.height - element.height;
  //    if (outsideLeft|| outsideTop|| outsideRight || outsideBottom){
  //      console.log('outside');
  //      return;
  //    }
  //  }
  
  // removePlatformsFromArray() {
  //   if(this.platforms.length > 0){
  //     this.platforms.forEach((element, index) => {
  //      const isOutsideOfCanvas = this.platforms.outsideOfCanvas(element);
  //      if(isOutsideOfCanvas) {
  //        this.platforms.splice(index, 1);
  //      }
  //     });
  //   } 
  // }

  gameOver(buildGameOverScreen){
   this.buildGameOverScreen = buildGameOverScreen;
  }
}
