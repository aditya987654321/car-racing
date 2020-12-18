var bg = createSprite(200,200,400,400);
var player1 = createSprite(85,350,10,10);
var player2 = createSprite(310,350,10,10);
var count = 0;
var count1 = 0;
var boost = randomNumber(1,1.7);

function draw() {
  background("white");
  bg.setAnimation("bg1");
  player1.setAnimation("player1");
  player2.setAnimation("player2");
  
  
  player1.scale = 0.3;
  player2.scale = 0.3;
  bg.scale = 0.5;
  
  
  
  
  //player1
  
  if(keyDown("w")){
    player1.velocityY= -0.5;
  }
  if(keyDown("a")){
    player1.velocityX = -0.5;
    
  }
  if(keyDown("s")){
    player1.velocityY = 0.5;
    
  }
  if(keyDown("d")){
    player1.velocityX = 0.5;
    
  }
  if(keyWentUp("w")){
    player1.velocityY = 0;
  }
  if(keyWentUp("a")){
    player1.velocityX = 0;
  }
  if(keyWentUp("s")){
    player1.velocityY = 0;
  }
  if(keyWentUp("d")){
    player1.velocityX = 0;
  }
  
  
  //player2
  
  if(keyDown("up")){
    player2.velocityY= -0.5;
  }
  if(keyDown("left")){
    player2.velocityX = -0.5;
    
  }
  if(keyDown("down")){
    player2.velocityY = 0.5;
    
  }
  if(keyDown("right")){
    player2.velocityX = 0.5;
    
  }
  if(keyWentUp("up")){
    player2.velocityY = 0;
  }
  if(keyWentUp("left")){
    player2.velocityX = 0;
  }
  if(keyWentUp("down")){
    player2.velocityY = 0;
  }
  if(keyWentUp("right")){
    player2.velocityX = 0;
  }
  
  if(keyDown("e") && keyDown("w")&& count<50){
    player1.velocityY = player1.velocityY-boost;
    
  }
  
  if (keyDown("e")){
    count = count+1;
  }
  if(keyDown("l") && keyDown("up")&& count1<50){
    player2.velocityY = player2.velocityY-boost;
    
  }
  
  if (keyDown("l")){
    count1 = count1+1;
  }
  
  drawSprites();
  if(player1.y <= 30){
    text("blue car has won",288,12);
    
    if(player1.y == 30){
      playSound("sound://category_achievements/peaceful_win_1.mp3");
      player1.y = 29;
    }
  }
  else if(player2.y <= 30){
    text("green car has won",8,12);
    if(player2.y == 30){
      playSound("sound://category_achievements/peaceful_win_1.mp3");
      player2.y = 29;
    }
  }
  
}





