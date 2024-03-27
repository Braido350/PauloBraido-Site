(function(window, document){
  function initialize(){
  document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.4.min.js"></script>');
  document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>');
  };

  $(document).ready(function(){
      $('.motos').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
      });
  });
  initialize();
  
}(window, document))
