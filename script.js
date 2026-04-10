// =====================================================
// CONTROL GLOBAL ABIERTO / CERRADO
// =====================================================

const boton = document.querySelector(".derecha-celular");
const menu = document.querySelector(".menu-celular");
const opcionesMenu = document.querySelectorAll(".menu-header-celular");

// abrir / cerrar
boton.addEventListener("click", () => {
  menu.classList.toggle("activox98");
  document.body.classList.toggle("no-scroll");
});

// cerrar al tocar opción
opcionesMenu.forEach(opcion => {
  opcion.addEventListener("click", () => {
    menu.classList.remove("activox98");
    document.body.classList.remove("no-scroll");
  });
});

function actualizarEstados() {

    const ahora = new Date();
    const horaActual = ahora.getHours();

    // Buscar TODOS los bloques que tengan horario
    const bloques = document.querySelectorAll("[data-apertura]");

    bloques.forEach(bloque => {

        const apertura = parseInt(bloque.dataset.apertura);
        const cierre = parseInt(bloque.dataset.cierre);

        const abierto = bloque.querySelector(".abierto");
        const cerrado = bloque.querySelector(".cerrado");

        if (!abierto || !cerrado) return;

        let estaAbierto;

        // horario normal
        if (apertura < cierre) {
            estaAbierto =
                horaActual >= apertura &&
                horaActual < cierre;
        }
        // pasa medianoche
        else {
            estaAbierto =
                horaActual >= apertura ||
                horaActual < cierre;
        }

        if (estaAbierto) {
            abierto.style.display = "flex";
            cerrado.style.display = "none";
        } else {
            abierto.style.display = "none";
            cerrado.style.display = "flex";
        }

    });
}


// Ejecutar
actualizarEstados();

// Revisar cada segundo
setInterval(actualizarEstados, 1000);

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];

function actualizarDiaHoy() {

    const hoy = new Date().getDay();
    const nombreHoy = diasSemana[hoy];

    document.querySelectorAll(".dias").forEach(dia => {
        dia.classList.remove("hoy");

        const nombreDia = dia.querySelector(".dia-p").textContent.trim();

        if (nombreDia === nombreHoy) {
            dia.classList.add("hoy");
        }
    });
}

// ejecutar al cargar
actualizarDiaHoy();

// revisar cada 30 segundos
setInterval(actualizarDiaHoy, 1000);

const opciones = document.querySelectorAll(".opciones-carta");

opciones.forEach(boton => {
    boton.addEventListener("click", () => {

        // quitar activo a todos
        opciones.forEach(b => b.classList.remove("activo"));

        // activar el clickeado
        boton.classList.add("activo");

    });
});
const botones = document.querySelectorAll(".opciones-carta");
const contenidos = document.querySelectorAll(".tab-contenido");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const tab = boton.dataset.tab;

        // botones
        botones.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");

        // contenidos
        contenidos.forEach(c => {
            c.classList.remove("activo");
        });

        document.getElementById(tab).classList.add("activo");

    });

});
const botonesTabs = document.querySelectorAll(".opciones-carta-platos");
const secciones = document.querySelectorAll(".comida-cards");

botonesTabs.forEach(boton => {

    boton.addEventListener("click", () => {

        const tab = boton.dataset.tab;

        // quitar activo botones
        botonesTabs.forEach(b => b.classList.remove("activo2"));
        boton.classList.add("activo2");

        // ocultar todas las secciones
        secciones.forEach(sec => sec.classList.remove("activo2"));

        // mostrar la correcta
        document.getElementById(tab).classList.add("activo2");

    });

});
const botonesX9 = document.querySelectorAll(".menuTabsX9-btn");
const panelesX9 = document.querySelectorAll(".menuTabsX9-panel");

botonesX9.forEach(boton => {
    boton.addEventListener("click", () => {

        botonesX9.forEach(b => b.classList.remove("activoX9"));
        panelesX9.forEach(p => p.classList.remove("activoX9"));

        boton.classList.add("activoX9");

        const id = boton.dataset.x9;
        document.getElementById(id).classList.add("activoX9");
    });
});

document.getElementById("btn-whatsapp").addEventListener("click", function(e) {
    e.preventDefault();

    // datos
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const personas = document.getElementById("personas").value;
    const telefono = document.getElementById("telefono").value;
    const ocasion = document.getElementById("ocasion").value;
    const nota = document.getElementById("nota-adicional").value;

    // validación básica
    if(!nombre || !fecha || !hora || !personas || !telefono){
        alert("Completa los campos obligatorios");
        return;
    }

    // mensaje
    const mensaje =
`🍽️ *Nueva Reserva*

👤 Nombre: ${nombre}
📅 Fecha: ${fecha}
⏰ Hora: ${hora}
👥 Personas: ${personas}
📞 Teléfono: ${telefono}
🎉 Ocasión: ${ocasion || "Ninguna"}
📝 Notas: ${nota || "Sin notas"}`;

    // número del restaurante (CAMBIAR)
    const numero = "59892933423"; // sin + ni espacios

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});
