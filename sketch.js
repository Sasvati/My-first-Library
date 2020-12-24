var t_object2, t_object1;
var mrect, frect


function setup() {
  createCanvas(1200,800);
  t_object2 = createSprite(400, 100, 50, 80);
  t_object2.shapeColor = "green";

 t_object1 = createSprite(400, 800,80,30);
 t_object1.shapeColor = "green";

 t_object1.velocityY = -5;
  t_object2.velocityY = +5;

  mrect = createSprite(400, 300,80,30);
  frect = createSprite(100, 200,50,80);

}

function draw() {
  background(0,0,0);  

  if (isTouching(frect, mrect)){
    mrect.shapeColor="turquoise"
    frect.shapeColor="turquoise" 
  }
  else{
    mrect.shapeColor="magenta"
    frect.shapeColor="magenta" 
  }

  bounceOff(t_object1, t_object2);
  
  
  mrect.x = mouseX
  mrect.y = mouseY

  drawSprites();
}

