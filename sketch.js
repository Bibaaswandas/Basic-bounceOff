var fixedRect, movingRect, alpha, beta;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  alpha = createSprite(300,50,45,55);
  alpha.shapeColor = "yellow";
  alpha.velocityX = 3;

  beta = createSprite(500,50,45,55);
  beta.shapeColor = "yellow";
  beta.velocityX = -3;


}

function draw() {
  background(0,0,0);  


  bounceOff(movingRect, fixedRect);

  bounceOff(alpha, beta);

  drawSprites();
}

function bounceOff(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
  object1.shapeColor = "red";
  object2.shapeColor = "red";
} 
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
  object1.shapeColor = "green";
  object2.shapeColor = "green";
}

}