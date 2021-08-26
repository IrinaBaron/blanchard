
$(document).ready(function () {
	$('.header__burger').click(function () {
	  $('.header__burger').toggleClass('open-menu');
	  $('.header__nav').toggleClass('open-menu'); 
	  $('.body').toggleClass('stop-scrolling');
	
	});
});


// let openClose = document.querySelector('.search-form__close');
// let searchForm = document.querySelector('.seacrh-form');

// searchForm.addEventListener('click', function () {
//   searchForm.classList.add('search-active');
//   openClose.classList.add('search-active')
// })


$(document).ready(function () {
  
	$('.search-form__close').click(function () {
	  $('.search-form').toggleClass('search-active'); 
	  $('.body').toggleClass('stop-scrolling');
    $('.search-form__close').toggleClass('search-active');
	});
  
});

let myFunction = document.querySelector('#myFunction');
let headerLinks = document.querySelectorAll('.menu-item__click');
let linksDrop = document.querySelectorAll('.menu-link__drop')

for(let headerLink of headerLinks) {
  headerLink.addEventListener('click', function () {
  //   document.getElementById("myDrop1").classList.toggle("show");
  // let elem;
  //   document.getElementById('myDrop2').classList.remove('show');
  //   document.getElementById('myDrop3').classList.remove('show');
  //   document.getElementById('myDrop4').classList.remove('show');
  //   document.getElementById('myDrop5').classList.remove('show');
    // for(let i = 0; i < linksDrop.length; i++) {
    //   elem = linksDrop[i];
    //   console.log(elem)
    //   if(!elem.classList.contains('show')) {
    //     elem.classList.add('show');
    //   } else {
    //     elem.classList.remove('show');
    //   }
      
    // }

    // for(let linkDrop of linksDrop) {
    //   let elem = document.getElementsByClassName('show');
    //   let contains = elem.classList.contains('show');
    //   linkDrop.classList.toggle('show');
    //   if(!linkDrop.classList.contains('show')) {
    //     linkDrop.classList.add('show');
    //   } else {
    //     linkDrop.classList.remove('show');
    //   }
    // }
  })
}

myFunction.addEventListener('click', function () {
  document.getElementById("myDrop1").classList.toggle("show");
  
  document.getElementById('myDrop2').classList.remove('show');
  document.getElementById('myDrop3').classList.remove('show');
  document.getElementById('myDrop4').classList.remove('show');
  document.getElementById('myDrop5').classList.remove('show');
})

window.onclick = function(event) {
  
  if (!event.target.matches('.menu-item__click')) {
    var dropdowns = document.getElementsByClassName("drop-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }  
};

document.querySelector('#my_Drop2').addEventListener('click', function () {
  document.getElementById("myDrop2").classList.toggle("show");

  document.getElementById('myDrop1').classList.remove('show');
  document.getElementById('myDrop3').classList.remove('show');
  document.getElementById('myDrop4').classList.remove('show');
  document.getElementById('myDrop5').classList.remove('show');
});

document.querySelector('#my_Drop3').addEventListener('click', function () {
  document.getElementById("myDrop3").classList.toggle("show");
  
  document.getElementById('myDrop2').classList.remove('show');
  document.getElementById('myDrop1').classList.remove('show');
  document.getElementById('myDrop4').classList.remove('show');
  document.getElementById('myDrop5').classList.remove('show');
})

document.querySelector('#my_Drop4').addEventListener('click', function () {
  document.getElementById("myDrop4").classList.toggle("show");

  document.getElementById('myDrop2').classList.remove('show');
  document.getElementById('myDrop3').classList.remove('show');
  document.getElementById('myDrop1').classList.remove('show');
  document.getElementById('myDrop5').classList.remove('show');
})

document.querySelector('#my_Drop5').addEventListener('click', function () {
  document.getElementById("myDrop5").classList.toggle("show");

  document.getElementById('myDrop2').classList.remove('show');
  document.getElementById('myDrop3').classList.remove('show');
  document.getElementById('myDrop4').classList.remove('show');
  document.getElementById('myDrop1').classList.remove('show');
})



var swiper1 = new Swiper('.swiper2', {
	speed: 600,
	grid: {
    // rows: 2,
    fill: 'row',
  },
	pagination: {
		el: '.swiper-pagination1',
		type: 'fraction',
		clickable: true,
		// renderBullet: function (index, className) {
			// var appendNumber = 4;
      // var prependNumber = 1;
      // document
      //   .querySelector(".prepend-2-slides")
      //   .addEventListener("click", function (e) {
      //     e.preventDefault();
      //     swiper.prependSlide([
      //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      //     ]);
      //   });
      // return '<span class="' + className + '">' + (index + 1) + '</span>';
		// },
    hideOnClick: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
		1366: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
	  },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  },
});

// Get the modal

$(function () {
  $('.swiper-galery').click(function () {
    // console.log('Клик!');
    $('.modal').addClass('modal_active');
  })

  $('.close').click(function () {
    $('.modal').removeClass('modal_active');
  });
// Закрытие модального окна при клике вне его контентной области
  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
    }
  });

});


