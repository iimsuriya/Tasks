var arr=[["./PacMan1.png","./PacMan2.png"],["./PacMan3.png","./PacMan4.png"]]
var position=0;
var focus=0;
var getarray=["./PacMan1.png","./PacMan2.png"];
function run(){
    let img=document.getElementById("pacman");
    focus=(focus+1)%2;
    img.src=arr[direction][focus];
    position=position+20;
    pacman.style.left=position+"px";
}
setInterval(run,200);
var velocityX = 15;
var velocityY = 10;
var positionX = 0;
var positionY = 0;
var maxX = 1200;
var minX = 0;
var direction = 0;
function myFunction() {
    if (direction) {
   positionX=positionX -velocityX;
   pacman.style.left = positionX + "px";
   if(positionX <= minX) direction=0;
    } else {
        positionX=positionX + velocityX;
        pacman.style.left = positionX + "px";
        if(positionX >= maxX) direction=1;
    
    }
}
setInterval(myFunction,50);