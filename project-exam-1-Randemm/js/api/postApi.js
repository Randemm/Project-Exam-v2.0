let url = "https://hrek.online/wp-json/wp/v2/posts/";

const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("id");

export async function getPostById() {
  var response = await fetch(url + id + "?_embed", {
    method: "GET",
  });
  return await response.json();
}

export async function getTrendingPosts() {
  var response = await fetch(url + "?categories=16", {
    method: "GET",
  });
  return await response.json();
}

export async function getPosts(perPage, page) {
  var response = await fetch(url + `?per_page=${perPage}&page=${page}&_embed`, {
    method: "GET",
  });
  return await response.json();
}

// Remove html tags
export function strip(html) {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
