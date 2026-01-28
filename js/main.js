let startBtn = document.querySelector("#start") 
let restartBtn = document.querySelector("#restart") 
let startPage = document.querySelector("#start-page")
let gamePage = document.querySelector("#game-page")
let gameOverPage = document.querySelector("#gameover-page")



let cactusArr = []
let pizzaArr = []
let yarnArr = []

let catObj = null
let cactusObj = null
let pizzaObj = null
let yarnObj = null
let score = 0

let gameLoopInterval = null
let cactusSpawnInterval = null
let pizzaSpawnInterval = null
let yarnSpawnInterval = null

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
            gameOver()
            // console.log("cactus")
        }
    })
    yarnArr.forEach((eachyarn) => {
        let isColliding = checkCollisionCatCac(catObj, eachyarn)
        if (isColliding&& !eachyarn.hit) {
            eachyarn.hit = true;
            score++
            console.log(score)
        }
    })
    pizzaArr.forEach((eachpizza) => {
        let isColliding = checkCollisionCatCac(catObj, eachpizza)
        if (isColliding&& !eachpizza.hit) {
            eachpizza.hit = true;
            catObj.w += 3
            catObj.h += 3
            catObj.cat.style.width = `${catObj.w}px`
            catObj.cat.style.height = `${catObj.h}px`
            // console.log(catObj.w)
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


















//// start game

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
// console.log(yarnArr)





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
    gameLoopInterval = setInterval(gameLoop , Math.round(1000/60))
    cactusSpawnInterval = setInterval(cactusSpawn,1000)
    pizzaSpawnInterval = setInterval(pizzaSpawn,1000)
    yarnSpawnInterval = setInterval(yarnSpawn,2000)

    catObj = new Cat()
    // catObj.moving()
    // cactusObj = new Cactus()
} 

function gameOver(){
    startPage.style.display = "none"
    gamePage.style.display = "none"
    gameOverPage.style.display = "block"
    clearInterval(gameLoopInterval)
    clearInterval(cactusSpawnInterval)
    clearInterval(pizzaSpawnInterval)
    clearInterval(yarnSpawnInterval)

}




// restart
restartBtn.addEventListener("click" , restart)
function restart(){
    if (catObj) {
        catObj.cat.remove();
        catObj = null;
    }


    cactusArr.forEach((cac) => {
        console.log("ggg")
        cac.cactus.remove()
        
    })
    pizzaArr.forEach((pizza) => {
        pizza.pizza.remove()
    })
    yarnArr.forEach((yarn) => {
        yarn.yarn.remove()
    })

    cactusArr.length = 0
    pizzaArr.length = 0
    yarnArr.length = 0
    // console.log( yarnArr.length)

    // console.log('bluh')




    gameOverPage.style.display = "none"
    startGame()
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

}




