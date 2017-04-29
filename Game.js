var canvas = null;
var ctx = null;
var framePerSecond = 24;
var width = 0;
var height = 0;

const LEFT_ARROW = 37;
const UP_ARROW    = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;

function createCanvas(w,h){
    canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    width = w;
    height = h;
    ctx =  canvas.getContext("2d"); 
    document.body.appendChild(canvas);
}

function fill(color){
    if(arguments.length === 1)
    {
        if(typeof color === 'number')    
            ctx.fillStyle = 'rgb('+color+','+color+','+color+')';
        else ctx.fillStyle = color;
    }
    else{
            ctx.fillStyle = 'rgb('+arguments[0]+','+arguments[1]+','+arguments[2]+')';
    }
}
function fillRect(x,y,w,h)
{
    ctx.fillRect(x,y,w,h);
}
function rect(x,y,w,h)
{
    ctx.rect(x,y,w,h);
    ctx.stroke();
}
function frameRate(fps){
    framePerSecond = fps;
}
function background(color){    
    ctx.beginPath(); 
    fill(color);
    fillRect(0,0,canvas.width,canvas.height);
}
function floor(val){
    return Math.floor(val);
}
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(e) {
        keyPressed(e.keyCode);
    });
    setup();    

     document.addEventListener('mousedown', function(event) {
        if(canvas === event.target){
            mousePressed();
        }        
    }, false);


    setInterval(draw,parseInt(1000/framePerSecond));
});
function dist(x1,y1,x2,y2)
{
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

function constrain(val,min,max)
{
    if(val < min) return min;
    else if(val>max) return max;
    else return val;
}
function createVector(x,y){
    this.x = x;
    this.y = y;
    this.mult = function(val){
        this.x*= val;
        this.y*= val;
    }
    return {
        x:x,
        y:y,
        mult:mult
    };
}

function random(maxValue){
    return Math.random()*maxValue;
}