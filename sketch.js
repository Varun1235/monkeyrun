var monkey, monkeyRunning;
var banana, bananaImg;
var bananaGroup;
var score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
    monkeyRunning = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
    bananaImg = loadImage("banana.png");
}

function setup() {
    createCanvas(600, 200);

    monkey = createSprite(50,180,10,10);
    monkey.addAnimation("running", monkeyRunning);
    monkey.scale = 0.5;

  ground = createSprite(200,395,600,20);
  invisibleGround = createSprite(200,400,600,10);
  invisibleGround.visible = false;

  ground.x = ground.width/2
  ground.velocityX = -3;

  bananaGroup = new Group();
    

}

function draw() {
    background(180);

    if (ground.x<0) {
        ground.x = ground.width/2;
    }
    
    if(keyDown("space") && monkey.y >= 350){
        monkey.velocityY = -13 ;
      }

      spawnBananas();

      if (bananaGroup.isTouching(monkey)) {
        score = score + 1;
      }
      monkey.velocityY = monkey.velocityY + 0.8;

      monkey.collide(invisibleGround);

    }


      






//function spawnRocks() {
 //   if (frameCount % 170 === 0) {
 //       var rock = createSprite(400,380,10,10);
 //       rock.setAnimation("Stone");
 //       rock.scale = 0.11;
   //     rock.velocityX = -3;
  //      rock.lifetime = 134;
  //       rockGroup.add(rock);
         
   // if (gameState === END) {
   //   rock.velocityX = 0;
   // }
  //  }
  
   
 // }
  
  function spawnBananas() {
    if (frameCount % 210 === 0) {
      var banana = createSprite(400, 320,10,10);
      banana.addImage("Banana",bananaImg);
      banana.scale = 0.04;
      banana.velocityX = -3;
      banana.lifetime = 134;
      bananaGroup.add(banana);
     
    if (gameState === END) {
      banana.velocityX = 0;
    }  
    }
    
  }