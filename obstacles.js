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

 class ObstaclesTop {
   constructor (canvas) {
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.maxWidth = this.canvas.width/6;
     this.randomHeight = Math.floor(Math.random()*(this.canvas.height/2));
     this.speed = 4;
     this.direction = -1;
     this.x = this.canvas.width;
     this.y = 0;
   }

   drawObstaclesTop (){
    this.ctx.fillStyle = '#383B53';
    this.ctx.fillRect(this.x, this.y, this.maxWidth, this.randomHeight);
   }
    obstacleMovementTop (){
      this.x += this.direction * this.speed;

    }
 }

 class ObstaclesBottom {
   constructor (canvas) {
     this.canvas = canvas;
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.maxWidth = this.canvas.width/7;
     this.randomHeight = Math.floor(Math.random()*(this.canvas.height/2));
     this.speed = 4;
     this.direction = -1;
     this.x = this.canvas.width;
     this.y = this.canvas.height;;
   }
   drawObstaclesBottom (){
    this.ctx.fillStyle = '#383B53';
    this.ctx.fillRect(this.x, this.y, this.maxWidth, this.randomHeight);
   }
    obstacleMovementBottom (){
      this.x += this.direction * this.speed;

    }
 }