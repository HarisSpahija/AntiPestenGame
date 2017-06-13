/// <reference path="event.ts"/>
/// <reference path="shaper.ts"/>

var canvas = HTMLCanvasElement;
var ctx = CanvasRenderingContext2D;

function game()
{
    requestAnimationFrame(game);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);

    canvas = <HTMLCanvasElement>document.getElementById('cnvs');

    var shape : ishape;
    for (var i: number = 0; i < shape_array.length; i++)
    {
        shape = shape_array[i];
        shape.draw();
    }
}