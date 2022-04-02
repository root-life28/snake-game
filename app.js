import { outsideGrid } from "./grid.js";
import { snakeUpdate,snakeDraw,getSnakeHead ,snakeIntersection} from "./snake.js";
import { foodDraw, foodUpdate } from "./snakeFood.js";
const gameBoard=document.getElementById('game-board')
let gameOver = false

let lastTime=0;
export const SNAKE_SPEED=5;

function loop(currentTime)
{
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location = '/'
        }
        return
      }
    window.requestAnimationFrame(loop)
    const everySecond=(currentTime-lastTime)/1000

    if(everySecond<1/SNAKE_SPEED) return
    lastTime=currentTime

    update()
    draw()
}

window.requestAnimationFrame(loop)

function update()
{
    snakeUpdate()
    foodUpdate()
    checkDeath()
}
function draw(){
    
    gameBoard.innerHTML=""
    snakeDraw(gameBoard)
    foodDraw(gameBoard)
}


function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }

  