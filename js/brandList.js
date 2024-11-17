

let filterBtn = document.querySelectorAll(".filterBtn");

filterBtn[0].classList.add("activeBrandFilter")
filterBtn.forEach(element => {
    element.addEventListener("click",function(params) {
        let catid = params.currentTarget.getAttribute('data-catid')
        $(".filterBtn").removeClass("activeBrandFilter")
        element.classList.add("activeBrandFilter")
        // var url = `/load-brandMobile.inc?catid=${catid}`;
        // $(".gridContainer").load(url);
        let url=element.getAttribute("data-url")
        loadBrand(url);

    })
});







function scrollTop(params) {
    let brandBoxes = document.querySelectorAll(".brandBox")
   brandBoxes.forEach(element => {
    gsap.to(element,{
        scrollTrigger:{
            trigger:element,
            start:"top 90%",
            end:"bottom bottom",
            // markers:true
        },
        y:"0",
        opacity:1,
    })
   });

}


setTimeout(() => {
    const filterSlider = new Swiper('.filterSlider', {
        // Optional parameters
        spaceBetween: 45,
        freeMode: true,
  
        loop: false,
        slidesPerView: 'auto',
        // And if we need scrollbar
        scrollbar: {
            draggable:true,
          el: '.swiper-scrollbar',
        },
      });
     let url = filterBtn[0].getAttribute("data-url")
     console.log(url);
     
     loadBrand(url);

    }, 20);
    
    
    function loadBrand(url) {
        
        $.ajax({
          url: url,
          method: 'GET',
          success: function(response) {
              // مخفی کردن لودینگ بعد از دریافت پاسخ
              $(".gridContainer").html(response);
              setTimeout(() => {
                  
                scrollTop();
              }, 500);
          },
         
      });
}