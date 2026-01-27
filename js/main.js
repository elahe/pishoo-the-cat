let startBtn = document.querySelector("#start") 
let startPage = document.querySelector("#start-page")
let gamePage = document.querySelector("#game-page")


let cactusArr = []
let catObj = null
let cactusObj = null


startBtn.addEventListener("click", startGame)

function cactusSpawn(){
    let randomNum = Math.floor(Math.random() * 480)
    let spawnedCactus = new Cactus(randomNum)
    cactusArr.push(spawnedCactus)

    // console.log(randomNum)

}




function startGame(){
    startPage.style.display = "none"
    gamePage.style.display = "block"
    setInterval(gameLoop , Math.round(1000/60))
    setInterval(cactusSpawn,1000)

    catObj = new Cat()
    catObj.moving()
    cactusObj = new Cactus()
}



function gameLoop(){
    // cactusObj.movingCactus()
    cactusArr.forEach((cactus) => {
        cactus.movingCactus()
    })

    


}




