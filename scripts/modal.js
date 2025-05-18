function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

function loadModalHTML(url, containerId) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    });
}

document.getElementById("openModal").addEventListener("click", () => {
  loadCSS("../cosmo/reviews-page/css/modal-style.css");
  loadModalHTML("./reviews-page/modal.html", "modalContainer");
});

document.getElementById("openModal-2").addEventListener("click", () => {
  loadCSS("../cosmo/reviews-page/css/modal-style.css");
  loadModalHTML("./reviews-page/modal.html", "modalContainer");
});