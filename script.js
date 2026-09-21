const mensajes = {
    1: "Dicen que las flores amarillas representan alegría, cariño y buenos deseos... 🌻",

    2: "Así que pensé que sería bonito darte unas, aunque esta vez tengan una pequeña sorpresa. 💛",

    3: "Porque eres alguien especial para mí, y espero que sigamos compartiendo momentos bonitos. ✨"
};


let florActual = 0;

let florDescubierta = [
    false,
    false,
    false
];

let esperandoContinuar = false;


const bienvenida =
    document.getElementById("bienvenida");

const zonaFlores =
    document.getElementById("zonaFlores");

const mensajeFlor =
    document.getElementById("mensajeFlor");

const textoFlor =
    document.getElementById("textoFlor");

const botonSiguiente =
    document.getElementById("botonSiguiente");

const instruccion =
    document.getElementById("instruccion");

const cartaFinal =
    document.getElementById("cartaFinal");

const tituloFlores =
    document.getElementById("tituloFlores");


/* =========================
   COMENZAR
========================= */

function comenzar() {

    bienvenida.style.display = "none";

    zonaFlores.style.display = "block";

    instruccion.textContent =
        "Encuentra el primer girasol 🌻";


    // Solo la primera está disponible
    desbloquearFlor(1);

    bloquearFlor(2);
    bloquearFlor(3);
}


/* =========================
   BLOQUEAR / DESBLOQUEAR
========================= */

function desbloquearFlor(numero) {

    const flor =
        document.getElementById("flor" + numero);

    flor.disabled = false;

    flor.classList.remove("bloqueada");

    flor.classList.add("desbloqueada");
}


function bloquearFlor(numero) {

    const flor =
        document.getElementById("flor" + numero);

    flor.disabled = true;

    flor.classList.add("bloqueada");

    flor.classList.remove("desbloqueada");
}


/* =========================
   DESCUBRIR FLOR
========================= */

function descubrirFlor(numero) {

    // Solo permite descubrir la flor correcta
    if (numero !== florActual + 1) {
        return;
    }

    // Evita repetir una flor
    if (florDescubierta[numero - 1]) {
        return;
    }


    florActual = numero;

    florDescubierta[numero - 1] = true;

    esperandoContinuar = true;


    // Mostrar mensaje
    textoFlor.textContent =
        mensajes[numero];

    mensajeFlor.classList.add("visible");


    // Desactivar flor actual
    bloquearFlor(numero);


    // Cambiar botón
    if (numero === 3) {

        botonSiguiente.textContent =
            "Ver el detalle final 💛";

    } else {

        botonSiguiente.textContent =
            "Continuar ✨";
    }


    instruccion.textContent =
        "Has encontrado una flor 🌻";
}


/* =========================
   CONTINUAR
========================= */

function continuarDescubrimiento() {

    if (!esperandoContinuar) {
        return;
    }


    esperandoContinuar = false;

    mensajeFlor.classList.remove("visible");


    // Si ya encontramos las 3
    if (florActual === 3) {

        mostrarFinal();

        return;
    }


    // Desbloquear siguiente
    const siguiente =
        florActual + 1;


    desbloquearFlor(siguiente);


    instruccion.textContent =
        "Hay otra flor más adelante 🌻";
}


/* =========================
   FINAL
========================= */

function mostrarFinal() {

    tituloFlores.textContent =
        "Un pequeño detalle para ti 💛";


    instruccion.textContent =
        "Has encontrado las tres flores ✨";


    // Ocultar flores principales
    document.querySelector(".flores").style.display =
        "none";


    // Mostrar carta
    cartaFinal.classList.add("visible");


    // Iluminar escenario
    zonaFlores.classList.add(
        "final-iluminado"
    );


    mensajeFlor.classList.remove(
        "visible"
    );


    crearCorazones();
}


/* =========================
   CORAZONES
========================= */

function crearCorazones() {

    for (let i = 0; i < 18; i++) {

        const corazon =
            document.createElement("span");


        corazon.textContent = "💛";


        corazon.className =
            "corazon-final";


        corazon.style.left =
            Math.random() * 100 + "%";


        corazon.style.top =
            (55 + Math.random() * 40) + "%";


        corazon.style.fontSize =
            (12 + Math.random() * 15) + "px";


        corazon.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            corazon
        );
    }
}


/* =========================
   REINICIAR
========================= */

function volverInicio() {

    location.reload();

}