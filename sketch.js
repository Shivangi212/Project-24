
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1, plane, stone1, rubber1;

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

hammer1 = new Hammer(100,50);
plane = new Plane(400,height,800,20);
stone1 = new Stone(700,320,70,70);
rubber1 = new Rubber(700,240,70,70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer1.display();
  plane.display();
  stone1.display();
  rubber1.display();
  
  drawSprites();
 
}



