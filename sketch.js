var path, pathImage;
var power, path_run;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  power_run = loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.scale = 1.2;
  path.velocityY = 4;
  
  power = createSprite(200,200,10,10)
  power.addAnimation("run",power_run)
  power.scale = 0.1

}

function draw() {
  background(0);
if(path.y > 400){
    path.y = height/2
  }
  drawSprites();
  power.x=World.mouseX;
  
}
