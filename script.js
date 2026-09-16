/* SynesisLab site — language toggle. nothing else. */
(function () {
  "use strict";

  var root = document.documentElement;
  var btn = document.getElementById("lang-toggle");
  var KEY = "synesis-lang";
  var lang = "en";

  try { lang = localStorage.getItem(KEY) || "en"; } catch (e) { /* private mode */ }

  function apply(next) {
    lang = next;
    root.setAttribute("lang", next === "zh" ? "zh-Hant" : "en");

    var nodes = document.querySelectorAll("[data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var val = nodes[i].getAttribute("data-" + next);
      if (val !== null) nodes[i].textContent = val;
    }

    btn.textContent = next === "en" ? "繁中" : "EN";

    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
  }

  btn.addEventListener("click", function () {
    apply(lang === "en" ? "zh" : "en");
  });

  apply(lang);
})();