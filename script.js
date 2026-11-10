const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-links');
menuButton.addEventListener('click', () => { const isOpen = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(isOpen)); menuButton.textContent = isOpen ? '×' : '☰'; });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰'; }));
const track = document.getElementById('gallery-track');
function scrollGallery(direction) { const card = track.querySelector('.gallery-item'); track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 18), behavior: 'smooth' }); }
document.getElementById('gallery-prev').addEventListener('click', () => scrollGallery(-1));
document.getElementById('gallery-next').addEventListener('click', () => scrollGallery(1));
document.getElementById('year').textContent = new Date().getFullYear();
