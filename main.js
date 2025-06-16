const light = document.querySelector('.cursor-light');

window.addEventListener('mousemove', (e) => {
  light.style.left = e.pageX + 'px';
  light.style.top = e.pageY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});
