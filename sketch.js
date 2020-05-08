const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,canon;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

 

  ground = new Ground(600,height,1200,20);
  canon = new Canon(50,365,55,365);


  

}

function draw() {
  background(255,255,255);  
  drawSprites();

  ground.display();
  canon.display();

}