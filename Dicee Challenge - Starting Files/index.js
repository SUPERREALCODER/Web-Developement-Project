var randomVar1 = Math.floor(6*(Math.random())+1);

if(randomVar1===1)
document.querySelector(".img1").setAttribute("src","./images/dice1.png");
else if(randomVar1===2)
document.querySelector(".img1").setAttribute("src","./images/dice2.png");
else if(randomVar1===3)
document.querySelector(".img1").setAttribute("src","./images/dice3.png");
else if(randomVar1===4)
document.querySelector(".img1").setAttribute("src","./images/dice4.png");
else if(randomVar1===5)
document.querySelector(".img1").setAttribute("src","./images/dice5.png");
else
document.querySelector(".img1").setAttribute("src","./images/dice6.png");


var randomVar2 = Math.floor(6*(Math.random())+1);
if(randomVar2===1)
document.querySelector(".img2").setAttribute("src","./images/dice1.png");
else if(randomVar2===2)
document.querySelector(".img2").setAttribute("src","./images/dice2.png");
else if(randomVar2===3)
document.querySelector(".img2").setAttribute("src","./images/dice3.png");
else if(randomVar2===4)
document.querySelector(".img2").setAttribute("src","./images/dice4.png");
else if(randomVar2===5)
document.querySelector(".img2").setAttribute("src","./images/dice5.png");
else
document.querySelector(".img2").setAttribute("src","./images/dice6.png");

if(randomVar1===randomVar2)
document.querySelector("h1").innerHTML="Draw";
else if(randomVar1>randomVar2)
document.querySelector("h1").innerHTML="Player 1 WINS";
else if(randomVar1<randomVar2)
document.querySelector("h1").innerHTML="Player 2 Wins";
