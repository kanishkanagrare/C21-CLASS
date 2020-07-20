var fixedRect, movingRect;
var object1, object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1 = createSprite(200,100, 50, 10)
object1.shapeColor = "green";
object1.velocityY = -5;
object2 = createSprite(200, 100, 30, 40);
object2.shapeColor = "green";
object2.velocityY = +5;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  bounceOff(object1, object2);

if(isTouching(movingRect, object1)){
  object2.shapeColor = "green";
  object1.shapeColor = "green";

}

else {
  object2.shapeColor = "black";
  object1.shapeColor = "black";
}
 
  drawSprites();
}

