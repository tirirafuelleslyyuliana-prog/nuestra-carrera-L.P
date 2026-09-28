/* =========================================
   CAMBIAR DE PANTALLA
========================================= */

function mostrarPantalla(id) {

    document.querySelectorAll(".pantalla").forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    var pantallaNueva = document.getElementById(id);

    if (pantallaNueva) {
        pantallaNueva.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================
   COMENZAR
========================================= */

function comenzar() {

    mostrarPantalla("comienzo");

}


/* =========================================
   IR A OTRA PARTE
========================================= */

function irA(id) {

    mostrarPantalla(id);

}


/* =========================================
   TARJETAS DE AMOR
========================================= */

function mostrarMensaje(tarjeta) {

    tarjeta.classList.toggle("abierta");

}


/* =========================================
   REINICIAR
========================================= */

function reiniciar() {

    location.reload();

}


/* =========================================
   CONFETI FINAL
========================================= */

function crearConfeti() {

    var contenedor =
        document.getElementById("confeti");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    var emojis = [
        "❤️",
        "🏎️",
        "🔥",
        "✨",
        "🏁",
        "💕",
        "⭐"
    ];

    for (var i = 0; i < 80; i++) {

        var elemento =
            document.createElement("div");

        elemento.classList.add("confeti");

        elemento.innerText =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        elemento.style.left =
            Math.random() * 100 + "%";

        elemento.style.animationDelay =
            Math.random() * 3 + "s";

        elemento.style.fontSize =
            (15 + Math.random() * 25) + "px";

        elemento.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        contenedor.appendChild(elemento);
    }

}


/* =========================================
   DETECTAR CUANDO LLEGAMOS A LA META
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        var meta =
            document.getElementById("meta");

        if (!meta) {
            return;
        }

        var observador =
            new MutationObserver(function() {

                if (
                    meta.classList.contains("activa")
                ) {

                    crearConfeti();

                }

            });

        observador.observe(meta, {
            attributes: true,
            attributeFilter: ["class"]
        });

    }
);