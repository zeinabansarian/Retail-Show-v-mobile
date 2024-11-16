let mobileCont = document.querySelector('.Menu_Bar')
let OP_Btn = document.querySelector('.Toggle')
let CL_Btn = document.querySelector('.Circle')
let searchIconH = document.querySelector('.headerSearchIcon')
let searchPop = document.querySelector('.SearchBox-popup')
let closeSearchH = document.querySelector('.SearchBox-popup .CloseSearch')
searchIconH.addEventListener('click',()=>{
    searchPop.classList.add('OpenSearch')
})
closeSearchH.addEventListener('click',()=>{
    searchPop.classList.remove('OpenSearch')
})

let flag = false;
OP_Btn.addEventListener('click',()=>{
    flag = !flag
    switchScroll();
    mobileCont.classList.add('OP')
    gsap.to('.Mobile_Header .Is_top',{
        y:'0',
        ease:'none',
        duration:.5,
    })
    gsap.to('.Mobile_Header .Is_bottom',{
        y:'0',
        ease:'none',
        duration:.5,
    })
    gsap.to('.Mobile_Header .Menu_Link',{
        x:'0',
        opacity:1,
        ease:'none',
        duration:.4,
        delay:1,
        stagger:.1
    })
    gsap.to('.Mobile_Header .Row',{
        x:'0',
        opacity:1,
        ease:'none',
        duration:.4,
        delay:1,
        stagger:.1
    })
    gsap.to('.Mobile_Header .Line',{
        width:'100%',
        opacity:1,
        ease:'none',
        duration:.4,
        delay:1,
    })
    gsap.to('.Mobile_Header .Circle',{
        scale:1,
        opacity:1,
        ease:'none',
        duration:.4,
        delay:1,
      })
})
gsap.set('.Mobile_Header .Is_top',{
    y:'-100%',
})
gsap.set('.Mobile_Header .Is_bottom',{
    y:'+100%',
})
gsap.set('.Mobile_Header .Menu_Link',{
    x:'-200%',
    opacity:0
})
gsap.set('.Mobile_Header .Row',{
    x:'-200%',
    opacity:0
})
gsap.set('.Mobile_Header .Line',{
  width:0,
})
gsap.set('.Mobile_Header .Circle',{
   scale:0,
   opacity:0,
  })
CL_Btn.addEventListener('click',()=>{
    flag = !flag
    switchScroll();
    gsap.to('.Mobile_Header .Menu_Link',{
        x:'-200%',
        opacity:0,
        ease:'none',
        duration:.2,
        stagger:.1
    })
    gsap.to('.Mobile_Header .Row',{
        x:'-200%',
        opacity:0,
        ease:'none',
        duration:.2,
        stagger:.1
    })
    gsap.to('.Mobile_Header .Line',{
        width:0,
        opacity:0,
        ease:'none',
        duration:.4,
        delay:1,
      })
      gsap.to('.Mobile_Header .Circle',{
        scale:0,
        opacity:0,
        ease:'none',
        duration:.4,
        delay:1,
      })
    gsap.to('.Mobile_Header .Is_top',{
        y:'-100%',
        ease:'none',
        duration:.5,
        delay:.8
    })
    gsap.to('.Mobile_Header .Is_bottom',{
        y:'+100%',
        ease:'none',
        duration:.5,
        delay:.8
    })

    setTimeout(()=>{
    mobileCont.classList.remove('OP')
    },1500)
})
