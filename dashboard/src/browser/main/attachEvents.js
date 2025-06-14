  const aside      = document.querySelector('.sidebar');
  const main       = document.querySelector('main');
  const toggle    = document.getElementById('toggle');

  function setSidebar(open, pushState = true) {
    // aside hidden / visible
    aside.classList.toggle('toggled', !open);
    // show-button näkyvyys
    toggle.classList.toggle('toggled', !open);
    // main full-width
    main.classList.toggle('toggled', !open);

    if (pushState) {
      history.replaceState({ sidebarOpen: open }, '', location.href);
    }
  }

  // alusta tila history.state:stä
  window.addEventListener('DOMContentLoaded', () => {
    const wasOpen = history.state?.sidebarOpen;
    setSidebar(wasOpen === undefined ? true : wasOpen, false);
  });

  // back/forward -napit
  window.addEventListener('popstate', ev => {
    const open = ev.state?.sidebarOpen;
    setSidebar(open === undefined ? true : open, false);
  });

toggle.addEventListener('click', () => {
  // jos sidebarissa on .toggled, se on kiinni → avaa; muuten sulje
  const shouldOpen = aside.classList.contains('toggled');
  setSidebar(shouldOpen, true);
});
