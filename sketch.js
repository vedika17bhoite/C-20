var rect1 , rect2 ; 


function setup() {
  createCanvas(800,400);
 rect1=createSprite(40,40,20,60)
 rect2=createSprite(100,100,20,60)
}

function draw() {
  background("lightblue");  
  
  rect1.x=World.mouseX
  rect1.y=World.mouseY

if(rect1.x-rect2.x < rect1.width/2 + rect2.width/2&& rect2.x-rect1.x < rect1.width/2 + rect2.width/2){

  rect1.shapeColor = "blue"
  rect2.shapeColor = "yellow"
}
else {
  rect1.shapeColor = "green"
  rect2.shapeColor = "red"
}
if (rect1.y-rect2.y < rect1.height/2 + rect2.height/2&& rect2.y-rect1.y < rect1.height/2 + rect2.height/2)  {
  
  rect1.shapeColor = "blue"
  rect2.shapeColor = "yellow"
}
else {
  rect1.shapeColor = "green"
  rect2.shapeColor = "red"
}







  drawSprites();
}