position=0;
velocity=20;
var ball=document.getElementById("ball");
function Forward()
    {
        position=position+velocity;
        ball.style.left=position+"px";
    }
    setInterval(Forward,3000);