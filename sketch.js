var fixedRect, movingRect

function setup() {

  createCanvas(800,400);
  fixedRect=  createSprite(400, 200, 50, 50);
  movingRect=createSprite(100,100,100,50);
  fixedRect.shapeColor="yellow"
  movingRect.shapeColor="yellow"
  fixedRect.debug=true
  movingRect.debug=true
}

function draw() {
  background(0);
  movingRect.x=mouseX
  movingRect.y=mouseY 
  if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2) {
      fixedRect.shapeColor="blue"
      movingRect.shapeColor="blue"
  } else{
    fixedRect.shapeColor="yellow"
  movingRect.shapeColor="yellow"
  }
  drawSprites();
}