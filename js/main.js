let startBtn = document.querySelector("#start") 
let startPage = document.querySelector("#start-page")
let gamePage = document.querySelector("#game-page")



let catObj = null


startBtn.addEventListener("click", startGame)

function startGame(){
    startPage.style.display = "none"
    gamePage.style.display = "block"
    setInterval(gameLoop , Math.round(1000/60))

    catObj = new Cat()
    catObj.moving()

}



function gameLoop(){
    


}

