var postion = [0,0];
var snake = 15;
var snake1 = 23;
var fall = 5;
var fall1 = 16;
var ladder = 8;
var ladder1 = 19;
var advance = 15;
var advance1 = 24;
function Roll(player){
   x = document.getElementById("ar");
   rolldice = parseInt(Math.random() * 6) + 1;
   postion[player-1] += rolldice;
    var land = "";
    switch(postion[player-1]){
      case snake:
   postion[player-1] = fall;
    land = ", You land at position 15 , go back to position ";
    case ladder:
   postion[player-1] = advance;
    land= ",You land on a position 8, advance to postion ";
     break;
    case snake1:
  postion[player-1] = fall1;
    land = ", You land at position 23, go back to position ";
      break;
         case ladder1:
    postion[player-1] = advance1;
      land = ", You land on position 19, advance to postion ";
         break;
          default :
      land= ",jump to position ";
           break;
         }
  if(postion[player-1] > 25)
      {
         x.innerHTML += "Player " + player + " rolls...Die: " + rolldice + " congrats you WON!!!\n..Game Over..";
             inps = document.getElementById("btn1");
             inps.disabled = true;
             inps = document.getElementById("btn2");
             inps.disabled = true; }
  else
         x.innerHTML += "Player "+ player + " rolls...Die: " + rolldice +  land + postion[player-1] + "\n"; }
