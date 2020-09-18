class Paper{
  constructor(x,y,r){
    var options={
     isStatic:false,
     retitution:0.3,
     friction:0.5,
     density:0.44
    } 
    this.radius=r;
    this.body=Bodies.circle(x,y,r,options)
     
     World.add(world,this.body) 
    }
display(){
  push()
  translate(this.body.position.x,this.body.position.y) 
  ellipseMode(RADIUS)
  ellipse(0,0,this.radius)
  pop()
}
}