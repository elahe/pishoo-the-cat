class Pizza {
    constructor(posY,posX ){
        

        this.pizza = document.createElement("img")
        this.pizza.src = "../images/pizza.png"
        gamePage.append(this.pizza)

        this.posX = 700
        this.posY = posY
        this.pizza.style.width = "40px"
        this.pizza.style.height = "40px"

        this.pizza.style.position = "absolute"
        this.pizza.style.top = `${this.posY}px`
        this.pizza.style.left = `${this.posX}px`
    }
    movingPizza(){
        this.posX -= 1
        this.pizza.style.left = `${this.posX}px`

    }
}