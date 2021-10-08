jQuery(document).ready(function($){
  if (window.matchMedia("(max-width: 575px)").matches) {
    var swiper5 = new Swiper('.swiper5', {
      speed: 600,
      // slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 100,
      pagination: {
          el: '.swiper-pagination5',
          type: 'bullets',
          clickable: true,
        }
      
    });
  }

  if (window.matchMedia("(min-width: 1024px)").matches) {

    if ($('.events__list').find('.events__item').length > 3){
      $('.events__btn').click(function(){
      $('.events__item:nth-child(n+4)').slideToggle('');
      $(this).toggleClass('opnd_g');
      if ($(this).hasClass('opnd_g')){
        $('.events__btn').hide();}
      else {$(this).html('Все события');}
      });
    } 
    else {
      $('.events__btn').hide();
    };
  } else  if (window.matchMedia("(min-width: 576px)").matches){

    if ($('.events__list').find('.events__item').length = 2){
      $('.events__btn').click(function(){
      $('.events__item:nth-child(n+3)').slideToggle('');
      $(this).toggleClass('opnd_g');
      if ($(this).hasClass('opnd_g')){
        $('.events__btn').hide();}
      else {$(this).html('Все события');}
      });
    } 
    else {
      $('.events__btn').hide();
    };
    
  };   
  
});