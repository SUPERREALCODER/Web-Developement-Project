var gamePattern = [];
var userClickedPattern = [];
var level = 0; 
var k = 0;
//newsequence
function nextSequence(){
  k = 0;
    var randomNumber = Math.floor(4*(Math.random()));
    var buttonColors = ["red", "blue","green", "yellow"];
    var randomChoosencolor = buttonColors[randomNumber];
    gamePattern.push(randomChoosencolor);
    playSound(randomChoosencolor);

    $("#"+randomChoosencolor).fadeOut(100).fadeIn(100);
    level++;
    if(level>0){
      
      $("h1").text("LEVEL "+level);
    }
    
}
//clickevent
if(k === 0){$(".btn").click(function(event){
  var l = gamePattern.length;
  var userChosenColor = event.target.id;
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  var l = userClickedPattern.length;
  checking(userClickedPattern,l);

  
});}

//sound
function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();

}
//animation
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(function(){ 
  $("#"+currentColor).removeClass("pressed") },100);
}

$(document).keydown(function(){nextSequence()});

//checking
function checking(newCheck,m){
  if(newCheck[m-1] != gamePattern[m-1])
  {
    playSound("wrong");
    gamePattern = [];
  
    level=0;
    $("h1").html("PRESS A KEY TO START AGAIN");
    userClickedPattern = [];
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    k = 1;
    

  }
  else{
    if(m === level) 
    {
      setTimeout(nextSequence(),2000);
    userClickedPattern = [];
    } 
  }

}






