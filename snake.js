import { SNAKE_SPEED } from "./app.js";
import { getDirection } from "./snakeDirection.js";


const snakeBody=[
    {x:16,y:16}
]

export function snakeUpdate()
{
    const direction=getDirection()
    for(let i=snakeBody.length-2;i>=0;i--)
    {
        snakeBody[i+1]={...snakeBody[i]}
    }

    snakeBody[0].x+=direction.x
    snakeBody[0].y+=direction.y

    console.log(snakeBody);
}

export function snakeDraw(gameBoard){
    snakeBody.forEach(segment=>{
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}