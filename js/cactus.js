class Cactus {
    constructor(posY,posX ){
        

        this.cactus = document.createElement("img")
        this.cactus.src = "../images/cactus.png"
        gamePage.append(this.cactus)

        this.posX = 700
        this.posY = posY
        this.width = 60
        this.height = 60

        this.cactus.style.position = "absolute"
        this.cactus.style.top = `${this.posY}px`
        this.cactus.style.left = `${this.posX}px`
    }
    movingCactus(){
        this.posX -= 1
        this.cactus.style.left = `${this.posX}px`

    }

}