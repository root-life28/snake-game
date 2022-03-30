import { snakeUpdate,snakeDraw } from "./snake.js";

const gameBoard=document.getElementById('game-board')

let lastTime=0;
export const SNAKE_SPEED=2;

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
}
function draw()
{
    gameBoard.innerHTML=""
    snakeDraw(gameBoard)
}