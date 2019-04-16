'use strict';
 
class Platforms {
   constructor (canvas) {
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.randomWidth = Math.floor(Math.random()*this.canvas.width);
     this.height = 10;
     this.size = this.randomWidth * this.height;
     this.speed = 3;
     this.direction = -1;
     this.x = this.canvas.width - this.size;
     this.y = Math.floor(Math.random()*this.canvas.height);
   }

   drawPlatforms (){
    this.ctx.fillStyle = '#383B53';
    this.ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
   }
   
   platformsMovement(){
      this.x += this.direction * this.speed;

  }
  
 }
 