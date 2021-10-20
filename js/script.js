
$(document).ready(function () {
	$('.header__burger').click(function () {
	  $('.header__burger').toggleClass('open-menu');
	  $('.header__nav').toggleClass('open-menu'); 
	  $('.body').toggleClass('stop-scrolling');
	
	});
});


$(document).ready(function () {
  
	$('.search-form__close').click(function (e) {
		e.preventDefault();
	  $('.search-form').toggleClass('search-active'); 
	  $('.body').toggleClass('stop-scrolling');
		$('.search-form__close').toggleClass('search-active');
	});
  
});

const element = document.querySelector('#selectCustom'); 
const choisec = new Choices(element, {
  searchEnabled: false,
  resetScrollPosition: false,
  appendValue: null,
  
});

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
