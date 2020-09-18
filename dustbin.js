class Dustbin {
    constructor (x,y,w,h){
      var stop={
        isStatic:true
      }
      
      
        this.body=Bodies.rectangle(x,y,w,h,stop)
       this.image=loadImage("dustbingreen.png")
        this.width=w;
        this.height=h;
        World.add(world,this.body) 
    }
   display(){
     push()
     translate(this.body.position.x,this.body.position.y)
       imageMode(CENTER)
       image(this.image,0,0,200,200)
     
      }


}
