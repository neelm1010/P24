var  paperSprite;
var paperBody,ground,groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	

	//paperSprite=createSprite(200, 450, 10,10);
	//paperSprite.scale=3
	//paperSprite.shapeColor=color("white");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1200,650);
	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
paperObj=new paper(1200,450,40)
	 
	 
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  Engine.update(engine);
  dustbinObj.display();
  paperObj.display();

  //paperSprite.x= paperBody.position.x
  //paperSprite.y= paperBody.position.y 

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
			Matter.Body.setStatic(paperObj,false) 
	}
}