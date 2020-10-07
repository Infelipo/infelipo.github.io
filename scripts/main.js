let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/d-va.jpg'){
        miImage.setAttribute('src', 'images/d-angel.jpg');
    }  else {
        miImage.setAttribute('src', 'images/d-va.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Welcome, ' + miNombre;
}
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Welcome, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}

