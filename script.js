const btnMenu = document.getElementById('menuMobile');
const navMobile = document.getElementById('navMobile');
if(btnMenu){btnMenu.addEventListener('click', () => {navMobile.classList.toggle('show');});}
document.addEventListener('DOMContentLoaded', () => {
  const fotoCard = document.querySelector('.foto-card');
  if(fotoCard){setInterval(() => {fotoCard.style.boxShadow="0 0 50px rgba(255,215,0,0.6)";setTimeout(()=>{fotoCard.style.boxShadow="0 0 35px rgba(255,215,0,0.35)";},600);},3000);}
  console.log("IMPERIUM con logo fundamental cargado");
});