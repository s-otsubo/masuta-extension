if (
  location.hostname === "nukistream.com" ||
  location.hostname === "www.nukistream.com"
) {
  const player = document.querySelector("#player iframe");
  if (player) {
    srcRedirect(player.src);
  }
  const pcAds = document.querySelectorAll(".visible_pc");
  pcAds.forEach((ad) => {
    ad.style.display = "none";
  });
  const articleItems = document.querySelectorAll(
    "#article_items > article, .article_list article"
  );
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
  <style>
  .extension-label {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0009;
    color: white;
    font-size: 14px;
    padding: 3px 5px;
  }
  .extension-javynow {
    background-color: #2dc9ff99;
  }
  .extension-spankbang {
    background-color: #9e431999;
  }

  .extension-nukistream {
    background-color: #fff9;
    color: #000;
  }
  </style>
  `
  );
  articleItems.forEach((article) => {
    const thumbnail = article.querySelector(".thumb > a > img");
    let label = "";
    if (thumbnail?.src?.includes("javynow.com")) {
      label = "javynow";
    }
    if (thumbnail?.src?.includes("tbi.sb-cd.com")) {
      label = "spankbang";
    }
    if (thumbnail?.src?.includes("img.nukistream.com")) {
      label = "nukistream";
    }
    if (label.length > 0) {
      article.querySelector(".thumb").insertAdjacentHTML(
        "afterbegin",
        `
      <div class="extension-label extension-${label}">${label}
      </div>
      `
      );
    }
  });
}
