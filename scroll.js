window.addEventListener('scroll', function() {
    var mensajeScroll = document.getElementById('mensaje-scroll');
    if (window.scrollY > 100) {
      mensajeScroll.classList.add('show');
    } else {
      mensajeScroll.classList.remove('show');
    }
  });
