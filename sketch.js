//collision detection algorithm

/*var gameObj1, gameObj2, gameObj3, gameObj4;
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";

  gameObj1 = createSprite(100, 100, 50, 50);
  gameObj1.shapeColor = "green";
  gameObj2 = createSprite(200, 100, 50, 50);
  gameObj2.shapeColor = "green";
  gameObj3 = createSprite(300, 100, 50, 50);
  gameObj3.shapeColor = "green";
  gameObj4 = createSprite(400, 100, 50, 50);
  gameObj4.shapeColor = "green";
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.y - fixedRect.y);

  
  if(isTouching(gameObj1,movingRect)){
    gameObj1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gameObj1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }


  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2+object1.width/2
    && object2.x - object1.x < object2.width/2+object1.width/2
    && object1.y - object2.y < object2.height/2+object1.height/2
    && object2.y - object1.y < object2.height/2+object1.height/2){
      return true;
  } 
  else{
    return false;
  }
}*/

//bounceOff
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
fixedRect.velocityY = 5;
movingRect.velocityY = -5;

}

function draw() {
  background("black");  
  console.log(movingRect.y - fixedRect.y);
bounceOff(fixedRect, movingRect);
  
drawSprites();
}
