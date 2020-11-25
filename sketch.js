
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj;
var bob1,bob2,bob3,bob4;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roofObj = new Roof(400,100,500,50);
 bob1 = new Ball(250,500,101);
 bob2 = new Ball(350,500,101);
 bob3 = new Ball(450,500,101);
 bob4 = new Ball(550,500,101);

 rope1 = new Chain(bob1.body,{x:250,y:110});
 rope2 = new Chain(bob2.body,{x:350,y:110});
 rope3= new Chain(bob3.body,{x:450,y:110});
 rope4 = new Chain(bob4.body,{x:550,y:110});



 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  roofObj.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  
  drawSprites();
 
}
function mouseDragged(){ 
  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
  } 



