export default function renderView() {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/dash/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 <div class="layout" id="layout">
  <aside class="sidebar">
    <header>
      <span></span>
      <p>
        SOVELLUKSET
      </p>
    </header>

    <nav>
      <ul>
       
      </ul>
    </nav>

  </aside>
  <main class="main-content"></main>
 </div>
<button id="toggle">Toggle</button>
<script src="/dash/attachEvents.js"></script>
</body>
</html>
    `
}
