'use strict';
// function Obstacles (canvas) {
//  this.canvas = canvas;
//  this.ctx = ctx;
//  this.minWidth = null;
//  this.maxWidth = null;
//  this.speed = 1;
//  this.direction = -1;
// };

// Obstacles.prototype.draw = function () {
  
// }

// Obstacles.prototype.draw = function () {

// }

 class Obstacles {
   constructor (canvas ,y) {
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.maxWidth = this.canvas.width/6;
     this.maxHeight = this.canvas.height/2.5;
     this.speed = 4;
     this.direction = -1;
     this.x = this.canvas.width / this.maxWidth;
     this.y = y;
   }

   drawObstacles (){
    this.ctx.fillStyle = '#383B53';
    this.ctx.fillRect(this.x, this.y, this.maxWidth, this.maxHeight);
   }
    obstacleMovement (){
      this.x += this.direction * this.speed;

    }
 }