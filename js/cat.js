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
    }
    moving(){
        document.addEventListener("keydown",(event) => {
            if(event.key === "ArrowUp"){
                this.y -= 3
                this.cat.style.top = `${this.y}px`
            }
        })
        document.addEventListener("keydown",(event) => {
            if(event.key === "ArrowDown"){
                this.y += 3
                this.cat.style.top = `${this.y}px`
            }
        })
        document.addEventListener("keydown",(event) => {
            if(event.key === "ArrowLeft"){
                this.x -= 3
                this.cat.style.left = `${this.x}px`
                console.log(this.x)
            }
        })
        document.addEventListener("keydown",(event) => {
            if(event.key === "ArrowRight"){
                this.x += 3
                this.cat.style.left = `${this.x}px`
                
            }
        })
    }
}