$(function () {
  $('.swiper-galery').click(function () {
    // console.log('Клик!');
    $('.modal').addClass('modal_active');
    $('body').addClass('active')
  })
  $('.swiper-galery').keypress(function () {
    $('.modal').addClass('modal_active');
    $('body').addClass('active')
  })

  $('.close').click(function () {
    $('.modal').removeClass('modal_active');
    $('body').removeClass('active');
  });
// Закрытие модального окна при клике вне его контентной области
  $('.modal').mouseup(function (e) {
    $('body').removeClass('active');
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
    }
  });

});