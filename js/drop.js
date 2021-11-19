let myFunction = document.querySelector('#myFunction');
let headerLinks = document.querySelectorAll('.menu-item__click');
let linksDrop = document.querySelectorAll('.menu-link__drop');
let dropdowns = document.getElementsByClassName("menu-item__link");

window.onclick = function (event) {
  if (!event.target.matches('.menu-item__click')) {
      
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
for (let headerLink of headerLinks) {
  headerLink.addEventListener('click', function () {
    
    dropdowns.forEach(dropdown => {
      if (dropdown !== this.nextElementSibling) {
        dropdown.classList.remove('show');
      }
    });
    
    this.nextElementSibling.classList.toggle('show');
   
  })
}

