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
    }, 1300);
}

  