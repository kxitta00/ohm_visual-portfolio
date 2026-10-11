import './style.css'


const btnMenu = document.querySelector<HTMLButtonElement>('#menu-btn');
const nav = document.querySelector<HTMLElement>('#nav-links');
const allLinks = document.querySelectorAll('#nav-links a');

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