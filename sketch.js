var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;
var scoreboard
var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  scoreboard.createElement("h1")
  heading.createElement("h1")

  
  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup(); 

  
  
}

function draw() {
  background("#BDA297");
  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)


  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  if(gameState === 1){
    gun.y=mouseY  

    drawSprites();
  }
}
  function blueBubble() {
    bluebubble = createSprite(800,random(20,775),39,39);
    bluebubble.addImage(blueBubbleImg);
    bluebubble.scale = 0.1;
    bluebubble.velocityX = -7.5;
    bluebubble.lifetime = 385;
    blueBubbleGroup.add(bluebubble);

  }
     
  function redBubble(){
    redbubble = createSprite(800,random(20,775),39,39);
    redbubble.addImage(redBubbleImg);
    redbubble.scale = 0.1;
    redbubble.velocityX = -7.5;
    redbubble.lifetime = 385;
    redBubbleGroup.add(redbubble);
  }


  function ShootBullet() {
      bullet= createSprite(151, width/2, 45,20)
      bullet.y = gun.y-20
      bullet.addImage(bulletImg)
      bullet.scale = 0.12
      bullet.velocityX = 7.5
      bulletGroup.add(bullet)
  }

  function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score = score+1;
    }

    blast= createSprite(bullet.x + 60, bullet.y, 49, 49);
    blast.addImage(blastImg)
    blast.scale = 0.3
    blast.life = 19
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
  life = life-1;
  bubbleGroup.destroyEach();

  if (life === 0) {
    gameState=2 
    swal({
      title: `Game Over`,
      text: "Oops you lost the game....!!!",
      text: "Your Score is " + score,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing The Game"
    });
  }

}