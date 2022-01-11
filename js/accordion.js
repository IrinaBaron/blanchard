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