/* Vensun Global Services — enquiry form (WhatsApp delivery)
   ---------------------------------------------------------------
   The site is fully static, so the enquiry form does not post to a
   server. On submit it builds a formatted message and opens WhatsApp
   with it pre-filled, addressed to the business number below.

   >>> SET YOUR NUMBER HERE: country code + number, digits only,
       no "+", no spaces. Example for India: 919876543210
   --------------------------------------------------------------- */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "919320262727";
  var FALLBACK_EMAIL = "admin@vensunservices.com";

  var form = document.getElementById("enquiry-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  function show(kind, html) {
    if (!status) return;
    status.className = "form-status is-visible form-status--" + kind;
    status.innerHTML = html;
    status.setAttribute("role", "status");
  }

  function buildMessage(data) {
    var lines = ["*New Business Enquiry — Vensun Global Services*", ""];
    data.forEach(function (value, key) {
      if (key.charAt(0) === "_") return;
      if (String(value).trim() === "") return;
      lines.push("*" + key + ":* " + value);
    });
    lines.push("", "Sent from vensunservices.com");
    return lines.join("\n");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var message = buildMessage(new FormData(form));
    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

    var win = window.open(url, "_blank", "noopener");

    if (win) {
      show(
        "ok",
        "Your enquiry is ready in WhatsApp — please press send there to deliver it to our team. " +
          "If WhatsApp did not open, <a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\">click here</a> " +
          "or email us at <a href=\"mailto:" + FALLBACK_EMAIL + "\">" + FALLBACK_EMAIL + "</a>."
      );
    } else {
      show(
        "err",
        "Your browser blocked the WhatsApp window. " +
          "<a href=\"" + url + "\" target=\"_blank\" rel=\"noopener\">Open WhatsApp with your enquiry</a> " +
          "or email us at <a href=\"mailto:" + FALLBACK_EMAIL + "\">" + FALLBACK_EMAIL + "</a>."
      );
    }
  });
})();
