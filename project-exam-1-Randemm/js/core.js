function check() {
  document.getElementById("hambu").classList.toggle("hidden");
}

function addHeader() {
  document.getElementsByTagName(
    "header"
  )[0].innerHTML = `<div class="topsection">
  <div class="hamburger"><i onclick="check()" class="material-icons">menu</i></div>
  <a class="logolink" href="index.html">
  <div class="logo">
    <h1 class="header">
      Video
      <h1 class="headergreen">game</h1>
      <h1 class="header">blog</h1>
  </div>
</a>
  <nav class="navbar">
    <ul class="navlist">
      <li><a href="index.html" class="${addActiveClass("index")}">Home</a></li>
      <li><a href="reviews.html" class="${addActiveClass(
        "reviews"
      )}">Reviews</a></li>
      <li><a href="about.html" class="${addActiveClass("about")}">About</a></li>
      <li><a href="contact.html" class="${addActiveClass(
        "contact"
      )}">Contact us</a></li>
    </ul>
  </nav>
</div>
  <div class="hamburgerout hidden" id="hambu">
    <ul>
      <a href="index.html"><li class="${addActiveClassHamburger(
        "index"
      )}">Home</li></a>
      <a href="reviews.html"><li class="${addActiveClassHamburger(
        "reviews"
      )}">Reviews</li></a>
      <a href="about.html"><li class="${addActiveClassHamburger(
        "about"
      )}">About</li></a>
      <a href="contact.html"><li class="${addActiveClassHamburger(
        "contact"
      )}">Contact us</li></a>
    </ul>
</div>`;
}

function addFooter() {
  document.getElementsByTagName("footer")[0].innerHTML = `<div class="dmca">
  <p class="copyright">
    Videogame Blog Copyright © 2021.
  </p>
  <ul class="footerlist">
    <li><a class="footerlink" href="contact.html">Contact</a></li>
    <li><a class="footerlink" href="about.html">About</a></li>
    <li><a class="footerlink" href="reviews.html">Reviews</a></li>

  </ul>
</div>`;
}

addFooter();
addHeader();

console.log(window.location.pathname);
if (window.location.pathname.includes("index")) {
  console.log();
}

function addActiveClass(searchParam) {
  if (window.location.pathname.includes(searchParam)) {
    console.log(searchParam);
    return "navbutton-active";
  } else {
    return "navbutton";
  }
}
function addActiveClassHamburger(searchParam) {
  if (window.location.pathname.includes(searchParam)) {
    console.log(searchParam);
    return "hamburgeractive";
  }
}
