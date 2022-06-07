console.log("david");
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
   /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  console.log("david");
  let backtotop = select('.back_to_top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('activetop')
    } else {
      backtotop.classList.remove('activetop')
    }
  }
  window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}
console.log("david");

// menu

// let menu = document.getElementById("menu");
// let mobilenav = document.getElementsByClassName("nav-list");
// function openmenu(){
//     mobilenav.classList.add('show')
// }
// function closemenu(){
//     mobilenav.classList.toggle("show")
// }


// counts number
let counts = document.querySelectorAll("count1");
console.log(typeof counts);
counts.forEach((count) => {
    count.innerHTML = '0';
    console.log("DAVIS");
    function updatecounter(){
      const target = +count.getAttribute('data-target');
      console.log(target);
      console.log("DAVIS");
      const c = +count.innerHTML;
      const increment = target / 200;

      if (c < target) {
        count.innerHTML = `${math.ceil(c + increment)}`;
        setTimeout(updatecounter, 1);

      }
      else{
        count.innerHTML = target;
      }
      console.log(target);
   };
  updatecounter();
  
});

console.log("davids")