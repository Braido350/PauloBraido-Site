// Conteúdo do script.js

// jQuery (coloque o código jQuery aqui, pode ser obtido do site oficial ou de um CDN)
document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.min.js"></script>');

// Slick Carousel (coloque o código do Slick Carousel aqui, pode ser obtido do site oficial ou de um CDN)
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');

// Seu código personalizado
$(document).ready(function(){
    $('.motos').slick({
        dots: true, // Adiciona indicadores de pontos
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
