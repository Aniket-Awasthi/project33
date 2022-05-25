var World = Matter.World;
var Engine = Matter.Engine;

var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var snows = [];
var bg;
var boy,base;

var boyImg,baseImg;
function preload(){

bg = loadImage("snow1.jpg");
boyImg = loadImage("boy1.png");
baseImg = loadImage("base.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


 boy = createSprite(400, 275, 50, 50);
 boy.velocityY = 0;  
 base = createSprite(400, 350, 800, 100);

 
 
}

function draw() {
  background(0);  
image(bg,0,0,800,400);

boy.velocityY = boy.velocityY +1;
boy.collide(base);

  Engine.update(engine);
  
  if(frameCount % 1 === 0) {

    snows.push(new Snow(random(20,780),0));
  }
  if(frameCount % 2 === 0) {

    snows.push(new Snow(random(20,780),0));
  }
  for (var s = 0; s < snows.length; s ++) {
    snows[s].display();
     }

  
  

  image(baseImg,0, 300, 800, 100);
image(boyImg,boy.x-40,boy.y-60,80,100);
if(keyIsDown(LEFT_ARROW)){
  boy.x -= 8;
}
if(keyIsDown(RIGHT_ARROW)){
  boy.x += 8;
}
if(keyIsDown(32) && boy.y>=265){
  boy.velocityY = -15;
  
}

}
