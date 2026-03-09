// Navbar scroll behaviour
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Mobile menu
function openMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close mobile menu on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

// Fade-in on scroll (Intersection Observer)
(function () {
  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    var elements = document.querySelectorAll('.fade-in, .stagger-children');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('visible');
    }
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  var targets = document.querySelectorAll('.fade-in, .stagger-children');
  targets.forEach(function (target) {
    observer.observe(target);
  });
})();
