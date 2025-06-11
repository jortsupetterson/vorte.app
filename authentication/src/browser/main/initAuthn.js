
globalThis.pkceWorker = new Worker('/authn/pkceWorker.js');
import { startAuthnFlow } from "./startAuthnFlow.js";

document.addEventListener("DOMContentLoaded",()=>{
const emailInput = document.getElementById("email");
let userEmail = "";

emailInput.addEventListener("input",(e)=>{
    userEmail = e.target.value.trim();
});

// sidotaan nappi
document.getElementById('google').addEventListener("click", ()=>{ startAuthnFlow({ method:"google" })});
document.getElementById("microsoft").addEventListener("click", ()=>{ startAuthnFlow({ method:"ms" })});
document.getElementById("magic-link").addEventListener("click", ()=>{ startAuthnFlow({ method:"magic-link", email:userEmail })})
})