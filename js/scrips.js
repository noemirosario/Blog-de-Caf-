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


// eventos
// console.log(1);
// window.addEventListener('load', function (){ // load espero a que el js y los archivos q dependen de html esten listos
//     console.log(2);
// })

// document.addEventListener('DOMContentLoaded', function(){ //solo espera a   q se descargue el html
//     console.log(4);

// })

// console.log(5);

// window.onscroll = function (){
//     console.log('scrolling...')
// }

// // seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     //validar un formulario
//     console.log('enviando formulario');
// });


// eventos de inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
// EVENTO DE SUBMIT
const formulario = document.querySelector('.formulario')


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    // VALIDAR FORMULARIO
    const {nombre, email, mensaje} = datos;
    
    if (document.querySelector(".error") === null && document.querySelector(".envioExitoso")===null) {
    if (nombre === '' || email === '' || mensaje === ''){
        // window.alert('completa este campo');
        mostrarError('TODOS LOS CAMPOS SON OBLIGATORIOS', 'error');
        return; // corta la ejecucion del codigo
    } else {
        envioExitoso('Correo enviado correctamente', 'envioExitoso')
    }

}});

// SUBMIT SE USA EN UN FORMULARIO

function leerTexto (evento) {
    // console.log(evento.target.value)
    // console.log(evento.target)
    datos[evento.target.id] = evento.target.value;
    // console.log(datos)
}

// input para tiempo real
// change lo hace hasta que te muevas del cuadro

function envioExitoso (mensaje){
    const envio = document.createElement('P');

    envio.textContent= mensaje;
    envio.classList.add('envioExitoso');

    formulario.appendChild(envio)

    // desaparezca en 5 seg
    setTimeout(() => {
        envio.remove()
    }, 5000);
    

};

function mostrarError (mensaje){
    const error = document.createElement('P');

    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);
    setTimeout(() => {
        error.remove()
    }, 5000);
};

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if (error){
        alerta.classList('error')
    } else {
        alerta.classList('envioExitoso')
    }

    formulario.addEventListener('click', () => alerta.remove ());

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000)
}