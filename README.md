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

### Main
- building the screens function
- build mainScreen
- build gameScreen
- build deathScreen
- addEventListener: creating the transitions

### Game
- testing transitions with setTimeout (deathScreen)
- building the loop
- eventListeners for player movement (up & down)
- testing random obstacle generator 


### Player
- obj constructor 
- prototype functions (as seen in my data structure)


### Obstacles
- obj constructor
- prototype functions (seen in data structure)
- calculating random sizes & positions for the layout 


## Links
...tbd

### Trello
...tbd


### Git
... tbd


### Slides
...tbd
