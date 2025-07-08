// Hello Kitty descendiendo
const kittyContainer = document.getElementById('kittyContainer');
for (let i = 0; i < 20; i++) {
  const kitty = document.createElement('div');
  kitty.classList.add('kitty');
  kitty.style.left = Math.random() * 100 + 'vw';
  kitty.style.animationDelay = (Math.random() * 5) + 's';
  kitty.style.opacity = Math.random();
  kittyContainer.appendChild(kitty);
}

// Pooh subiendo
const poohContainer = document.getElementById('poohContainer');
for (let i = 0; i < 15; i++) {
  const pooh = document.createElement('div');
  pooh.classList.add('pooh-fondo');
  pooh.style.left = Math.random() * 100 + 'vw';
  pooh.style.animationDelay = (Math.random() * 6) + 's';
  pooh.style.opacity = Math.random();
  poohContainer.appendChild(pooh);
}

// Mostrar y cerrar carta
function mostrarCarta() {
  document.getElementById("carta").style.display = "block";
}
function cerrarCarta() {
  document.getElementById("carta").style.display = "none";
}

// Corazoncitos flotantes
function crearCorazon(e) {
  const contenedor = document.getElementById('corazones-container');
  const corazon = document.createElement('div');
  corazon.classList.add('corazon-flotante');
  corazon.innerText = '❤️';
  corazon.style.left = e.clientX + 'px';
  corazon.style.top = e.clientY + 'px';
  contenedor.appendChild(corazon);

  setTimeout(() => corazon.remove(), 1500);
}
