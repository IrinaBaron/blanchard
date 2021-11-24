if (window.matchMedia("(min-width: 768px)").matches) {
  
  let jsTriggers = document.getElementsByClassName('js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
    jsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        let id = this.getAttribute('data-tab'),
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
  
    document.querySelector('.js-tab-content.active').classList.remove('active');
    document.querySelector('.js-tab-trigger.active').classList.remove('active');
  
    let tabNavs = document.querySelectorAll(".js-tab-trigger");
    let tabPanes = document.querySelectorAll(".tab-content__item");
    
    for (let i = 0; i < tabNavs.length; i++) {
    
      tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");
    
        for (let j = 0; j < tabNavs.length; j++) {
          let contentAttr = tabPanes[j].getAttribute("data-tab-content");
    
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