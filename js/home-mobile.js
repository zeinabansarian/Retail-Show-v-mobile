const slider = document.getElementById("js-cta-slider");
const sliderCounter = document.getElementById("js-cta-slider-counter");
const sliderNext = document.getElementById("js-cta-slider-next");
const sliderPrevious = document.getElementById("js-cta-slider-previous");

const interleaveOffset = 0.75;

const swiper = new Swiper(slider, {
  loop: false,
  // direction: "vertical",
  autoplay:true,
  speed: 1000,
  allowTouchMove:false,
  watchSlidesProgress: true,
  mousewheelControl: false,
  mousewheel: false,
    pagination: {
        el: '.pagination1',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if (total>10) {
                if (current>9) {
                    
                    return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 
                }
                else{

                    return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">${(total)}</span>`; 

                }
            }
            else{
                if (current>9) {

                    return `<span class="current">${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
                }
                else{

                    return `<span class="current">0${current}</span>` + '<i>/</i>' + `<span class="total">0${(total)}</span>`; 
    
                }

            }
          
        }
      },
    scrollbar: {
		el: ".swiper-progressbar",
      },
      navigation: {
        nextEl: '.nextSlide',
        prevEl: '.prevSlide',
      },
  on: {
    progress: function() {
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.width * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        //TweenMax.set(swiper.slides[i], {
          //skewY: `${innerTranslate*0.025}deg`,
        //});
        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          x: innerTranslate,
        });
      }
    },
    touchStart: function() {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    }
  }
});



let sections = document.querySelectorAll('section')
sections.forEach(s=>{
  gsap.to(s.querySelectorAll("p"),{
    scrollTrigger:{
        trigger:s,
        start:"top 90%",
        end:"bottom bottom",
    },
    y:"0",
    opacity:1
})
})
let titleMain = document.querySelectorAll(".Title-main")
titleMain.forEach(element => {
 gsap.to(element.querySelector("h1,h2,h4,p"),{
     scrollTrigger:{
         trigger:element.querySelector("h1,h2,h4,p"),
         start:"top 90%",
         end:"bottom bottom",
     },
     y:"0",
     opacity:1
 })
 gsap.to(element.querySelector(".line"),{
     scrollTrigger:{
         trigger:element.querySelector(".line"),
         start:"top 90%",
         end:"bottom bottom",
     },
     width:'60px',
 })
});

let scrollTop = document.querySelectorAll(".scrollTop")
scrollTop.forEach(element => {
 gsap.from(element,{
     scrollTrigger:{
         trigger:element,
         start:"top 90%",
         end:"bottom bottom",
         // markers:true
     },
     y:"20vh",
     opacity:0,
 })
});


const lastCourse = new Swiper('.lastCourse', {
    // Optional parameters
   speed:1000,
   spaceBetween: 50,
   slidesPerView:1.2,
 
  });
const supporter = new Swiper('.supporter', {
    // Optional parameters
   speed:1000,
   spaceBetween: 51,
   slidesPerView:1.5,
   centeredSlides:true,
   freeMode:true,
   loop:true,
   autoplay:{
    delay:3000,
   }
  });

  let slidders=document.querySelectorAll(".section5 .swiper-slide")

  slidders.forEach((element,i) => {
    let number = element.querySelector(".number span")
    let newI = i+1
    if (newI>9) {
        number.innerHTML=newI
    }
    else{
        number.innerHTML=`0${newI}`

    }
  });
  let videoC = document.querySelector('.inVideo')
  let overlays = document.querySelectorAll('.inVideo .overlay')
  videoC.addEventListener('click',(e)=>{
  overlays.forEach(o=>{
      o.classList.add('hide')
      e.stopPropagation()
      const player = new Plyr('#player');
  })
  })