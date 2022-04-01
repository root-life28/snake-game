import { randomGridPosition } from "./grid.js"
import { expandSnake, onSnake } from "./snake.js"


let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

export function foodUpdate()
{
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
      }
}

export function foodDraw(gameBoard){
    
        const foodElement=document.createElement('div')
        foodElement.style.gridRowStart=food.y
        foodElement.style.gridColumnStart=food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
  }