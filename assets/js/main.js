const btnShow = document.getElementById('btn-nave');
btnShow.addEventListener('click', ()=> {
  const menuShow = document.getElementById('menu');
  menuShow.classList.toggle('active');
})