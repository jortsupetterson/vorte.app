globalThis.pkceWorker = new Worker('/auth/pkceWorker.js');
import { startGoogleLogin } from './oauthGoogle.js';
import { startMsLogin } from './oauthMicrosoft.js';
  

// sidotaan nappi
document.getElementById('google').addEventListener('click', startGoogleLogin);
document.getElementById("microsoft").addEventListener("click", startMsLogin);
