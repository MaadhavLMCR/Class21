var fixedRect, movingRect;
var gameobj1, gameobj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

  gameobj1=createSprite(0,400,50,80);
  gameobj1.shapeColor = "red";
  gameobj2 = createSprite(800,400,80,30);
  gameobj2.shapeColor = "blue";

  gameobj1.velocityX = 5;
  gameobj2.velocityX = -5;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameobj1, gameobj2);
  drawSprites();
}
