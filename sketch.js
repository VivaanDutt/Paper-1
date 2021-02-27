
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1, dustbin2, dustbin3;f
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600, 700, 1200, 50);

  paper1 = new Paper(200, 500, 50);
  dustbin1 = new Dustbin(800, 660, 200, 20);
	dustbin2 = new Dustbin(700, 620, 20, 100);
  dustbin3 = new Dustbin(900, 620, 20, 100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);  
  keyPressed(); 
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85, y: -20});
  }
}

