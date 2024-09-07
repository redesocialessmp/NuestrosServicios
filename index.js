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
    ];
    generarCajas()
});

function mostrar(indexPagina) {
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].className = "pag";
        botones[i].className = "boton";
    }
    paginas[indexPagina].className = "pag activa";
    botones[indexPagina].className = "boton activo";
}
function generarCajas(){
    caja1 = document.getElementById('caja1')
    caja2 = document.getElementById('caja2')
    for (var i = 1; i <= 31; i++) {
        var div = document.createElement('div');
        div.classList.add('celda');
        if (i < 7){
            div.style.background = '#e5ce5d';
        }
        caja1.appendChild(div);
    }
    for (var i = 1; i <= 31; i++) {
        var div = document.createElement('div');
        div.classList.add('celda');
        caja2.appendChild(div);
    }
}
