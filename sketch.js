var hero;
var friend1,friend2;
var evil1,evil2,evil3,evil4;

var wall1, wall1, wall3
var bg;

var life = 3;

var gameState = "PLAY";
 
var bulletsL,bulletLGroup;
var bulletsR,bulletRGroup;
var bulletsU,bulletUGroup;
var bulletsD,bulletDGroup;
 


function preload(){
  //enemy1 = loadImage("images/enemy.png");
  //enemy2 = loadImage("images/enemy2idle.png");
  bg = loadImage("images/topviewgardenbg.png");
  
}

function setup(){
createCanvas(windowWidth,windowHeight);

hero = createSprite(77,100,20,20);
hero.shapeColor = "blue";

friend1 = createSprite(width-100,500,20,20);
friend2 = createSprite(width-130,500,20,20);

evil1 = createSprite(width-247,447,20,20);
evil1.shapeColor = "red";
evil2 = createSprite(200,237,20,20);
evil2.shapeColor = "red";
evil3 = createSprite(900,237,20,20);
evil3.shapeColor = "red";
evil4 = createSprite(129,167,20,20);
evil4.shapeColor = "red";

wall1 = createSprite(510,320,357,10);
wall2 = createSprite(533,360,300,10);
wall3 = createSprite(336,281,10,87);
wall4 = createSprite(363,240,290,10);
wall5 = createSprite(427,180,10,30);
wall6 = createSprite(503,220,10,30);
wall7 = createSprite(556,210,10,100);
wall8 = createSprite(666,258,230,10);
wall9 = createSprite(666,210,10,100);

bulletLGroup = new Group();
bulletRGroup = new Group();
bulletUGroup = new Group();
bulletDGroup = new Group();





}

function draw(){
  background(bg);

  if(gameState === "PLAY"){

  

  //hero's movement
  if(keyDown(UP_ARROW)){
      hero.y = hero.y - 3;
  }

  if(keyDown(DOWN_ARROW)){
      hero.y = hero.y + 3;
  }

  if(keyDown(RIGHT_ARROW)){
    hero.x = hero.x + 3;
  }

  if(keyDown(LEFT_ARROW)){
    hero.x = hero.x - 3;
  }

  if(keyDown("d")){
    createBulletR();
    
  }

  if(keyDown("a")){
    createBulletL();
    
  }

  if(keyDown("w")){
    createBulletU();
    
  }

  if(keyDown("s")){
    createBulletD();
    
  }

  if(bulletLGroup.isTouching(evil1)||bulletRGroup.isTouching(evil1)
  ||bulletUGroup.isTouching(evil1)||bulletDGroup.isTouching(evil1)){
    evil1.destroy();
  }

  if(bulletLGroup.isTouching(evil2)||bulletRGroup.isTouching(evil2)
  ||bulletUGroup.isTouching(evil2)||bulletDGroup.isTouching(evil2)){
    evil2.destroy();
  }

  if(bulletLGroup.isTouching(evil3)||bulletRGroup.isTouching(evil3)
  ||bulletUGroup.isTouching(evil3)||bulletDGroup.isTouching(evil3)){
    evil3.destroy();
  }

  if(bulletLGroup.isTouching(evil4)||bulletRGroup.isTouching(evil4)
  ||bulletUGroup.isTouching(evil4)||bulletDGroup.isTouching(evil4)){
    evil4.destroy();
  }



  

  if(hero.isTouching(evil1)||hero.isTouching(evil2)||
  hero.isTouching(evil3)||hero.isTouching(evil4)){
    life = life - 1;
    if(life === 0){
        gameState = "END";
    }
  }

  }
  if(gameState === "END"){
      textSize(28);
      text("Game Over!!!",width/2,height/2);
  }

  drawSprites();

}

function createBulletL(){
  bulletsL = createSprite(hero.x,hero.y,5,5);
  
  bulletsL.velocityX = -5;

  bulletLGroup.add(bulletsL);
}

function createBulletR(){
  bulletsR = createSprite(hero.x,hero.y,5,5);
  
  bulletsR.velocityX = 5;

  bulletRGroup.add(bulletsR);
}

function createBulletU(){
  bulletsU= createSprite(hero.x,hero.y,5,5);
  
  bulletsU.velocityY = -5;

  bulletUGroup.add(bulletsU);
}

function createBulletD(){
  bulletsD = createSprite(hero.x,hero.y,5,5);
  
  bulletsD.velocityY = 5;
  bulletDGroup.add(bulletsD)
}