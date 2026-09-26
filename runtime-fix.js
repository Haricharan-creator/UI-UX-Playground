/* HACHARA runtime bootstrap guard — additive, does not replace baseline code. */
(function(){
  window.extra_topics = Array.isArray(window.extra_topics) ? window.extra_topics : [];
  window.HACHARA_RUNTIME = { version: "0.1.0", bootstrap: "safe" };
})();
