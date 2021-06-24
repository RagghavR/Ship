var ship,ocean,ride,sea;
function preload(){
 floaten = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
 sea = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ocean = createSprite(200,200,100,100);
  ocean.addImage(sea);
  ocean.scale = 0.25;
  ship = createSprite(320,280,100,100);
  ship.addAnimation("war",floaten);
  ship.scale = 0.15;
  
  
}

function draw() {
  background("blue");
 drawSprites();
 ocean.velocityX = 5
 if (ocean.x > 400){
   ocean.x = 0
 }
}