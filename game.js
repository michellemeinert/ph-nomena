'use strict';

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.platforms = [];
    this.death = false;
  }

  startLoop(){
  
    const loop = () => {
      
      if (Math.random() > 0.97) { 
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
    });
    if (!this.player.jumping){
    this.setPlayerOnPlatform();
    } else if (!this.player.jumping && !this.player.onPlatform) {
    this.player.gravity = 0.5;
    } else if (this.player.jumping && !this.player.onPlatform) {
   // console.log("heyyyyyy girrrrrl")
     this.player.jumping = true;
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
  }

  objectsColliding(){
   if(this.player.collisionsWithWalls(this.canvas)){
      this.player.updateLives();
     console.log(this.player.velocityX);
   }
  
   if (this.player.lives === 0){
       this.death = true;
       this.buildGameOverScreen();
       }
  }

  setPlayerOnPlatform(){
    this.platforms.forEach( (element) => {
      const isPlayerOnPlatform = this.player.checkIfOnTopOfPlatform(element);
      if(isPlayerOnPlatform) {
        this.player.doWhenOnTopOfPlatform(element);
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
    this.ctx.font = "40px Roboto Slab";
    this.ctx.fillStyle = "#BA1200";
    this.ctx.fillText("Score: " + this.player.score, 8, 45);
  }

  //  outsideOfCanvas(element) {
  //   oustsideLeft = element.x < 0 + element.randomWidth;
  //   outsideTop = element.y < 0 + element.height;
  //   outsideRight = element.x > this.canvas.width - element.randomWidth;
  //   outsideBottom = lement.y > this.canvas.height - element.height;
  //   if (outsideLeft|| outsideTop|| outsideRight || outsideBottom){
  //     return;
  //   }
  // }
  
 gameOver(buildGameOverScreen){
   this.buildGameOverScreen = buildGameOverScreen;
  }
}
