let startBtn = document.querySelector("#start") 
let startPage = document.querySelector("#start-page")
let gamePage = document.querySelector("#game-page")


let cactusArr = []
let pizzaArr = []
let yarnArr = []

let catObj = null
let cactusObj = null
let pizzaObj = null
let yarnObj = null
let score = 0
// let randomNum = Math.floor(Math.random() * 480)



/// cat moving

document.addEventListener("keydown",(event) => {
    if(event.key === "ArrowUp"){
        catObj.isMovingUp = true
    }
    if(event.key === "ArrowDown"){
        catObj.isMovingDown = true
    }
    if(event.key === "ArrowLeft"){
        catObj.isMovingLeft = true
    }
    if(event.key === "ArrowRight"){
        catObj.isMovingRight = true
    }
})


document.addEventListener("keyup",(event) => {
    if(event.key === "ArrowUp"){
        catObj.isMovingUp = false
    }
    if(event.key === "ArrowDown"){
        catObj.isMovingDown = false
    }
    if(event.key === "ArrowLeft"){
        catObj.isMovingLeft = false
    }
    if(event.key === "ArrowRight"){
        catObj.isMovingRight = false
    }
})




////// is colliding 

function theColliding(){
    cactusArr.forEach((eachCac) => {
        let isColliding = checkCollisionCatCac(catObj, eachCac)
        if (isColliding) {
            // gameOver()
            console.log("cactus")
        }
    })
    yarnArr.forEach((eachyarn) => {
        let isColliding = checkCollisionCatCac(catObj, eachyarn)
        if (isColliding) {
            // gameOver()
            console.log("yarn")
        }
    })
    pizzaArr.forEach((eachpizza) => {
        let isColliding = checkCollisionCatCac(catObj, eachpizza)
        if (isColliding) {
            // gameOver()
            console.log("pizza")
        }
    })
}

function checkCollisionCatCac(obj1, obj2) {
    return (
        obj1.x < obj2.posX + obj2.width &&
        obj1.x + obj1.w > obj2.posX &&
        obj1.y < obj2.posY + obj2.height &&
        obj1.y + obj1.h > obj2.posY
    );
}




















startBtn.addEventListener("click", startGame)

function cactusSpawn(){
    let randomNum = Math.floor(Math.random() * 480)
    let spawnedCactus = new Cactus(randomNum)
    cactusArr.push(spawnedCactus)
}
function pizzaSpawn(){
    let randomNum = Math.floor(Math.random() * 480)
    let spawnedPizza = new Pizza(randomNum)
    pizzaArr.push(spawnedPizza)
}
function yarnSpawn(){
    let randomNum = Math.floor(Math.random() * 480)
    let spawnedYarn = new YarnBall(randomNum)
    yarnArr.push(spawnedYarn)
}
console.log(yarnArr)

function deSpawn (){
    
    if(cactusArr.length !== 0 && cactusArr[0].posX  <= -60 ){
        cactusArr[0].cactus.remove()// removing from dom
        cactusArr.shift() // removes from js
    }
    if(pizzaArr.length !== 0 && pizzaArr[0].posX  <= -60 ){
        pizzaArr[0].pizza.remove()// removing from dom
        pizzaArr.shift() // removes from js
    }
    if(yarnArr.length !== 0 && yarnArr[0].posX  <= -60 ){
        yarnArr[0].yarn.remove()// removing from dom
        yarnArr.shift() // removes from js
    }
} 





function startGame(){
    startPage.style.display = "none"
    gamePage.style.display = "block"
    setInterval(gameLoop , Math.round(1000/60))
    setInterval(cactusSpawn,1000)
    setInterval(pizzaSpawn,1000)
    setInterval(yarnSpawn,2000)

    catObj = new Cat()
    // catObj.moving()
    // cactusObj = new Cactus()
} 

function gameOver(){
    alert("shit")
}



function gameLoop(){
    // cactusObj.movingCactus()
    catObj.moving()
    cactusArr.forEach((cactus) => {
        cactus.movingCactus()
    })
    pizzaArr.forEach((pizza) => {
        pizza.movingPizza()
    })
    yarnArr.forEach((yarn) => {
        yarn.movingYarn()
    })
    deSpawn()
    theColliding()
    // gameOver()

}




