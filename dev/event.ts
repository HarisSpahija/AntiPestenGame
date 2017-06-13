/// <reference path="player.ts"/>
// de scenario hier is dat de event area het gebied x: 250 tot 350 en y: 250 tot 350 omstrekt.
if (player.x - player.width <= 350 && player.x + player.width >= 250 && player.y + player.height >= 250 && player.y + player.height <= 350){
    //trigger event
}