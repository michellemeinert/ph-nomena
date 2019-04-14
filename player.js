'use strict';

class Player {
  constructor (canvas) {
   this.lives = 1;
   this.size = 30;
   this.x = canvas.width / 20;
   this.y = canvas.height / 2;
   this.canvas = canvas;
   this.ctx = canvas.getContext('2d');
   this.radius = this.size/2;
   this.velocityX = 0;
   this.velocityY = 0;
   this.gravity = 0.5;
   this.jumping = false;
   this.direction = 0;
   this.goLeft = false;
   this.goRight = false;
   this.friction = 0.9;
   this.currentFunction = null;
   this.jumpHeight = 10;
  }

  drawPlayer () {
   this.ctx.beginPath();
   this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
   this.ctx.fillStyle = 'black';
   this.ctx.fill();
   this.ctx.closePath();
  }

  playerJumpUp(){
    if (this.jumping) {
    //this.velocityY += (10 - this. gravity);
      this.y -= this.jumpHeight;
    }
  }

  playerFallDown(){
    if (!this.jumping) {
    //this.velocityY += (10 + this.gravity);
    this.y = canvas.height / 2;
    }
  }

  playerGoLeft(){
    if (!this.goRight && this.goLeft) {
    this.velocityX += 0.5;
    this.x -= this.velocityX;
    }
  }

  playerGoRight(){
  if (!this.goLeft && this.goRight) {
    this.velocityX += 0.5;
    this.x += this.velocityX;
    }
  }
  playerResetPostion(){
    if (!this.goLeft || !this.goRight) {
      this.velocityX = 0;
    }
  }
  
  playerApplyFriction(){
    console.log(this.velocityX);
    
    //this.friction += 0.9;
    this.velocityX *= this.friction;
    this.velocityY *= this.friction;
    this.x += this.velocityX;
    this.y += this.velocityY;

  }
   updateLives(){
    this.lives -= 1;
    console.log(this.lives)
   }
   collisionsWithWalls(canvas) {
    if (this.x > canvas.width - this.radius || this.x < 0 + this.radius) {
      console.log('collision w wall!!!');
      return;
    }
   }
   collisionsWithObstacles(obstacles){

   }
}