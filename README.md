# Phänomena

## Description



## MVP (DOM - CANVAS)
Canvas, the player can move up and down to avoid crashing into obstacles.


## Backlog
- User can choose between different themes that serve as optical illusions
- background music for fun times 


## Data structure
### game.js 
Game()
 - this.canvas;
 - this.ctx
 - this.player
 - this.obstacles
 - this.death
 - loop()
 - clearCanvas()
 - updateCanvas()
 - drawCanvas()
 - collisions()
 - death()

### player.js
Player()
 - this.lives
 - this.canvas
 - this.ctx
 - this.speed
 - this.size
 - this.x
 - this.y
 - this.direction
 - draw()
 - update()
 - direction()
 - lives()
 - collision()

### obstacles.js
Obstacles()
 - this.minWidth
 - this.maxHeight
 - this.speed
 - this.direction
 - this.canvas
 - this.ctx
 - this.x
 - this.y
 - draw()
 - update()


## States y States Transitions

- mainScreen
- gameScreen
- gameoverScreen


## Task

- Main: building screen function
- Main:  build mainScreen
- Main: build gameScreen
- Main: build deathScreen
- Main: addEventListener: creating the transitions
- Game: testing transitions with setTimeout (deathScreen)
- Game: building the loop
- Player: construct obj
- Player: create movement (direction) function
- Main: test player movement with eventListener
- Obstacle: construct obj
- Obstacle: calculating random sizes & positions for the layout 
- Player: create and test(!!) the checkCollisions function
  

## Links
...tbd

### Trello
...tbd


### Git
... tbd


### Slides
...tbd
