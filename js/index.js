
// =====================================
// NAVEGACIÓN DEL MENÚ PORTAFOLIO
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // Seleccionar la sección Portafolio
    const portafolio = document.querySelector("#portafolio");

    // Seleccionar la sección Novedades
    const novedades = document.querySelector("#novedades");


    // =====================================
    // MOVIMIENTO HACIA PORTAFOLIO
    // =====================================

    const enlacesPortafolio = document.querySelectorAll(
        'a[href="#portafolio"]'
    );

    enlacesPortafolio.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            evento.preventDefault();

            portafolio.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // =====================================
    // MOVIMIENTO HACIA NOVEDADES
    // =====================================

    const enlacesNovedades = document.querySelectorAll(
        'a[href="#novedades"]'
    );

    enlacesNovedades.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            evento.preventDefault();

            novedades.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

});
