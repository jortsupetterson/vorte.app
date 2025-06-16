export default function getDashMain(lang) {
	return `
   <main class="app-main">

     <header>
       <button id="toggle"
         title="${
						{
							fi: 'Muuta näkymää',
							sv: 'Byt vy',
							en: 'Change layout',
						}[lang]
					}"
       >
       </button>

       <p class="heading">
         ${
						{
							fi: 'TÄRKEIMMÄT:',
							sv: 'VIKTIGASTE:',
							en: 'IMPORTANT:',
						}[lang]
					}
       </p>

       <button id="add-widget">
         ${
						{
							fi: 'lisää widget',
							sv: 'lägg till widget',
							en: 'add a widget',
						}[lang]
					}
         <strong> +</strong>
       </button>
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
  `;
}
