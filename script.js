const btnMobile = document.getElementById('hamburguer')

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click',toggleMenu);