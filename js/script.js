const bodyId  = document.getElementById('bodyId');
const welcome = document.getElementById('welcome');
const aboutOne = document.getElementById('about1');
const elems = document.querySelectorAll('.elem');

bodyId.onload = () => { 
  welcome.classList.replace( 'hidden', 'fade-in-welcome' );
  setTimeout(() => { helloLoad() }, 800 );
}

function helloLoad() {
  aboutOne.classList.replace( 'hidden', 'fade-in-hello' );
  bodyId.style.backgroundColor = `hsl(214, 40%, 10%)`;
  init();
}

let windowHeight;

function init() {
  windowHeight = window.innerHeight;
  addEventHandlers();
  checkPosition();
}

function addEventHandlers() {
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
}

function checkPosition() {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (10 + window.scrollY / height / .05).toFixed(0) ;
  elems.forEach(elem =>  {
    const positionFromTop = elem.getBoundingClientRect().top;
    if (positionFromTop / windowHeight <= 0.82) {
      elem.className = elem.className.replace('hidden', 'fade-in-element');
    }
    if (!elem.classList.value.includes('hidden')) {
      bodyId.style.backgroundColor = `hsl(214, 40%, ${scrolled}%)` ;
    }
  });
}


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
  window.addEventListener('keydown', keyStroke);
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none";

// also close modal with escape key
function keyStroke(e) {
  if (e.code === 'Escape') { 
    modal.style.display = "none";
    window.removeEventListener('keydown', keyStroke);
  }
}
