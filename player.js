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
   this.canvas = canvas;
   this.ctx = canvas.getContext('2d');
   this.speed = 1;
   this.movement = 0;
  }
  drawPlayer (){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect((canvas.width / 2), (canvas.height / 2), this.size, this.size);
  }
  // updatePosition(){
   
  // }
  // playerMovement(){
  //  this.movement = this.movement * this.speed;
  //  console.log(this.movement);
  // }
  // updateLives(){
  //  this.lives -= 1;
  //  console.log(this.lives)
  // }
  // collisionsWithObstacles(){
  // console.log('collision !!')
  // }
}