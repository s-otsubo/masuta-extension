if (location.hostname === "movie.eroterest.net") {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <style>
  .kokArea,.adAreaNative {
    display: none;
  }
  </style>
  `
  );
  const urlSplitArray = location.href.split("/");
  // 個別ページ
  if (urlSplitArray[3] === "page" && document.querySelector(".gotoBlog a")) {
    const buttonUrl = document.querySelector(".gotoBlog a")?.href;
    const blogUrl = new URL(buttonUrl);
    blogUrl.searchParams.append("extensionModeFrom", "eroterest");
    const proName = document.querySelector(".proName")?.innerText?.trim();
    if (proName) {
      blogUrl.searchParams.append("extensionTargetSite", proName);
    }

    location.href = buttonUrl.startsWith("https")
      ? blogUrl.href
      : blogUrl.href.replace("https", "http");
  }
}

if (location.search.includes("extensionModeFrom=eroterest")) {
  const targetSite = decodeURIComponent(
    location.search.split("extensionTargetSite=")[1] ?? ""
  );
  console.log("targetSite", targetSite);
  let targetSiteWord = "";
  if (targetSite.match(/^[a-zA-Z0-9]*$/g)) {
    targetSiteWord = targetSite.toLowerCase();
  } else if (targetSite === "ドーガ") {
    targetSiteWord = "do-ga.eroterest.net";
  }
  console.log("targetSiteWord", targetSiteWord);
  if (targetSiteWord !== "") {
    // まずは画像もちaタグから探索
    for (const a of [...document.querySelectorAll("a[href]:has(img)")]) {
      const href = a.href;
      if (href.split("/")[2].toLowerCase().includes(targetSiteWord)) {
        location.href = href;
        break;
      }
    }
    // 画像なしaタグから探索
    for (const a of [...document.querySelectorAll("a[href]:not(:has(img))")]) {
      const href = a.href;
      if (href.split("/")[2].toLowerCase().includes(targetSiteWord)) {
        location.href = href;
        break;
      }
    }
  }
}
