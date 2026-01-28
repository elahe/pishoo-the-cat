class Cat{
    constructor(x,y,w,h){
        this.cat = document.createElement("img")
        this.cat.src = "../images/cat.png"
        gamePage.append(this.cat)

        this.x = 60
        this.y = 60
        this.w = 30
        this.h = 40


        this.cat.style.position = "absolute"
        this.cat.style.top = `${this.y}px`
        this.cat.style.left = `${this.x}px`
        this.cat.style.width = `${this.w}px`
        this.cat.style.height = `${this.h}px`

        this.isMovingUp = false
        this.isMovingDown = false
        this.isMovingLeft = false
        this.isMovingRight = false
    }

    

    
    moving(){



        if(this.isMovingUp === true){
            this.y -= 1
            this.cat.style.top = `${this.y}px`
        }
        if(this.isMovingDown === true){
            this.y += 1
            this.cat.style.top = `${this.y}px`
        }
        if(this.isMovingLeft === true){
            this.x -= 1
            this.cat.style.left = `${this.x}px`
        }
        if(this.isMovingRight === true){
            this.x += 1
            this.cat.style.left = `${this.x}px`
        }
    }


        
}

    