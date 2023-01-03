// querySelector
const heading = document.querySelector('.header__texto h2'); //querySelector retorna 0 o 1 elemento
heading.classList.add('nueva') //agg nueva clase
heading.textContent = 'Nuevo Heading'; //cambia el contenido del h2

// querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a')
// console.log(enlaces[1])
// enlaces[1].textContent = 'Nuevo enlace'


// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2)

// generar nuevo enlace
const nuevoEnlace = document.createElement('a')

//agregar el href

nuevoEnlace.href = 'nuevo-enlace.html';

// agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// agregar la clase

nuevoEnlace.classList.add('navegacion-enlace');

// agg al documento
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)
