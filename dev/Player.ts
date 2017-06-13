/// <reference path="shaper.ts"/>

function keyboardinput(event : KeyboardEvent){
    if (event.keyCode == 37 || event.keyCode == 65 ){
        //move left
        player.velocityX = -5;
    }
    if (event.keyCode == 39 || event.keyCode == 68 ){
        //move right
        player.velocityX = 5;
    }
    if (event.keyCode == 38 || event.keyCode == 87 ){
        //move up
        player.velocityY = -5;
    }
    if (event.keyCode == 40 || event.keyCode == 83 ){
        //move down
        player.velocityY = 5;
    }
}

var player: cRectangle = new cRectangle(500, 500, 35, 35, "White", 4, );