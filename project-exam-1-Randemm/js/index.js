import { getPosts, strip } from "./api/postApi.js";

const reviews = document.querySelector(".reviews");
const thumbnails = document.querySelector(".thumbnail-container");
const carousel = document.querySelector(".slide-container");

var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Make function accessible outside module
window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
window.plusPage = plusPage;
window.prevPage = prevPage;
//

function showSlides(n) {
  var slides = document.getElementsByClassName("slides");
  var previews = document.getElementsByClassName("thumbnails");
  var captions = document.getElementsByClassName("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
  });
  Array.from(previews).forEach((preview) => {
    preview.className = preview.className.replace(" active", "");
  });

  Array.from(captions).forEach((caption) => {
    caption.innerHTML = previews[slideIndex - 1].alt;
  });

  slides[slideIndex - 1].style.display = "block";
  previews[slideIndex - 1].className += " active";
}

var teller = 1;

function plusPage() {
  teller++;
  if (teller > 3) {
    teller = 3;
  } else {
    getPostsAndFillCarousel();
  }
  console.log();
}

function prevPage() {
  teller--;
  if (teller < 1) {
    teller = 1;
  } else {
    getPostsAndFillCarousel();
  }
}

function getPostsAndFillCarousel() {
  carousel.innerHTML = ``;
  thumbnails.innerHTML = ` 
  <button class="thumbprev" onclick="prevPage()"><i class="material-icons">first_page</i></button>
  <button class="thumbnext" onclick="plusPage()"><i class="material-icons">last_page</i></button>`;

  getPosts(5, teller).then((list) => {
    console.log(list);
    list.forEach((review, index) => {
      thumbnails.innerHTML += `<div class="preview">
    <img
    width="1440" height="810"
      class="thumbnails cursor"
      src="${review._embedded["wp:featuredmedia"][0].source_url}"
      style="height: auto; width: 100%"
      onclick='currentSlide(${index + 1})'
      alt="${review.title.rendered} cover photo."
    />
  </div>`;
    });
    list.forEach((review) => {
      carousel.innerHTML += ` 
      <div class="slides fade">
    <div onclick="location.href='post.html?id=${
      review.id
    }'" class="thumbnail" class="image-container">
    <img width="1440" height="810" src="${
      review._embedded["wp:featuredmedia"][0].source_url
    }" 
      style="width: 100%; height: auto;"
      alt="${
        review.title.rendered
      } cover photo." /><div class="caption-container">
    <p class="caption"></p>
    <ul>
      <li id="author"><i class="material-icons">account_circle</i><p class="infotext">By ${
        review._embedded.author[0].name
      }</p></li>
      <li id="updated"><i class="material-icons">update</i><p class="infotext">Updated: ${new Date(
        review.modified
      ).toLocaleString()}</p></li>
    </ul>
  </div>
  </img>
  </div>
  </div`;
    });

    showSlides(slideIndex);
  });
}

getPostsAndFillCarousel();

const mainContent = document.querySelector(".main-content");

var teller = 1;
loadPosts();
window.morePosts = morePosts;
function morePosts() {
  teller -= 1;
  loadPosts();
  document.getElementById("post-button").hidden = true;
}
function loadPosts() {
  getPosts(9, teller + 1).then((list) => {
    list.forEach((review) => {
      console.log(review);
      mainContent.innerHTML += `<div onclick="location.href='post.html?id=${review.id}'" class="post-wrap">
    <img width="1440" height="810"
     src="${review._embedded["wp:featuredmedia"][0].source_url}" alt="${review.title.rendered} cover photo." />
    <p class="post-title">
    ${review.title.rendered} Review
    </p>
    <p class="post-author">By ${review._embedded.author[0].name}</p>
  </div>`;
    });
  });
}
