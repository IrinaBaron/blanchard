document.addEventListener('DOMContentLoaded', event => {
  let myFunction = document.querySelector('#myFunction');
  let headerLinks = document.querySelectorAll('.menu-item__click');
  let linksItems = document.querySelectorAll('.header-menu__item');
  let dropdowns = document.getElementsByClassName("menu-item__link");

  window.onclick = function (event) {

    if (!event.target.matches('.header-menu__item .menu-item__click')) {

      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  for (let headerLink of headerLinks) {
    headerLink.addEventListener('click', clickOn);

  }

  // for (let linkItem of linksItems) {
  //   linkItem.addEventListener('keypress', clickKey);
  // }

  function clickOn(event) {
    dropdowns.forEach(dropdown => {
      if (dropdown !== this.nextElementSibling) {
        dropdown.classList.remove('show');
      }
    });
    this.nextElementSibling.classList.toggle('show');
  }

  // window
  // function clickKey(e) {
    
    
  //   if(e.key == 'Enter') {
      
  //     clickOn;
      
  //   }
  // }


})
