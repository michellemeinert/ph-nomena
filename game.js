'use strict';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.platforms = [];
    this.death = false;
    this.audio = new Audio('./sounds/Daft Punk - Veridis Quo.mp3');
    this.sound1 = new Audio('./sounds/footsteps1.mp3');
    this.sound2 = new Audio('./sounds/efan.mp3');

  }

  startLoop(){
  
    const loop = () => {
      if (Math.random() > 0.93) { 
        this.platforms.push(new Platforms(this.canvas))
       }

      this.clearCanvas();
      if (!this.player.jumping && !this.player.onPlatform){
        this.player.currentFunction = this.player.playerFallDown;
      }

      if (this.player.currentFunction) {
        this.player.currentFunction();
      }

      this.drawCanvas();
      this.updateCanvas();
      this.objectsColliding();
      this.drawScore();
      //this.removePlatformsFromArray();

       if (this.death === false){
        window.requestAnimationFrame(loop); 
       }
      }
    window.requestAnimationFrame(loop);
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
      setTimeout(platforms.increaseSpeed(), 10000);
      
    });
    if (!this.player.jumping){
    this.setPlayerOnPlatform();
    } else if (!this.player.jumping && !this.player.onPlatform) {
    this.player.gravity = 0.5;
    } else if (this.player.jumping && !this.player.onPlatform) {
   // console.log("heyyyyyy girrrrrl")
     this.player.jumping = true;
     this.player.gravity = 0;
     let hitMyHead = false
     this.platforms.forEach( (element) => {
      if(this.player.checkIfUnderPlatform(element) && !hitMyHead){
        this.player.hittingHead = true
        hitMyHead = true
      }
     })
     if(!hitMyHead){
       this.player.hittingHead = false;
     }
    }
    //this.removePlatformsFromArray();
  }

  drawCanvas(){
    this.player.drawPlayer();
    this.platforms.forEach( (platforms) => {
    platforms.drawPlatforms();
    });
    this.audio.play();
  }

  objectsColliding(){
   if(this.player.collisionsWithWalls(this.canvas)){
      this.player.updateLives();
     console.log(this.player.velocityX);
   }
  
   if (this.player.lives === 0){
       this.death = true;
       this.buildGameOverScreen();
       this.audio.pause();
       this.sound1.pause();
       this.sound2.pause();
       }
  }

  setPlayerOnPlatform(){
    this.platforms.forEach( (element) => {
      const isPlayerOnPlatform = this.player.checkIfOnTopOfPlatform(element);
      if(isPlayerOnPlatform) {
        this.player.doWhenOnTopOfPlatform(element);
        if (Math.random() > 0.99) { 
          this.sound1.play();
         }
        if (Math.random() > 0.98) { 
          this.sound2.play();
         }
      } else {
        this.player.onPlatform = false
      }
     });
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
  drawScore() {
    this.ctx.font = "40px Archivo Black";
    this.ctx.fillStyle = "#07070A";
    this.ctx.fillText("Score: " + this.player.score, 8, 45);
  }
  
  gameOver(buildGameOverScreen){
   this.buildGameOverScreen = buildGameOverScreen;
  }
}
