// legacy-invite.js — rescata los enlaces de invitación del formato viejo.
//
// La primera beta generaba umbrix.khassinx.com/add/<código> con el código en la RUTA. Un sitio estático
// no puede servir una ruta distinta por contacto, así que esos enlaces caen en el 404 — y quien recibía
// la invitación veía un error en vez de entender qué le habían mandado. Acá se conserva el código y se lo
// manda a la página real, donde el código viaja después del "#", que el navegador nunca envía al servidor.
//
// Es el ÚNICO script del sitio, y existe sólo por los enlaces ya compartidos: nada se envía a ningún lado.
//
// © 2026 KHASSINX LLC. All rights reserved.

(function () {
  var path = window.location.pathname || "";
  var match = path.match(/^\/(?:es\/)?add\/(.+)$/);
  if (!match) return;

  var code = match[1].replace(/\/+$/, "");
  if (!code) return;

  var spanish = path.indexOf("/es/") === 0;
  var title = document.getElementById("notfound-title");
  var lead = document.getElementById("notfound-lead");

  // Se avisa antes de saltar: un rebote instantáneo y mudo se lee como un error más.
  if (title) {
    title.textContent = spanish ? "Abriendo tu invitación…" : "Opening your invite…";
  }
  if (lead) {
    lead.textContent = spanish
      ? "Este enlace usa el formato anterior. Te llevamos a la página correcta."
      : "This link uses the older format. Taking you to the right page.";
  }

  window.location.replace((spanish ? "/es/add/" : "/add/") + "#" + code);
})();
