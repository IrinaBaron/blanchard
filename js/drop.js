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