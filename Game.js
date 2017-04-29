var canvas = null;
var ctx = null;

function createCanvas(width,height){
    canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx =  canvas.getContext("2d"); 
    document.body.appendChild(canvas);
}

function fill(color){
    ctx.fillStyle = color;
}
function fillRect(x,y,w,h)
{
    ctx.fillRect(x,y,w,h);
}

document.addEventListener('DOMContentLoaded', function() {
    setup();
});