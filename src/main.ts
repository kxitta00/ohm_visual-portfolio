import './style.css'


const btnMenu = document.querySelector<HTMLButtonElement>('#menu-btn');
const nav = document.querySelector<HTMLElement>('#nav-links');
const allLinks = document.querySelectorAll('#nav-links a');

const lightbox = document.querySelector<HTMLElement>('#lightbox');
const lightboxImg = document.querySelector<HTMLImageElement>('#lightbox-img');
const lightboxClose = document.querySelector<HTMLElement>('#lightbox-close');
const cards = document.querySelectorAll('.card');

if (btnMenu && nav) {
  btnMenu.addEventListener('click', () => {
    nav.classList.toggle('is-open')
    if (nav.classList.contains('is-open')) {
      btnMenu.textContent = "Close"
    } else {
      btnMenu.textContent = "☰"
    }
  })

  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      btnMenu.textContent = '☰'
    });
  });
}
if (lightbox && lightboxImg && lightboxClose) {
  cards.forEach((card) => card.addEventListener('click', () => {
    const clickImg = card.querySelector('img');
    if (clickImg) {
      lightboxImg.src = clickImg.src
    }
    lightbox.classList.add('is-open')
  }))
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('is-open');
  })
}