import { snakeUpdate,snakeDraw } from "./snake.js";
import { foodDraw, foodUpdate } from "./snakeFood.js";


const gameBoard=document.getElementById('game-board')


let lastTime=0;
export const SNAKE_SPEED=5;

function loop(currentTime)
{
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
}
function draw(){
    
    gameBoard.innerHTML=""
    snakeDraw(gameBoard)
    foodDraw(gameBoard)
}