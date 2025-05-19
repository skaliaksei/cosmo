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
  const modal = document.getElementById("modalContainer");
  modal.style.display = "block";

  loadCSS("../cosmo/reviews-page/css/modal-style.css");
  loadModalHTML("./reviews-page/modal.html", "modalContainer");
});

document.getElementById("openModal-2").addEventListener("click", () => {
  const modal = document.getElementById("modalContainer");
  modal.style.display = "block";

  loadCSS("../cosmo/reviews-page/css/modal-style.css");
  loadModalHTML("./reviews-page/modal.html", "modalContainer");
});

// Close Modal
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modalContainer");
    
    if (e.target.classList.contains("modal-close") || e.target.classList.contains("modal-overlay")) {
      modal.innerHTML = ""; // очищаем модалку
      modal.style.display = "none"; // или любое другое изменение стиля
      // modal.style.backgroundColor = "transparent"; // например
      //modal.classList.remove("active"); // если был добавлен класс
    }
});