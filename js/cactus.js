class Cactus {
    constructor(posY,posX ){
        

        this.cactus = document.createElement("img")
        this.cactus.src = "./images/cactus.png"
        gamePage.append(this.cactus)

        this.posX = 700
        this.posY = posY
        this.width = 40
        this.height = 40

        

        this.cactus.style.position = "absolute"
        this.cactus.style.top = `${this.posY}px`
        this.cactus.style.left = `${this.posX}px`
        this.cactus.style.width = `${this.width}px`
        this.cactus.style.height = `${this.height}px`
    }
    movingCactus(){
        this.posX -= 1
        this.cactus.style.left = `${this.posX}px`

    }

}