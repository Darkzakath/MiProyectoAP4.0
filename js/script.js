
// Animación del menú responsive

document.querySelector('.bars-menu').addEventListener('click', () => {

let line1Bars = document.querySelector('.linea1-bars-menu'),
  line2Bars = document.querySelector('.linea2-bars-menu'),
  line3Bars = document.querySelector('.linea3-bars-menu'),
  containerMenu = document.querySelector('.menu');

    line1Bars.classList.toggle('activeline1-bars-menu');
    line2Bars.classList.toggle('activeline2-bars-menu');
    line3Bars.classList.toggle('activeline3-bars-menu');

    containerMenu.classList.toggle('menu-active');
    
});


 // Cambiar color del menu al hacer Scroll

window.onscroll = function() {

    scroll = document.documentElement.scrollTop;

    header = document.querySelector('header');

    if (scroll > 100){
        header.classList.add('header-active');
    } else if (scroll < 100) {
        header.classList.remove('header-active');
    }

}


// Hacer que los enlaces del menú de navegación reaccionen y cambien dependiendo de la posición de la página

const containerScreen = document.querySelectorAll('.div-offset');
const barNavegation = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  containerScreen.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute('id');
    }
  });

  barNavegation.forEach((a) => {
    a.classList.remove('active');
    if (a.classList.contains(current)) {
      a.classList.add('active');
    }
  });

});

// Validación del formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,11}$/, // 9 a 11 numeros, sin espacios ni guines.
  asunto: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{4,40}$/, // Letras, numeros, espacios, acentos, guion y guion_bajo.
  mensaje: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{4,40}$/
}

const campos = {
  nombre: false,
  correo: false,
  telefono: false,
  asunto: false,
  mensaje: false,
}

const validarFormulario = (e) => {
  switch(e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, e.target.name);  
    break;
    case "correo":
      validarCampo(expresiones.correo, e.target, e.target.name); 
    break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, e.target.name);
    break;
    case "asunto":
      validarCampo(expresiones.asunto, e.target, e.target.name);
    break;
    case "mensaje":
      validarCampo(expresiones.mensaje, e.target, e.target.name);
    break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if (campos.nombre && campos.correo && campos.telefono && campos.asunto && campos.mensaje) {
    formulario.reset();
    document.getElementById('modal-message-send').classList.add('.modal-message-send.active');
    document.getElementById('message').classList.add('.message.active');
    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });
  } else {
    document.getElementById('formulario__mensaje-error').classList.add('formulario__mensaje-errorActivo');  
  }
});

// Animación ventana Popup

let modalMessageSend = document.getElementById('modal-message-send'), 
  message = document.getElementById('message'),
  btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnCerrarPopup.addEventListener('click', function(){
  modalMessageSend.classList.remove('active');
  message.classList.remove('active');
});


