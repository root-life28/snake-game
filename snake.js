import { SNAKE_SPEED } from "./app.js";

const snakeBody=[
    {x:16,y:16},
    {x:15,y:16},
    {x:14,y:16}
]

export function snakeUpdate()
{
    for(let i=snakeBody.length-2;i>=0;i--)
    {
        snakeBody[i+1]={...snakeBody[i]}
    }

    snakeBody[0].x+=0
    snakeBody[0].y+=1
}

export function snakeDraw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.x
        snakeElement.style.gridColumnStart=segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}