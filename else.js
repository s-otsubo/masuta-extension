if (location.href.startsWith("https://www.youjizz.com/videos/embed")) {
  const title = document.querySelector("title").innerText;
  const urlTitle = encodeURIComponent(title.replace(/\s/g, "-")).toLowerCase();
  const videoId = location.href.split("/").pop();
  const url = `https://www.youjizz.com/videos/${urlTitle}-${videoId}.html`;
  location.href = url;
}

if (location.href.startsWith("https://www.xvideos.com/embedframe/")) {
  const link = document.querySelector(".xv-logo a");
  if (link) location.href = link.href;
}

function srcRedirect(src) {
  if (src.startsWith("https://spankbang.com/")) {
    location.href = src.replace("embed/", "video").split("?")[0];
  }
  if (src.startsWith("https://www.youjizz.com/videos/embed")) {
    location.href = src;
    // document.getElementById("player").insertAdjacentHTML(
    //   "beforebegin",
    //   `
    //     <style>
    //     .extension-taiou-btn {
    //       background-color: #009f9f;
    //       color: white;
    //       border-radius: 5px;
    //       padding: 5px;
    //       margin-left: 5px;
    //       cursor: pointer;
    //       white-space: nowrap;
    //       padding: 8px 10px;
    //       margin: 10px 0;
    //     }
    //     .extension-btn:hover {
    //       opacity: 0.8;
    //     }
    //   </style>
    //   <a id="extension-masutabe-youjizz-btn" class="extension-btn extension-taiou-btn" href="${src}">Youjizzへ</a>`
    // );
  }
  if (src.includes("javynow.com")) {
    let src2 = src.startsWith("//") ? "https:" + src : src;
    src2 = src2.replace("player", "video");
    location.href = src2;
  }
  if (src.includes("xvideos.com")) {
    location.href = src;
  }
  if (src.includes("jp.pornhub.com/embed")) {
    const id = src.split("/").pop();
    location.href = `https://jp.pornhub.com/view_video.php?viewkey=${id}`;
  }
  if (src.includes("ero-video.net/blogframe/")) {
    const srcUrl = new URL(src);
    const id = srcUrl.searchParams.get("mcd");
    location.href = `https://ero-video.net/movie/?mcd=${id}`;
  }
}
