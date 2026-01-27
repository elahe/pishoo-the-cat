class YarnBall {
    constructor(posY,posX ){
        

        this.yarn = document.createElement("img")
        this.yarn.src = "../images/yarn-ball.png"
        gamePage.append(this.yarn)

        this.posX = 700
        this.posY = posY
        this.yarn.style.width = "40px"
        this.yarn.style.height = "40px"

        this.yarn.style.position = "absolute"
        this.yarn.style.top = `${this.posY}px`
        this.yarn.style.left = `${this.posX}px`
    }
    movingYarn(){
        this.posX -= 1
        this.yarn.style.left = `${this.posX}px`

    }
}