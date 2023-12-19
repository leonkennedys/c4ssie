document.addEventListener("DOMContentLoaded", function(event) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.style.animation = 'fadeIn 1s ease-in-out';
    item.style.animationFillMode = 'forwards';
  });
});
