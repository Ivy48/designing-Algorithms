var fixrectangle;
var movingrectangle;

function setup() {
  createCanvas(800,600);
  fixrectangle=createSprite(300, 300, 50, 150);
  fixrectangle.shapeColor="cyan";
  movingrectangle=createSprite(600,300,150,50);
  movingrectangle.shapeColor="cyan"
}

function draw() {
  background("blue");

  if(movingrectangle.x-fixrectangle.x<fixrectangle.width/2+movingrectangle.width/2&&
  fixrectangle.x-movingrectangle.x<movingrectangle.width/2+fixrectangle.width/2&&
  movingrectangle.y-fixrectangle.y<fixrectangle.height/2+movingrectangle.height/2&&
  fixrectangle.y-movingrectangle.y<movingrectangle.height/2+fixrectangle.height/2){
  
    fixrectangle.velocityX=3;
    fixrectangle.velocityY=3;
    fixrectangle.shapeColor="pink";
   movingrectangle.shapeColor="pink";
  }else{
    fixrectangle.shapeColor="cyan";
   movingrectangle.shapeColor="cyan";
  }
  
  console.log(movingrectangle.x-fixrectangle.x);
  movingrectangle.y=World.mouseY;
  movingrectangle.x=World.mouseX; 
  drawSprites();
}