# Phänomena

## Description
Phänomena is a game designed to confuse the Users, play with their perceptions and make them question the purpose of the game.



## MVP (DOM - CANVAS)
Canvas, 
Player can move left, right and jump to land on Platforms and collect points. 


## Backlog
- score
- optical 'illusions'
- background music for fun times 


## Data structure
### game.js 
Game()
 - this.canvas;
 - this.ctx
 - this.player
 - this.platforms
 - this.death
 - this.audio
 - loop()
 - clearCanvas()
 - updateCanvas()
 - drawCanvas()
 - drawScore()
 - objectsColliding()
 - setPlayerOnPlatform()
 - gameOver()
 

### player.js
Player()
 - this.lives
 - this.canvas
 - this.ctx
 - this.velocityX
 - this.velocityY
 - this.gravity
 - this.goLeft
 - this.goRight
 - this.currentFunction
 - this.onPlatform
 - this.score
 - this.hittingHead
 - this.size
 - this.radius
 - this.x
 - this.y
 - drawPlayer()
 - updateLives()
 - playerJumpUp()
 - playerFallDown()
 - playerGoLeft()
 - playerGoRight()
 - playerResetPosition()
 - checkIfOnTopOfPlatform()
 - checkIfUnderPlatform()
 - doWhenOnTopOfPlatform()
 - collisionsWithWalls()

### platforms.js
Platforms()
 - this.randomWidth
 - this.height
 - this.speed
 - this.direction
 - this.canvas
 - this.ctx
 - this.x
 - this.y
 - drawPlatforms()
 - platformsMovement()
 - outsideOfCanvas()
 - increaseSpeed()


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
- Main: testing transitions with setTimeout (deathScreen)
- Game: building the loop
- Player: construct obj
- Player: create movement (direction) function
- Main: test player movement with eventListener
- Platforms: construct obj
- Platforms: calculating positions for the layout 
- Player: create and test(!!) the collisions with Platform
- Platform: collisons with wall
- Game: add audio


### Demo 
https://michellemeinert.github.io/ph-nomena/.


### Slides
https://docs.google.com/presentation/d/1jj3M7IuebMlzefpdRHE2_R-L1VQQv3OX_064HvEppwU/edit?usp=sharing
