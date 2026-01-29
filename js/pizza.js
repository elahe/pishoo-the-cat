class Pizza {
    constructor(posY,posX ){
        

        this.pizza = document.createElement("img")
        this.pizza.src = "./images/pizza.png"
        gamePage.append(this.pizza)

        this.posX = 700
        this.posY = posY
        this.width = 40
        this.height = 40


        this.pizza.style.position = "absolute"
        this.pizza.style.top = `${this.posY}px`
        this.pizza.style.left = `${this.posX}px`
        this.pizza.style.width = `${this.width}px`
        this.pizza.style.height = `${this.height}px`
    }
    movingPizza(){
        this.posX -= 1
        this.pizza.style.left = `${this.posX}px`

    }
}