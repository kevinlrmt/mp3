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

  
// // // // // PAGE 3, 4, 5 - Interaction Arduino // // // // //
