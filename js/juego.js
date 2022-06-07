var botonEmpezarJuego = document.querySelector("#botonEmpezarJuego");
var mostrarPalabra = document.querySelector("#mostrarPalabra");
var palabraSecreta = document.querySelector("#palabraSecreta");
var ingresarPalabra = document.querySelector("#ingresarPalabra");
var palabraDescifrada = document.querySelector("#palabraDescifrada");
var botonIncluir = document.querySelector("#botonIncluir");
var botonGuardarPalabra = document.querySelector("#botonGuardarPalabra");
var botonCancelar = document.querySelector("#botonCancelar");
var botonMostrarLista = document.querySelector("#botonMostrarLista");
var ingresarLetra = document.querySelector("#ingresarLetra");
var botonIngresarLetra = document.querySelector("#botonIngresarLetra");
var botonDesistir = document.querySelector("#botonDesistir");
var listaPalabras = ["LUNES", "MARTES"];
var letrasErradas = document.querySelector("#letrasErradas");
var verdugo = document.querySelector("#verdugo");
var faseVerdugo = ["", "images/base.png", "images/a.png", "images/ah.png", "images/aho.png", "images/ahor.png", "images/ahorc.png", "images/ahorca.png", "images/ahorcad.png", "images/perdiste.png"];
var faseNumero= 0;


    console.log(listaPalabras);

    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "none";
    botonIncluir.style.display = "";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";



botonEmpezarJuego.addEventListener("click", function() {
    

    botonEmpezarJuego.style.display = "none";
    botonIncluir.style.display = "none";

    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "";
    
    botonMostrarLista.style.display = "";
    ingresarLetra.style.display = "";
    botonIngresarLetra.style.display = "";
    botonDesistir.style.display = "";
    letrasErradas.style.display = "";
    verdugo.style.display = "";
    document.querySelector("#horca").style.display = "";

    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    ingresarLetra.value = "";
    letrasErradas.innerHTML = "";  
    palabraSecreta.innerHTML = ""; 
    mostrarPalabra.innerHTML = palabra;
    faseNumero = 0;
    verdugo.src = faseVerdugo[0];
    ingresarLetra.focus();
    let palabraAsterisco = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraAsterisco += "*";
    }
    palabraSecreta.innerHTML = palabraAsterisco;

});

ingresarPalabra.style.display = "none";
botonGuardarPalabra.style.display = "none";
botonCancelar.style.display = "none";
document.querySelector("#notificacion").style.display = "none";

botonIncluir.addEventListener("click", function() {

    botonEmpezarJuego.style.display = "none";
    ingresarPalabra.value = "";    
    ingresarPalabra.style.display = "";
    ingresarPalabra.focus();
    botonGuardarPalabra.style.display = "";
    botonCancelar.style.display = "";
    document.querySelector("#notificacion").style.display = "";

    palabraSecreta.style.display = "none";
    botonIncluir.style.display = "none";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";

});

botonGuardarPalabra.addEventListener("click", function() {
    let palabraNueva = ingresarPalabra.value.toUpperCase();
    let duplicado = listaPalabras.indexOf(palabraNueva);
    console.log(duplicado);
    if (duplicado > -1) {
        alert("Palabra ya existe.");  
    } else if (palabraNueva == "") {
        alert("No ingreso una palabra.")
    } else {
        listaPalabras.push(palabraNueva); 
    }
    
    
    
    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";
    botonIncluir.style.display = "none";

    palabraSecreta.style.display = "";
    botonMostrarLista.style.display = "";
    ingresarLetra.style.display = "";
    botonIngresarLetra.style.display = "";
    botonDesistir.style.display = "";
    letrasErradas.style.display = "";
    verdugo.style.display = "";
    document.querySelector("#horca").style.display = "";

    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    ingresarLetra.value = "";
    letrasErradas.innerHTML = "";  
    palabraSecreta.innerHTML = ""; 
    mostrarPalabra.innerHTML = palabra;
    faseNumero = 0;
    verdugo.src = faseVerdugo[0];
    ingresarLetra.focus();
    let palabraAsterisco = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraAsterisco += "*";
    }
    palabraSecreta.innerHTML = palabraAsterisco;

    console.log(listaPalabras);

});



