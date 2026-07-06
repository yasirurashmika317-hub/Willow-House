/* ==========================================================================
   WILLOW HOUSE — site behaviour
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------- Mobile nav toggle ---------------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var isOpen = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  /* ---------------- Highlight active nav link ---------------- */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });

  /* ---------------- Add to Cart ---------------- */
  var cartCount = 0;
  var cartBadge = document.getElementById('cart-count');
  var cartButtons = document.querySelectorAll('.btn-cart');

  cartButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      cartCount += 1;
      if (cartBadge) cartBadge.textContent = cartCount;

      var original = btn.textContent;
      btn.textContent = 'Added ✓';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 1200);
    });
  });

  /* ---------------- Contact form (front-end only) ---------------- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      var msg = document.getElementById('form-msg');

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        msg.textContent = 'Please fill in all required fields before sending.';
        msg.classList.add('show');
        return;
      }

      if (!emailPattern.test(email.value.trim())) {
        msg.textContent = 'Please enter a valid email address.';
        msg.classList.add('show');
        return;
      }

      msg.textContent = 'Thank you, ' + name.value.trim() + '. Your message has been received. We will reply within one business day.';
      msg.classList.add('show');
      form.reset();
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
