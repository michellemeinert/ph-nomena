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

  drawPlayer (){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  playerMovement(){
    this.y += this.direction * this.speed;
  }

   updateLives(){
    this.lives -= 1;
    console.log(this.lives)
   }

   collisionsWithObstacles(obstacles){
   if((this.y - this.size/2 < obstacles.y + obstacles.size/2) || (this.y + this.size/2 > obstacles.y + obstacles.size/2)){
     return true;
    }
    console.log('collision !!');
   }

   updatePosition(newPosition) {
    this.direction = newPosition;
   }
}