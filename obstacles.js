'use strict';
 
class ObstaclesTop {
   constructor (canvas) {
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.maxWidth = this.canvas.width/6;
     this.randomHeight = Math.floor(Math.random()*(this.canvas.height/2));
     this.size = this.maxWidth * this.randomHeight;
     this.speed = 4;
     this.direction = -1;
     this.x = 0 - this.size;
     this.y = 0 + this.size;
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
     this.size = this.maxWidth * this.randomHeight;
     this.speed = 4;
     this.direction = -1;
     this.x = 0 + this.size;
     this.y = this.canvas.height - this.size;
   }
   drawObstaclesBottom (){
    this.ctx.fillStyle = '#383B53';
    this.ctx.fillRect(this.x, this.y, this.maxWidth, this.randomHeight);
   }
    obstacleMovementBottom (){
      this.x += this.direction * this.speed;

    }
 }