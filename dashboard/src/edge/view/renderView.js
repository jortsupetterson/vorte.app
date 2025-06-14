export default function renderView() {

    return `
    <!DOCTYPE html>
    <html lang="fi" data-theme="dark">
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/dash/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header class="app-banner" role="banner">
       <h1>
          Botti Example
       </h1>
       <a href=""
       id="user-settings"
       >
        käyttäjän asetukset
       </a>

       <ul class="language-selector">
          <li><a href="">FI</a></li>
          <li><a href="">SV</a></li>
          <li><a href="">EN</a></li>
       </ul>

       
       <a href=""
       id="sign-out"
       >
        <strong>kirjaudu ulos</strong>
       </a>
    </header>

    <main class="app-main">
      <button id="toggle">
      </button>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    


        <button id="add-widget">lisää widget</button>
    </main>

    <aside class="sidebar">
      <header>
        <span></span>
        <p>SOVELLUKSET:</p>
      </header>
      <nav>
          <ul>        
          <li><a href="">Polku yrittäjäksi</a></li>
          <li><a href="">Tee kilpailutus</a></li>
          <li><a href="">Oma talous</a></li>
          <li><a href="">To do</a></li>
        </ul>
      </nav>
    </aside>

<script src="/dash/attachEvents.js"></script>
</body>
</html>
    `
}
