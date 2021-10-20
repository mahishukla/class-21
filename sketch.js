var fixedRect, movingRect;
var o1,o2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(100,200,50,50);
  o1.shapeColor="blue";
  o2=createSprite(200,200,50,50);
  o2.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(fixedRect,o2)){

  
    o2.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    o2.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
      return true;
    }
else{
  return false;

}
}
