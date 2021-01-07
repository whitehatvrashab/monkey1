

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var line
var jungle,jungleImage;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  jungleImage=loadImage("jungle.webp");
}



function setup() {
createCanvas(500,300);
  
  
  jungle=createSprite(180,70,20,20);
  jungle.addImage(jungleImage);
  jungle.x = jungle.width /2
  jungle.velocityX=-2;
  jungle.scale=2.5
  
  line=createSprite(340,280,680,20);
  line.shapeColor="black";
  line.visible=false;
  
  monkey=createSprite(50,240,20,20);
  monkey.addAnimation("jungle",monkey_running);
  monkey.scale=0.1
  

  
  
  
obstacleGroup= new Group();
FoodGroup= new Group(); 


  
}


function draw() {
background(180);
  
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  
if(keyDown("space")&& monkey.y>=239){
        monkey.velocityY = -14;
      }

    monkey.velocityY = monkey.velocityY + 0.5;

    
    monkey.collide(line)
  

  spawnBanana();
  spawnObstacle();
  
  drawSprites();
  fill("black")
  textSize(20);
  text("survivalTime="+survivalTime,200,15);
  survivalTime=survivalTime+Math.round(getFrameRate()/50);

}
function spawnBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
    FoodGroup.add(banana)
  
  }
}

function spawnObstacle() {
  if (frameCount % 80 === 0) {
    obstacle = createSprite(620,235,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
    obstacle.velocityX = -3;
    obstacle.lifetime = 205;
    obstacleGroup.add(obstacle)
  
  }
}


