var fixedRect, movingRect,sprite1,sprite2

function setup() {

  createCanvas(800,400);
  fixedRect=  createSprite(600, 200, 50, 50);
  movingRect=createSprite(100,200,100,50);
  fixedRect.shapeColor="yellow"
  movingRect.shapeColor="yellow"
  fixedRect.debug=true
  movingRect.debug=true
  fixedRect.velocityX=-2
  movingRect.velocityX=2
  sprite1=createSprite(400,100,50,50)
  sprite2=createSprite(400,300,50,50)
  sprite1.velocityY=1
  sprite2.velocityY=-1
}

function draw() {
  background(0);
  if (isTouching(sprite1,sprite2)) {
 sprite1.shapeColor="blue" 
 sprite2.shapeColor="pink"  
  }
  bounceOff(fixedRect,movingRect);
  bounceOff(sprite1,sprite2)
  drawSprites();
}
