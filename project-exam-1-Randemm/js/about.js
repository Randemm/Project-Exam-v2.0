import { getTrendingPosts, strip, getPosts } from "./api/postApi.js";

const trendingPosts = document.querySelector(".trending-posts");
const recentPosts = document.querySelector(".recent-posts");

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
