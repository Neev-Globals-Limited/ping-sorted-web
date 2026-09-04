(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
