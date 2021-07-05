
var  bg, backgroundImg , ironImg , iron , ground ;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg = loadImage("images/iron.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale =3;

  iron = createSprite(200,505,20,50);
  iron.addImage(ironmanImg);
  iron.scale=0.5;

 
  ground = createSprite(500,585,1000,10 );
  ground.visible = false;

 
}

function draw() {
  bg.velocityY = 4;
  if(bg.y > 600){
    bg.y = 300;
  } 

  if (bg.y > 600){
    bg.y=bg.width/4;
  }
  if(iron.y<200){
    iron.y=200;
  }

 if(iron.x<500){
     iron.x=500;
  }



if(keyDown("up")){
  iron.y=iron.y-20;
}

if(keyDown("down")){
  iron.y=iron.y+3;
}

if(keyDown("left")){
  iron.x=iron.x-3;
}

if(keyDown("right")){
  iron.x=iron.x+3;
}

iron.velocityY=iron.velocityY+0.1;
iron.collide(ground);
    
    drawSprites();
   
}

