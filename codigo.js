//funcion para visibilizar e invisi
document.getElementById("respuesta").style.display = "none";
document.getElementById("botonBorrar").style.display = "none";

function Encriptar() {
    document.getElementById("panelDerecho").style.display = "none";
    document.getElementById("respuesta").style.display = "block";
    document.getElementById("botonBorrar").style.display = "block";
}


// extraer valor del cuadro respuesta
function encriptacion(){
    let text = document.getElementById('mensajeUsuario').value;

    let textoEncriptado = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");



    document.getElementById("respuesta").innerText = textoEncriptado;
    return;
}

function Desencriptar(){
    let text = document.getElementById('mensajeUsuario').value;
    let textoEncriptado = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    document.getElementById("respuesta").innerText = textoEncriptado;
    return;
}

function copiarTexto() {
    let textarea = document.getElementById("respuesta");
    
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Mostrar un mensaje de confirmación
    document.getElementById("mensaje").innerText = "Texto copiado al portapapeles!";
}
