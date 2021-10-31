
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine;
var world;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 ball = Bodies.circle(100,20,30,{restitution: 1});
World.add(world,ball);
rectMode(CENTER)
ellipseMode(RADIUS)

console.log(ball);
// console.log(ground.position.y);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 30)
  fill("red");

 
}

