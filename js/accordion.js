$(function() {
	$("#accordion").accordion({
  active: false,
  heightStyle: "content",
  icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
  collapsible: false,
  header: 'button',
  // collapsible: false,
	});
  // $( ".selector" ).accordion({
  //   collapsible: true
  // });
  // if(document.onclick)
  // window.onclick = function(event) {
  //   if (!event.target.matches('.info-right')) {
  //     $('.info-right-subtitle').removeClass('ui-accordion-header-active');
  //   }
  // }
});

// $(function($){
// 	$(document).mouseup(function (e){ // событие клика по веб-документу
// 		var div = $("#accordion"); // тут указываем ID элемента
//     let info = $('.ui-accordion-content');
// 		if (!div.is(e.target)) // если клик был не по нашему блоку
//      { // и не по его дочерним элементам
//       $('.info-right-subtitle').removeClass('ui-accordion-header-active');
//           $('.info-right-subtitle').removeClass('ui-state-active'); // скрываем его
         
//           $('.ui-corner-all').removeClass('ui-accordion-content-active');
//           // info.css('display', 'none');
//           $('.info-right-subtitle').addClass('ui-accordion-header-collapsed')
//           // info.hide();
//           //'ui-accordion-header-active', 
// 		} 
//     // else {
//     //   $('.ui-corner-all').css('display', 'block');
//     //   $('.ui-accordion-content').css('display', 'flex');
//     // }
// 	});
// });



if (window.matchMedia("(max-width: 768px)").matches) {

  $(".ui-accordion-content__item").click(function(){

      var elementClick = $(this).attr("href");
      var destination = $('#catalog-autor').offset().top;
      $('body, html').animate({ scrollTop: destination }, 1500);
      
      return false; 
  });
  
} else {

}

if (window.matchMedia("(max-width: 575px)").matches) {
  $(function() {
    $("#accordion2").accordion({
    active: true,
    heightStyle: "content",
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }

    });
  });
}