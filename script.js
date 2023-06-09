// // // // // PAGE 1 // // // // //
// // // // // PARALLAX CONTAINER 4 // // // // //
window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.container4');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; /* ajustez le coefficient pour modifier l'effet de parallaxe */
  });

// // // // // CURSEUR // // // // //
document.addEventListener('DOMContentLoaded', function() {
  let mousePointer = document.querySelector('#mouse-pointer');
  let pointerX = 0;
  let pointerY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let speed = 0.2;
  
  function movePointer() {
    pointerX += (mouseX - pointerX) * speed;
    pointerY += (mouseY - pointerY) * speed;
    
    mousePointer.style.left = pointerX - mousePointer.offsetWidth / 1 + 'px';
    mousePointer.style.top = pointerY - mousePointer.offsetHeight / 1 + 'px';
    
    requestAnimationFrame(movePointer);
  }
  
  movePointer();
  
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
});

// // // // // TEXTE BOUGE DEFILLEMENT // // // // //

  
// // // // // PAGE 2 // // // // //
// // // // // CHARGEMENT // // // // //
if (window.location.href.indexOf("chargement.html") > -1) {
    setTimeout(function() {
      window.location.href = "irinaenligne.html";
    }, 10000);
}


// // // // // PAGE 3 - Labyrinthe // // // // //
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);