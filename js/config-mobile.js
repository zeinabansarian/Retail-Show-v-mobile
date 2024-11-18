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
const lenis =  new Lenis({
    smoothWheel: true,
    wheelMultiplier:2
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
let flag = false;
OP_Btn.addEventListener('click',()=>{
    flag = !flag
    switchScroll();
    mobileCont.classList.add('OP')
    lenis.stop()
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
    lenis.start()
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

let wrapp = document.querySelector('#searchContainer')
scrollbar = Scrollbar.init(wrapp);

(function () {
  'use strict';

  var controls = {
    input: document.querySelector('[search="input"]'),
    items: document.querySelectorAll('[search="item"]'),
    noResults: document.querySelector('[search="noResults"]'),
    clear: document.querySelector('[search="clear"]'),
    indexedItems: [],
    hasControls: function() {
      return this.input != undefined && this.items != undefined
    }
  }
  controls.noResults.setAttribute('hidden', '');
  // checks for required search components
  if (!controls.hasControls()) return;

  // shows/hides no results message
  function toggleNoResultsMessage(searchTerm) {
    // checks if any items are open
    var hasResults = Array.prototype.filter.call(controls.items, function (item) {
      return item.hasAttribute('open');
    })

    if (hasResults.length && searchTerm.length > 1) {
      // hide no results message if items are open
      controls.noResults.setAttribute('hidden', '');
    } else if (searchTerm.length > 1) {
      // show no results message
      controls.noResults.removeAttribute('hidden');
      Array.prototype.forEach.call(controls.items, function (item) {
        item.setAttribute('hidden', '')
      })
      return;
    } else {
      // hide no results message
      controls.noResults.setAttribute('hidden', '');
    }
  }

  // searches and highlights
  function searchAndHighlight() {
    Array.prototype.forEach.call(controls.items, function (item) {
      item.innerHTML = item.innerHTML.replace(/<mark>([^<]+)<\/mark>/gi, '$1');
    });

    var searchTerm = event.target.value.trim().toLowerCase();

    if (searchTerm.length > 1) {
      controls.indexedItems.forEach(function (item, i) {
        if (controls.indexedItems[i].indexOf(searchTerm) != -1) {
          controls.items[i].setAttribute('open', true);
          controls.items[i].removeAttribute('hidden'); // removes hidden attribute when deleteing
          controls.items[i].innerHTML = controls.items[i].innerHTML.replace(new RegExp(searchTerm + '(?!([^<]+)?>)', 'gi'), '<mark>$&</mark>');
        } else {
          controls.items[i].removeAttribute('open');
          controls.items[i].setAttribute('hidden', '');
        }
      });
      controls.clear.removeAttribute('hidden');
    } else {
      Array.prototype.forEach.call(controls.items, function (item) {
        item.removeAttribute('open');
        item.removeAttribute('hidden');
      });
      controls.clear.setAttribute('hidden', '');
    }

    toggleNoResultsMessage(searchTerm);

  }


  // sanitize search result matches
  Array.prototype.forEach.call(controls.items, function (item) {
    controls.indexedItems.push(item.textContent.replace(/\s{2,}/g, ' ').toLowerCase());
  });
  
  controls.input.addEventListener('keydown', function(event) {
    // prevent submit on enter
    if (event.keyCode === 13) 
    {
      event.preventDefault();
      return false;
    }
  })

  // input keyup
  controls.input.addEventListener('keyup', function(event) {
    searchAndHighlight();
  });

  // clear button click
  controls.clear.addEventListener('click', function() {
    event.target.setAttribute('hidden', '');
    toggleNoResultsMessage('');
    searchAndHighlight();
    controls.input.focus();
  })

})();
