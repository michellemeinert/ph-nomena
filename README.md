# Phänomena

## Description



## MVP (DOM - CANVAS)
Canvas, the player can move up and down to avoid crashing into obstacles.


## Backlog
- User can choose between different themes that serve as optical illusions
- background music for fun times 


## Data structure
#game.js 
Game()
this.canvas
this.ctx
this.player
this.obstacles
this.death
loop()
clearCanvas()
updateCanvas()
drawCanvas()
collisions()
death()

#player.js
Player()
this.lives
this.canvas
this.ctx
this.speed
this.size
this.x
this.y
this.direction
draw()
update()
direction()
lives()
collision()

#obstacles.js
this.minWidth
this.maxHeight
this.speed
this.direction
this.canvas
this.ctx
this.x
this.y
draw()
update()


## States y States Transitions

- mainScreen
- gameScreen
- gameoverScreen


## Task

#Main
building the screens and creating the transitions

#Game
creating loop and animation frame
and death scenario

#Player
creating movement and checking collisions

#Obstacles
calculating random sizes and positions that maintain the conditions of the main layout 


## Links
...tbd

### Trello
...tbd


### Git
... tbd


### Slides
...tbd
