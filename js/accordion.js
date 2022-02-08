$(function () {
  $("#accordion").accordion({
    active: 0,
    heightStyle: "content",
    collapsible: true,
    header: ".info-right-list__subtitle",
  });

});

if (window.matchMedia("(max-width: 768px)").matches) {
  $(".ui-accordion-content__item").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $('#catalog-autor').offset().top;
    $('body, html').animate({ scrollTop: destination }, 1500);
    return false;
  });
} else {

}

if (window.matchMedia("(max-width: 575px)").matches) {
  $(function () {
    $("#accordion2").accordion({
      active: true,
      heightStyle: "content",
      icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }

    });
  });
}