'use strict';
// function Player (canvas) {
//   this.lives = 5;
//   this.size = 30;
//   this.canvas = canvas;
//   this.ctx = canvasElement.getContext('2d');
//   this.speed = 0;
//   this.direction = 0;
// }

// Player.prototype.draw = function() {
//   ctx.fillStyle = 'black';
//   ctx.fillRect(canvasElement.width / 2, canvasElement.height / 2, this.size, this.size);
  
// }
// Player.prototype.update = function() {

// }
// Player.prototype.direction = function() {

// }
// Player.prototype.lives = function() {

// }
// Player.prototype.collisions = function() {

// }

class Player {
  constructor (canvas) {
   this.lives = 5;
   this.size = 30;
   this.x = canvas.width / 20;
   this.y = canvas.height / 2
   this.canvas = canvas;
   this.ctx = canvas.getContext('2d');
   this.speed = 4;
   this.direction = 0;
  }

  drawPlayer () {
   this.ctx.beginPath();
   this.ctx.arc(this.x, this.y, this.size/2, 0, Math.PI*2);
   this.ctx.fillStyle = 'black';
   this.ctx.fill();
   this.ctx.closePath();
  }

  playerMovement(){
    this.y += this.direction * this.speed;
  }

   updateLives(){
    this.lives -= 1;
    console.log(this.lives)
   }

   collisionsWithObstacles(obstacles){
    const collisionRight = this.x + this.size/2 > obstacles.x - obstacles.size/2;
    const collisionLeft = this.x - this.size/2 < obstacles.x + obstacles.size/2;
    const collisionTop = this.y - this.size/2 < obstacles.y + obstacles.size/2;
    const collisionBottom = this.y + this.size/2 > obstacles.y + obstacles.size/2;
  
    return collisionTop && collisionLeft && collisionBottom && collisionRight; 
    
   }

   updatePosition(newPosition) {
    this.direction = newPosition;
   }
}