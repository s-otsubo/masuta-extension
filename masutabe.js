const insertMasutabeSpankBangBtn = () => {
  const onClick = (btnname) => {
    const s =
      btnname === "spankbang"
        ? "SpankBang"
        : "XVIDEOS*JavyNow*erovideo*Pornhub*SpankBang*Youjizz";
    if (location.href.includes("s="))
      location.href = location.href.split("s=")[0] + `s=${s}`;
    else location.href = location.href + `?s=${s}`;
  };

  const filter = document.querySelector("#filter");
  filter.insertAdjacentHTML(
    "beforeend",
    `
    <style>
      .extension-taiou-btn {
        background-color: #009f9f;
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin-left: 5px;
        cursor: pointer;
        white-space: nowrap;
      }
      .extension-spankbang-btn {
        background-color: #9e4319;
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin-left: 5px;
        cursor: pointer;
        white-space: nowrap;
      }
      .extension-btn:hover {
        opacity: 0.8;
      }
    </style>
    <div style="display: flex;">
      <div id="extension-masutabe-taiou-btn" class="extension-btn extension-taiou-btn">EXT対応済み</div>
      <div id="extension-masutabe-spankbang-btn" class="extension-btn extension-spankbang-btn">SpankBang</div>
    </div>
    `
  );
  document
    .querySelector("#extension-masutabe-spankbang-btn")
    .addEventListener("click", () => onClick("spankbang"));
  document
    .querySelector("#extension-masutabe-taiou-btn")
    .addEventListener("click", () => onClick("taiou"));
};

if (location.hostname === "masutabe.info") {
  if (document.querySelector("#filter #sites")) {
    insertMasutabeSpankBangBtn();
  }
  if (location.href.startsWith("https://masutabe.info/video/")) {
    console.log("masutabe video page");
    const player = document.querySelector("#player iframe");
    if (player) {
      srcRedirect(player.src);
    }
  }
}
