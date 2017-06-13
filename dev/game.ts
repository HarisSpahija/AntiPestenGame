/// <reference path="event.ts"/>
/// <reference path="shaper.ts"/>

var canvas = HTMLCanvasElement;
var ctx = CanvasRenderingContext2D;

function game()
{
    if (Collision.RectangleRectangle(player, collision)) {
        //trigger event
    }
    else {
        //don't trigger event
    }

    document.addEventListener('keydown', keyboardinput);


    requestAnimationFrame(game);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    ctx = canvas.getContext("2d");

    var shape : ishape;
    for (var i: number = 0; i < shape_array.length; i++)
    {
        shape = shape_array[i];
        shape.draw();
    }
}