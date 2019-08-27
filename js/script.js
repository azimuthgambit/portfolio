const bodyId  = document.getElementById('bodyId');
const welcome = document.getElementById('welcome');
const aboutOne = document.getElementById('about1');
const elems = document.querySelectorAll('.hidden');

bodyId.onload = () => { welcome.classList.replace( 'hidden', 'fade-in-welcome' ); }

welcome.addEventListener('webkitAnimationEnd', helloLoad);

function helloLoad() {
  aboutOne.classList.replace( 'hidden', 'fade-in-hello' );
  bodyId.style.backgroundColor = `hsl(214, 40%, 10%)`;
  init();
}

// generic debounce function to prevent janky page performance
// skeptical whether this actually improves performance, so disabled for now
// function debounce(func, wait = 5, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

let windowHeight;

function init() {
  windowHeight = window.innerHeight;
  // console.log(`windowHeight: ${windowHeight}`);
  addEventHandlers();
  checkPosition();
}

function addEventHandlers() {
  // window.addEventListener('scroll', debounce(checkPosition));
  // window.addEventListener('resize', debounce(init));
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
}

function checkPosition() {
  console.count('checkposition');
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled =  (10 + winScroll / height / .05).toFixed(0) ;
  for (let i = 2; i < elems.length; i++) {
    const positionFromTop = elems[i].getBoundingClientRect().top;
    if (positionFromTop / windowHeight <= 0.85) {
      elems[i].className = elems[i].className.replace('hidden', 'fade-in-element');
    }
    if (!elems[1].classList.value.includes('hidden')) {
      bodyId.style.backgroundColor = `hsl(214, 40%, ${scrolled}%)` ;
    }
  }
}

// init();

// MODAL IMAGE

const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("linkedin_recs");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
