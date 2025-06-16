import getAppBanner from "../../../../shared/getAppBanner.js"

export default function renderView(lang, url) {

    return `
    <!DOCTYPE html>
    <html lang="fi" data-theme="dark" data-contrast="normal">
    <head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, follow">
    <link rel="stylesheet" href="/dash/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=no">
    <title>Document</title>
</head>
<body>
    ${getAppBanner(lang)}

    <main class="app-main">

      <header>
        <button id="toggle" title="Muuta näkymää"> </button>
        <p class="heading">TÄRKEIMMÄT:</p>
        <button id="add-widget">lisää widget <strong>+</strong></button>
      </header>

      <div class="content">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <footer></footer>
      </div>

    </main>

    <aside class="app-sidebar">
      <button id="hide-sidebar">✕</button>
      <header>
        <p class="heading">SOVELLUKSET:</p>
      </header>
      <nav>
          <ul>        
          <li><a href="">Polku yrittäjäksi</a></li>
          <li><a href="">Oma talous</a></li>
          <li><a href="">To-Do</a></li>
        </ul>
      </nav>
    </aside>

<script type="module" src="/dash/app.js" defer></script>
</body>
</html>
    `
}
