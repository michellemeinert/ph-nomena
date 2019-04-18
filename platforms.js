'use strict';
 
class Platforms {
   constructor (canvas) {
     this.canvas = canvas;
     this.ctx = canvas.getContext('2d');
     this.randomWidth = 170;
     this.height = 18;
     this.size = this.randomWidth * this.height;
     this.speed = 10;
     this.direction = -1;
     this.x = this.canvas.width;
     this.y = Math.floor(Math.random()*this.canvas.height);
   }

   drawPlatforms (){
    this.ctx.fillStyle = '#07070A';
    this.ctx.fillRect(this.x - this.randomWidth/2, this.y - this.height/2, this.randomWidth, this.height);
   }
   
   platformsMovement(){
      this.x += this.direction * this.speed;

  }
  outsideOfCanvas(element) {
    oustsideLeft = element.x < 0 + element.randomWidth;
    outsideTop = element.y < 0 + element.height;
    outsideRight = element.x > this.canvas.width - element.randomWidth;
    outsideBottom = lement.y > this.canvas.height - element.height;
    if (outsideLeft|| outsideTop|| outsideRight || outsideBottom){
      return;
    }
  }

   increaseSpeed() {
     this.speed += 0.1;
  }
  
 }
 