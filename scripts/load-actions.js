async function loadComponent(htmlPath, cssPath, targetSelector) {
  // 1. Загружаем HTML
  const html = await fetch(htmlPath).then(res => res.text());

  // 2. Добавляем CSS
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssPath;
  document.head.appendChild(link);

  // 3. Вставляем в DOM
  document.querySelector(targetSelector).innerHTML += html;
}

loadComponent('components/actions.html', 'css/actions.css', '#actions');