$(function() {
	$("#accordion").accordion({
  active: true,
  heightStyle: "content",
  icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});
  
});


if (window.matchMedia("(min-width: 768px)").matches) {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
    jsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');

        activeTrigger.classList.remove('active'); // 1
        trigger.classList.add('active'); // 2

        activeContent.classList.remove('active'); // 3
        content.classList.add('active'); // 4
      });
  });
} else {
  jsTriggers = document.querySelector('.js-tab-content.active'),
    $('.js-tab-content').removeClass('active');
  
    var tabNavs = document.querySelectorAll(".js-tab-trigger");
    var tabPanes = document.querySelectorAll(".tab-content__item");
    
    for (var i = 0; i < tabNavs.length; i++) {
    
      tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        var activeTabAttr = e.target.getAttribute("data-tab");
    
        for (var j = 0; j < tabNavs.length; j++) {
          var contentAttr = tabPanes[j].getAttribute("data-tab-content");
    
          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active"); 
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        };
      });
    }
}

if (window.matchMedia("(max-width: 768px)").matches) {

  $(".ui-accordion-content__item").click(function(){

      var elementClick = $(this).attr("href");
      var destination = $('#catalog-autor').offset().top;
      $('body, html').animate({ scrollTop: destination }, 1500);
      
      return false; 
  });
  
} else {

}

// let autor = document.querySelectorAll('.ui-accordion-content__link');

// if (document.documentElement.clientWidth <= 850) {
//   autor.forEach(function (tabs) {
//     tabs.addEventListener('click', () => {
//       let activeCatalog = document.querySelector('#catalog-autor');
//       activeCatalog.scrollIntoView({
//         block: "start",
//         behavior: "smooth"
//       });
//     });
//   });
// };
  

if (window.matchMedia("(min-width: 768px)").matches) {
  var swiper2 = new Swiper('.swiper3', {
    speed: 600,
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 49,
      },
      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 49,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });
} else {

}


jQuery(document).ready(function($){
  if (window.matchMedia("(max-width: 575px)").matches) {
    var swiper5 = new Swiper('.swiper5', {
      speed: 600,
      // slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 300,
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

var swiper4 = new Swiper('.swiper4', {
	speed: 600,
	slidesPerGroup: 3,
	slidesPerView: 3,
	spaceBetween: 50,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        // spaceBetween: 80,
      },
      500: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        // spaceBetween: 100,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1366: {
        slidesPerGroup: 3,
	      slidesPerView: 3,
      }
    },
});

var selector = document.querySelectorAll("input[type=tel]");

var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);



$(document).on('keypress', '.input-text', function (event) {
  var regex = new RegExp("^[А-Яа-яЁё ]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
      event.preventDefault();
      return false;
  }
});

new JustValidate('.form', {
	rules: {
		name: {
			required: true,
			minLength: 2,
			maxLength: 35,
      number: false,
      regex: true,
      // accept: ""[а-яА-ЯёЁa-zA-Z]+",",
		},
		tel: {
			required: true,
			function: (name, value) => {
				const phone = selector[0].inputmask.unmaskedvalue()
				return Number(phone) && phone.length === 10
			}
		}
	},
	messages: {
		name: 'Недопустимый формат',
		tel: 'Укажите ваш телефон',
	},
  submitHandler: function(form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          document.querySelector('.form__btn').addEventListener('click', () => {
            new GraphModal().open('second');
          });
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    form.reset();
  }
	
});



if (window.matchMedia("(max-width: 575px)").matches) {
  $(function() {
    $("#accordion2").accordion({
    active: true,
    heightStyle: "content",
    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }

    });
  });
}

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367,37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15

  });
  var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'image/geoteg.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });
// Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

};

  