class DeathSquares {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width/10;
    this.height = canvas.height/6;
    this.size = this.width * this.height;
    this.speed = 3;
    this.direction = 1;
    this.x = 0 + this.size;
    this.y = Math.floor(Math.random()*(this.canvas.height));
  }

  drawDeathSquares(){
   this.ctx.fillStyle = 'red';
   this.ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
  }
  
  deathSquaresMovement(){
     this.x += this.direction * this.speed;

 }
 
}