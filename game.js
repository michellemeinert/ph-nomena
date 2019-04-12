'use strict';
// function Game (canvas) {
//   this.canvas = canvas;
//   this.ctx = ctx;
//   this.player = player;
//   this.obstacles = obstacles;
//   this.death = death;
// }

//  Game.prototype.startLoop () {
//    const loop = function () {
//      window.requestAnimationFrame(loop)
//    }
//    window.requestAnimationFrame(loop);
//  }

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    //this.obstacles = obstacles;
    //this.death = death;
  }
  startLoop(){
    const loop = () => {
      console.log(this.player);
      this.player.drawPlayer();
      window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)
  }
}
