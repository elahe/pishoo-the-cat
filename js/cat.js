class Cat{
    constructor(x,y,w,h){
        this.cat = document.createElement("img")
        this.cat.src = "../images/cat.png"
        gamePage.append(this.cat)

        this.x = 60
        this.y = 60
        this.w = 40
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

    automaticMovementCat(){
        // let isMovingUp = false
        // let isMovingDown = false
        // let isMovingLeft = false
        // let isMovingRight = false

        // if(isMovingUp === true){
        //     this.y -= 1
        //     this.cat.style.top = `${this.y}px`
        // }
        // if(isMovingDown === true){
        //     this.y += 1
        //     this.cat.style.top = `${this.y}px`
        // }
        // if(isMovingLeft === true){
        //     this.x -= 1
        //     this.cat.style.left = `${this.x}px`
        // }
        // if(isMovingRight === true){
        //     this.x += 1
        //     this.cat.style.left = `${this.x}px`
        // }

    }


    
    // moving(){
    //     document.addEventListener("keydown",(event) => {
    //         if(event.key === "ArrowUp"){
    //             this.y -= 3
    //             this.cat.style.top = `${this.y}px`
    //         }
    //     })
    //     document.addEventListener("keydown",(event) => {
    //         if(event.key === "ArrowDown"){
    //             this.y += 3
    //             this.cat.style.top = `${this.y}px`
    //         }
    //     })
    //     document.addEventListener("keydown",(event) => {
    //         if(event.key === "ArrowLeft"){
    //             this.x -= 3
    //             this.cat.style.left = `${this.x}px`
    //             // console.log(this.x)
    //         }
    //     })
    //     document.addEventListener("keydown",(event) => {
    //         if(event.key === "ArrowRight"){
    //             this.x += 3
    //             this.cat.style.left = `${this.x}px`
                
    //         }
    //     })
    // }

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

        // document.addEventListener("keydown",(event) => {
        //     if(event.key === "ArrowUp"){
        //         isMovingUp = true
        //     }
        // })
        // document.addEventListener("keydown",(event) => {
        //     if(event.key === "ArrowDown"){
        //         isMovingDown = true
        //     }
        // })
        // document.addEventListener("keydown",(event) => {
        //     if(event.key === "ArrowLeft"){
        //         isMovingLeft = true
        //     }
        // })
        // document.addEventListener("keydown",(event) => {
        //     if(event.key === "ArrowRight"){
        //         isMovingRight = true
        //     }
        // })


        // document.addEventListener("keyup",(event) => {
        //     if(event.key === "ArrowUp"){
        //         isMovingUp = false
        //     }
        // })
        // document.addEventListener("keyup",(event) => {
        //     if(event.key === "ArrowDown"){
        //         isMovingDown = false
        //     }
        // })
        // document.addEventListener("keyup",(event) => {
        //     if(event.key === "ArrowLeft"){
        //         isMovingLeft = false
        //     }
        // })
        // document.addEventListener("keyup",(event) => {
        //     if(event.key === "ArrowRight"){
        //         isMovingRight = false
        //     }
        // })
    