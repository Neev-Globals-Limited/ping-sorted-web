(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

/*
 * PingSorted website chat on our own site (dogfooding the product).
 * WIDGET_KEY comes from app.pingsorted.com -> Channels -> Web chat for the
 * business that should answer here, after adding https://pingsorted.com
 * (and https://www.pingsorted.com) as allowed websites. Empty = no chat.
 */
(function () {
  var WIDGET_KEY = 'wc_y3CtBFbPF8F-jgXh93kbzQ';
  if (!WIDGET_KEY) return;
  var s = document.createElement('script');
  s.src = 'https://app.pingsorted.com/chat-widget/v1/widget.js';
  s.async = true;
  s.setAttribute('data-widget', WIDGET_KEY);
  document.body.appendChild(s);
})();
