let paginas
let botones
document.addEventListener("DOMContentLoaded", function() {
    paginas = [
        document.getElementById('pag0'),
        document.getElementById('pag1'),
        document.getElementById('pag2')
    ];
    botones = [
        document.getElementById('inicio'),
        document.getElementById('servicios'),
        document.getElementById('contacto')
    ]
});

function mostrar(indexPagina) {
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].className = "pag"
        botones[i].className = "boton";
    }
    paginas[indexPagina].className = "pag activa";
    botones[indexPagina].className = "boton activo"
}