botonCancelar.addEventListener("click", function() {
    console.log(listaPalabras);

    botonEmpezarJuego.style.display = "";
    botonIncluir.style.display = "";
    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    botonCancelar.style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "none";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";
});




botonMostrarLista.addEventListener("click", function() {

    ingresarLetra.style.display = "";
    botonIngresarLetra.style.display = "";
    botonIncluir.style.display = "none";

    let palabra = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    ingresarLetra.value = "";
    letrasErradas.innerHTML = "";  
    palabraSecreta.innerHTML = ""; 
    mostrarPalabra.innerHTML = palabra;
    faseNumero = 0;
    verdugo.src = faseVerdugo[0];
    ingresarLetra.focus();
    let palabraAsterisco = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraAsterisco += "*";
    }
    palabraSecreta.innerHTML = palabraAsterisco;
    
});



botonIngresarLetra.addEventListener("click", function() {
    let palabraElegida = mostrarPalabra.innerHTML;  
    console.log(palabraElegida);
    
    ingresarLetra.focus();

    let letraIngresada = ingresarLetra.value.toUpperCase();
    console.log(letraIngresada);
    
    let secretWordEntrada = palabraSecreta.innerHTML;
    console.log(secretWordEntrada);

    let letrasInvalidas = letrasErradas.innerHTML;
    console.log(letrasInvalidas);

    let secretWordSalida = "";

    let existe = 0;
    let repetida = 0;

    for (let i = 0; i < letrasInvalidas.length; i++) {
        if (letraIngresada == letrasInvalidas[i]) {
            repetida++;    
        }        
    }
   
    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] == letraIngresada) {
            secretWordSalida += letraIngresada;
            existe++;
        } else if (secretWordEntrada[i] != "*") {
            secretWordSalida += secretWordEntrada[i];
        } else {
            secretWordSalida += "*";
        }        
    }

    if (existe == 0) {
        if (repetida != 0) {
            alert("Ya ingreso esta letra, intente de nuevo.");
            console.log("Letra repetida");
        } else {
            letrasInvalidas += letraIngresada;
            faseNumero++;
            verdugo.src = faseVerdugo[faseNumero];
            console.log(faseNumero);    
        }        
    }

    if (palabraElegida == secretWordSalida) {
        console.log("ganaste");
        ingresarLetra.style.display = "none";
        botonIngresarLetra.style.display = "none";
        verdugo.src = "images/ganaste.png";
    }
    
    if (faseNumero == 9) {
        console.log("perdiste");
        ingresarLetra.style.display = "none";
        botonIngresarLetra.style.display = "none";
        verdugo.src = "images/perdiste.png";
    }    
        

    palabraSecreta.innerHTML = secretWordSalida;
    letrasErradas.innerHTML = letrasInvalidas;

    ingresarLetra.value = "";

});

botonDesistir.addEventListener("click", function() {
    console.log(listaPalabras);

    botonEmpezarJuego.style.display = "";
    botonIncluir.style.display = "";

    ingresarPalabra.style.display = "none";
    botonGuardarPalabra.style.display = "none";
    document.querySelector("#botonCancelar").style.display = "none";
    document.querySelector("#notificacion").style.display = "none";

    palabraSecreta.style.display = "none";
    botonMostrarLista.style.display = "none";
    ingresarLetra.style.display = "none";
    botonIngresarLetra.style.display = "none";
    botonDesistir.style.display = "none";
    letrasErradas.style.display = "none";
    verdugo.style.display = "none";
    document.querySelector("#horca").style.display = "none";
});




