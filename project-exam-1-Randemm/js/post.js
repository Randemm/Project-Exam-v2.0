import { getPostById } from "./api/postApi.js";

var headline = document.querySelector(".headline");
var coverPhoto = document.querySelector(".cover-photo");
var modifiedDate = document.querySelector(".updated");
var author = document.querySelector(".author");
var posted = document.querySelector(".posted");
var articlePage = document.querySelector(".article-page");

getPostById().then((post) => {
  console.log(post);
  document.title = `Videogameblog | ${post.title.rendered} Review`;
  headline.innerHTML = `<h1>${post.title.rendered} Review</h1>`;
  author.innerHTML += `<i class="material-icons">account_circle</i><p>By ${post._embedded.author[0].name}</p>`;
  modifiedDate.innerHTML += `<i class="material-icons">update</i><p>Updated: ${new Date(
    post.modified
  ).toLocaleString()}</p>`;
  posted.innerHTML += `<i class="material-icons">article</i><p>Posted: ${new Date(
    post.date
  ).toLocaleString()}</p>`;
  articlePage.innerHTML += `${post.content.rendered}`;
  coverPhoto.innerHTML = ` <img width="1440" height="810"
  src="${post._embedded["wp:featuredmedia"][0].source_url}"
  alt="cover photo."
/>`;
  clickScreenshot();
});

function clickScreenshot() {
  var modal = document.querySelector(".modal");
  var modalPic = document.querySelector(".modal-picture");
  var screenShot = document.getElementById("ss");
  var caption = document.querySelector(".caption");

  screenShot.onclick = function () {
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modalPic.src = this.src;
    caption.innerHTML = this.alt;
  };
  window.addEventListener("click", function (e) {
    if (e.target.id == "modalID") {
      modal.style.display = "none";
    }
  });
}
