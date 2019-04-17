'use strict';

class Player {
  constructor (canvas) {
   this.lives = 3;
   this.size = 16;
   this.x = canvas.width / 20;
   this.y = canvas.height / 2;
   this.canvas = canvas;
   this.ctx = canvas.getContext('2d');
   this.radius = this.size/2;
   this.velocityX = 0;
   this.velocityY = 0;
   this.gravity = 0;
   this.jumping = false;
  // this.direction = 0;
   this.goLeft = false;
   this.goRight = false;
   this.currentFunction = null;
   this.onPlatform = false;
   this.score = 0;
   this.hittingHead = false
  }

  drawPlayer () {
   this.ctx.beginPath();
   this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
   this.ctx.fillStyle = 'black';
   this.ctx.fill();
   this.ctx.closePath();
  }

  playerJumpUp(){
    if (this.jumping && !this.hittingHead) {
      this.velocityY = (-5 + this.gravity);
      this.y += this.velocityY;

    }
  }

  playerFallDown(){
    if(!this.onPlatform && !this.jumping){
    this.velocityY = (5 + this.gravity);
    this.y += this.velocityY;
   
    }
    
   }

  playerGoLeft(){
    this.velocityX += 0.2;
    this.x -= this.velocityX;
  }

  playerGoRight(){
    this.velocityX += 0.2;
    this.x += this.velocityX;
  }

  //using this to stop the player from moving after releasing the buttons
  playerResetPostion(){
    if (!this.goLeft || !this.goRight) {
      this.velocityX = 0;
   } 
  }

  updateLives() {
   console.log(this.lives);
    this.lives--;
    
   }

  collisionsWithWalls(canvas) {
    
    if (this.x > canvas.width - this.radius || this.x < 0 + this.radius || this.y < 0 + this.radius || this.y > canvas.height - this.radius) {
      //console.log('collision w wall!!!'); 
      return true;
    }
   }
  checkIfOnTopOfPlatform(platform){
     const topCollision = this.y + this.radius > platform.y - platform.height/2; 
     const bottomCollion = this.y - this.radius < platform.y + platform.height/2;
     const leftCollision = this.x + this.radius > platform.x - platform.randomWidth/2; 
     const rightCollision = this.x - this.radius < platform.x + platform.randomWidth/2;
     
     if (topCollision && leftCollision && rightCollision && bottomCollion){
      
       
        this.onPlatform = true;
        this.jumping = false;
        this.score += 1;
        this.y = platform.y-platform.height/2-this.size+1
       
     
       
       console.log(this.score);
       return true;
     }
     
     return false;
  }
  checkIfUnderPlatform(platform){
    const topCollision = this.y + this.radius > platform.y - platform.height/2; 
    const bottomCollion = this.y - this.radius < platform.y + platform.height/2;
    const leftCollision = this.x + this.radius > platform.x - platform.randomWidth/2; 
    const rightCollision = this.x - this.radius < platform.x + platform.randomWidth/2;
    
    if (topCollision && leftCollision && rightCollision && bottomCollion){
     return true;
    }
 }
   doWhenOnTopOfPlatform(platform){
    if (this.onPlatform) {
       this.x -= platform.speed;
       this.velocityY = 0;
       this.gravity = 0;
      
     }
   }
}