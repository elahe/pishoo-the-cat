let startBtn = document.querySelector("#start") 
let restartBtn = document.querySelector("#restart") 
let startPage = document.querySelector("#start-page")
let gamePage = document.querySelector("#game-page")
let gameOverPage = document.querySelector("#gameover-page")
let scoreElement = document.querySelectorAll(".score span")
let highScore = Number(localStorage.getItem("highScore")) || 0
let highestScore = document.querySelector(".highestScore span")



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

const gameSound = new Audio("./sounds/gameloop.mp3")
const hitSound = new Audio("./sounds/hit.mp3")
const pointSound = new Audio("./sounds/point.mp3")
const gameoverSound = new Audio("./sounds/gameover.mp3")
const eatSound = new Audio("./sounds/eat.mp3")


gameSound.loop = true
gameSound.volume = 0.1
hitSound.volume = 0.2
pointSound.volume = 0.2
gameoverSound.volume = 0.1
eatSound.volume = 0.1


///moving cat

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




////// collision

function theColliding(){
    cactusArr.forEach((eachCac) => {
        let isColliding = checkCollisionCatCac(catObj, eachCac)
        if (isColliding) {
            hitSound.currentTime = 0;
            hitSound.play();
            gameOver()
        }
    })
    yarnArr.forEach((eachyarn) => {
        let isColliding = checkCollisionCatCac(catObj, eachyarn)
        if (isColliding&& !eachyarn.hit) {
            eachyarn.hit = true; // to add score just one time
            score++
            pointSound.currentTime = 0;
            pointSound.play();
            scoreElement.forEach(span => {
                span.innerText = score; // updating dom
            });
            eachyarn.yarn.style.display = "none"
        }
    })
    pizzaArr.forEach((eachpizza) => {
        let isColliding = checkCollisionCatCac(catObj, eachpizza)
        if (isColliding && !eachpizza.hit) { // making cat bigger when colliding with pizza
            eachpizza.hit = true;
            catObj.w += 6
            catObj.h += 6
            catObj.cat.style.width = `${catObj.w}px`
            catObj.cat.style.height = `${catObj.h}px`
            eatSound.currentTime = 0;
            eatSound.play();
            eachpizza.pizza.style.display = "none"
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






//////spawning





function spawningAll(className , array){
    let randomNum = Math.floor(Math.random() * 480)
    let spawnedItem = new className(randomNum)
    array.push(spawnedItem)
}





function deSpawn (){
    
    if(cactusArr.length !== 0 && cactusArr[0].posX  <= -60 ){
        cactusArr[0].cactus.remove()
        cactusArr.shift() 
    }
    if(pizzaArr.length !== 0 && pizzaArr[0].posX  <= -60 ){
        pizzaArr[0].pizza.remove()
        pizzaArr.shift() 
    }
    if(yarnArr.length !== 0 && yarnArr[0].posX  <= -60 ){
        yarnArr[0].yarn.remove()
        yarnArr.shift() 
    }
} 








//// start game

startBtn.addEventListener("click", startGame)


function startGame(){
    startPage.style.display = "none"
    gamePage.style.display = "block"
    gameLoopInterval = setInterval(gameLoop , Math.round(1000/60))

    cactusSpawnInterval = setInterval(() =>{
        spawningAll(Cactus,cactusArr)
    },1000)

    pizzaSpawnInterval = setInterval(() => 
        {spawningAll(Pizza,pizzaArr)
    },1300)

    yarnSpawnInterval = setInterval(() => 
        {spawningAll(YarnBall,yarnArr)
    },1700)
    gameSound.play()




    catObj = new Cat()
} 

function gameOver(){
    startPage.style.display = "none"
    gamePage.style.display = "none"
    gameOverPage.style.display = "flex"
    clearInterval(gameLoopInterval)
    clearInterval(cactusSpawnInterval)
    clearInterval(pizzaSpawnInterval)
    clearInterval(yarnSpawnInterval)
    gameSound.pause()
    gameoverSound.play()
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }
    highestScore.innerText = highScore
    console.log(highestScore.innerText)

}




//// restart
restartBtn.addEventListener("click" , restart)
function restart(){
    if (catObj) {
        catObj.cat.remove();
        catObj = null;
    }


    cactusArr.forEach((cac) => {
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
    score = 0

    scoreElement.forEach(span => {
        span.innerText = score;
    });

    gameOverPage.style.display = "none"
    startGame()
}


function gameLoop(){
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




