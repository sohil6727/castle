const world = Matter.world;
const body = Matter.body;

var Rect1,Rect2,Rect3;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  Rect1 = new Rect(800,50,50,70);
  Rect2 = new Rect(800,500,50,90);
  Rect3 = new Rect(800,600,100,120);

  drawSprites();
}

function Draw(){
  Rect1.display();
  Rect2.display();
  Rect3.display();
  s
}