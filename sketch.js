const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var cannon, ball1 , ball2 ,  ground  , bullet , cannonBallImg;
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;//
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
function preload(){

    cannonBallImg=loadImage("assets/cannonBall.png"); 

}
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    ball = new Ball(700,320,70,70);
    ball2 = new Ball(920,320,70,70);
    cannon = new cannonBall(100,100);
    Image(cannonBallImg ,900 , 100);
}


function draw() {
// Remember to update the Matter Engine and set the background.
background("white");
    Engine.update(engine);
    console.log(ball2.body.position.X);
   console.log(ball2.body.position.Y);
  console.log(ball2.body.angle);
    ball.display();
    ball2.display();
    ground.display();
    cannon.display();
}

function keyReleased() {
    // Call the shoot method for the cannon.
    //cannon.x = world.keyReleased("rightArrowKey");
    //cannon.y = world.keyReleased("downArrowKey");
    if (keyCode === 32){

     shootBall.velocityx = 2;

    }
}