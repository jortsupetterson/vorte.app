import getSmoothPageSwitches from "../../../../shared/getSmoothPageSwitches.js";
import manageDefaultLayoutToggleBehavior from "../../../../shared/manageDefaultLayoutToggleBehavior.js";

function init() {
  getSmoothPageSwitches();
  manageDefaultLayoutToggleBehavior();
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(init, { timeout: 300 });
} else {
  window.addEventListener('DOMContentLoaded', init);
}