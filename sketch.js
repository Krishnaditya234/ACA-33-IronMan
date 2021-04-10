var ironMan, iron_collided;
var bg, bgImage;
var brickGroup, brickImage;

function preload(){
  ironImage =  loadImage("images/iron.png");
  bgImage = loadImage("images/bg.jpg");
  brickImage = loadImage("images/stone.png");
  
}

function setup() {
  createCanvas(1360, 650);
  bg = createSprite(580,300);
  bg.addImage(bgImage);
  bg.scale =2;
  bg.velocityY=8;

  ironMan = createSprite(200, 505, 1, 50);
  ironMan.addImage( ironImage);
  ironMan.scale = 0.2;
  ironMan.debug=false; 

  ground = createSprite(100,585,2500,10);
  ground.visible=false;

  bricksGroup = new Group();
 
  
}

function draw() {


  if (bg.y > 600){
    bg.y=bg.width/4;
  }
  if(keyDown("up")){
    ironMan.velocityY= -12;
  }
  if(keyDown("left")){
    ironMan.x-=10;
  }
  if(keyDown("right")){
    ironMan.x+=10
    ;
  }
   ironMan.velocityY += 1;
ironMan.collide(ground);

generateBricks();
for(var i = 0 ; i< (bricksGroup).length ;i++){
  var temp = (bricksGroup).get(i) ;
  
  if (temp.isTouching(ironMan)) {
     ironMan.collide(temp);
 
    }
      
  }

  drawSprites();
}



function generateBricks() {
  var v = Math.round(random(100,200))
  if (frameCount % v === 0) {
    var brick = createSprite(random(800,40),40,10);
    brick.y = 50;
    brick.addImage("brick",brickImage);
    brick.scale = 0.6;
    brick.velocityY = 2;
    
    brick.lifetime =250;
    bricksGroup.add(brick);
  }
}