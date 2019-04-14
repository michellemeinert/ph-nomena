'use strict';
 
class ObstaclesTop {
   constructor (canvas) {
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.randomWidth = Math.floor(Math.random()*(this.canvas.width/2.5));
     this.height = 10;
     this.size = this.randomWidth * this.height;
     this.speed = 3;
     this.direction = -1;
     this.x = 0 + this.size;
     this.y = Math.floor(Math.random()*(this.canvas.width));
   }

   drawObstaclesTop (){
    this.ctx.fillStyle = '#383B53';
    this.ctx.fillRect(this.x, this.y, this.randomWidth, this.height);
   }
    obstacleMovementTop (){
      this.x += this.direction * this.speed;

    }
 }

//  class ObstaclesBottom {
//    constructor (canvas) {
//      this.canvas = canvas;
//      this.canvas = canvas;
//      this.ctx = canvas.getContext('2d');
//      this.maxWidth = this.canvas.width/7;
//      this.randomHeight = Math.floor(Math.random()*(this.canvas.height/2));
//      this.size = this.maxWidth * this.randomHeight;
//      this.speed = 4;
//      this.direction = -1;
//      this.x = 0 + this.size;
//      this.y = this.canvas.height - this.size;
//    }
//    drawObstaclesBottom (){
//     this.ctx.fillStyle = '#383B53';
//     this.ctx.fillRect(this.x, this.y, this.maxWidth, this.randomHeight);
//    }
//     obstacleMovementBottom (){
//       this.x += this.direction * this.speed;

//     }
 