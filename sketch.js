
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-45, width,10);
	groundSprite.shapeColor=color(255,0,0)



	ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true} );
	
	World.add(world, ground);

	box1=new Dustbin(950,620,20,100);
    // box2=new Dustbin(800,620,20,100);
    // box3=new Dustbin(875,665,170,20)
	
	 paper=new Paper(60,640,40)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  box1.display()
//   box2.display()
//   box3.display()
  
// ground.display()
groundSprite.x=ground.position.x
groundSprite.y=ground.position.y
// rectMode(CENTER);
// rect(groundSprite.x,groundSprite.y,620,20)


paper.display()
  
  
  drawSprites();
 
}


function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-185})
}

}



