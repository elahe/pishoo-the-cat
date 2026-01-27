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
// let randomNum = Math.floor(Math.random() * 480)


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






function startGame(){
    startPage.style.display = "none"
    gamePage.style.display = "block"
    setInterval(gameLoop , Math.round(1000/60))
    setInterval(cactusSpawn,1000)
    setInterval(pizzaSpawn,1000)
    setInterval(yarnSpawn,2000)

    catObj = new Cat()
    catObj.moving()
    // cactusObj = new Cactus()
}



function gameLoop(){
    // cactusObj.movingCactus()
    cactusArr.forEach((cactus) => {
        cactus.movingCactus()
    })
    pizzaArr.forEach((pizza) => {
        pizza.movingPizza()
    })
    yarnArr.forEach((yarn) => {
        yarn.movingYarn()
    })

}




