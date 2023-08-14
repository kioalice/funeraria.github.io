document.addEventListener('DOMContentLoaded', function() {

  eventListeners();

  darkMode();


});

function darkMode() {

  

  const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

  // console.log(prefiereDarkMode.matches);

  if(prefiereDarkMode.matches) {
      document.body.classList.add('dark-mode');
      
  } else {
      document.body.classList.remove('dark-mode');
  }

  prefiereDarkMode.addEventListener('change', function() {
      if(prefiereDarkMode.matches) {
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
      }
  });

  const botonDarkMode = document.querySelector('.dark-mode-boton');
  botonDarkMode.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
  });
}






let slider = document.querySelectorAll('.slider');
let index = 0;
function next(){
  slider[index].classList.remove('active');
  index = (index + 1) % slider.length; 
  slider[index].classList.add('active');

}

function prev(){
  slider[index].classList.remove('active');
  index = (index - 1 + slider.length) % slider.length; 
  slider[index].classList.add('active');

}




function eventListeners (){
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.addEventListener('click', navegacionResponsive);

  //Muestra Campos condicionales

const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
metodoContacto.forEach(input => input.addEventListener('click', seleccionarMetodo));

}



function navegacionResponsive(){
  const navegacion = document.querySelector('.navegacion');

  if (navegacion.classList.contains('mostrar')){
      navegacion.classList.remove('mostrar');
  }else{
      navegacion.classList.add('mostrar');

  }

  
}


function seleccionarMetodo(e) {
const contactoDiv = document.querySelector('#contacto');


if(e.target.value === 'telefono') {
    contactoDiv.innerHTML = `
        <br>
        <h7>Si eligió teléfono, elija la fecha y hora de contacto</h7>
        <label for="telefono">Teléfono</label>
        <input type="tel" placeholder="Tu Teléfono ej: +56912345678" id="telefono" name="contacto[telefono]" required pattern="[+0-9]{9,12}" title="Telefono debe tener maximo 11 digitos +56912345678 o 912345678">

        <label for="fecha">Fecha Llamada:</label>
        <input type="date" id="fecha" min="2022-11-23" step="1" name="contacto[fecha]" required>

        <label for="hora">Hora Llamada:</label>
        <input type="time" id="hora" name="contacto[hora]" required>

    `;
} else {
    contactoDiv.innerHTML = `
        <br>
        <label for="email">E-mail</label>
        <input type="email" placeholder="Tu Email" id="email" name="contacto[email]" required>
    `;
}
}






//







const carrusel = document.querySelector(".carrusel-items");


let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
intervalo = setInterval( function () {
  carrusel.scrollLeft = carrusel.scrollLeft + step;
  if (carrusel.scrollLeft === maxScrollLeft) {
    step = step * -1;
  } else if (carrusel.scrollLeft === 0) {
    step = step * -1;
  }
}, 10);
};

const stop = () => {
clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
stop();
});

carrusel.addEventListener("mouseout", () => {
start();
});

start();



$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});


