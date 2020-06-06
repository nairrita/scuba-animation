

function preload(){
  scuba_img  = loadAnimation("images/scuba1.png","images/scuba2.png","images/scuba3.png","images/scuba4.png","images/scuba5.png","images/scuba6.png","images/scuba7.png","images/scuba8.png","images/scuba9.png","images/scuba10.png")
}


function setup() {
  createCanvas(800,400);
  scuba = createSprite(400, 200, 50, 50);
  scuba.addAnimation("scuba",scuba_img)
  scuba.scale = 2
}

function draw() {
  background(255);  


  drawSprites();
}