let titleMain = document.querySelectorAll('.Title-main')
titleMain.forEach(t=>{
    gsap.to(t.querySelector('h1'),{
        y:0,
        scrollTrigger:{
          trigger:t,
          start:'top 90%',
          end:'bottom bottom'
        }
      })
      gsap.to(t.querySelector('h2'),{
        y:0,
        scrollTrigger:{
          trigger:t,
          start:'top 90%',
          end:'bottom bottom'
        }
      })
    gsap.to(t.querySelector('.line'),{
      height:'60px',
      scrollTrigger:{
        trigger:t,
        start:'top 90%',
        end:'bottom bottom'
      }
    })
})
gsap.to('.Boss-Container h1',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Boss-Container ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('.Boss-Container h2',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Boss-Container ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('.Boss-Container .RightSec p',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.Boss-Container ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })

  gsap.to('.section-3 h2',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.section-3 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  gsap.to('.section-3 p',{
    y:0,
    stagger:'.2',
    scrollTrigger:{
      trigger:'.section-3 ',
      start:'top 90%',
      end:'bottom bottom'
    }
  })
  let videoC = document.querySelector('.inVideo')
let overlays = document.querySelectorAll('.overlay')
videoC.addEventListener('click',(e)=>{
overlays.forEach(o=>{
    o.classList.add('hide')
    e.stopPropagation()
    const player = new Plyr('#player');
})
})