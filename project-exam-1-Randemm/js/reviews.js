import { getTrendingPosts, strip, getPosts } from "./api/postApi.js";

const leftContent = document.querySelector(".left-content");
const trendingPosts = document.querySelector(".trending-posts");
const recentPosts = document.querySelector(".recent-posts");

//Main content list

var teller = 1;
loadPosts();
window.morePosts = morePosts;
function morePosts() {
  teller += 1;
  loadPosts();
  document.getElementById("post-button").hidden = true;
}
function loadPosts() {
  getPosts(9, teller).then((list) => {
    list.forEach((review) => {
      console.log(review);
      leftContent.innerHTML += `<div onclick="location.href='post.html?id=${review.id}'" class="thumbnail">
    <img width="1440" height="810" src="${review._embedded["wp:featuredmedia"][0].source_url}" alt="${review.title.rendered} cover photo." />
    <p class="post-title">
    ${review.title.rendered} Review
    </p>
    <p class="author">By ${review._embedded.author[0].name}</p>
  </div>`;
    });
  });
}

//Recent list

getPosts(4, 1).then((recentList) => {
  recentList.forEach((recent) => {
    recentPosts.innerHTML += `<div onclick="location.href='post.html?id=${recent.id}'" class="recent-post">
    <img width="1440" height="810" src="${recent._embedded["wp:featuredmedia"][0].source_url}" alt="" />
    <p>${recent.title.rendered} Review</p>
  </div>`;
  });
});

//Trending list

getTrendingPosts().then((trendList) => {
  trendList.forEach((trending) => {
    trendingPosts.innerHTML += `<div onclick="location.href='post.html?id=${trending.id}'" class="trendPost">
    <p class="whiteTitle">${trending.title.rendered} Review </p>
    <div class="icon-box">
      <i class="material-icons">article</i>
    </div>
  </div>`;
  });
});
