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
        if (i != indexPagina) {
            paginas[i].style.opacity = '0';
            paginas[i].style.transform = 'translateX(100%)';
            paginas[i].style.zIndex = '0';
            setTimeout(() => {
                paginas[i].style.display = 'none';
            }, 200)
            botones[i].className = "boton";
        }
        
    }
    setTimeout(() => {
        paginas[indexPagina].style.display = 'block';
    }, 400);
    setTimeout(() => {
        paginas[indexPagina].style.opacity = '1';
        paginas[indexPagina].style.transform = 'translateX(0)';
        paginas[indexPagina].style.zIndex = '1';
        var body = document.querySelector('body');
        var container = document.getElementsByClassName('container')
        container.style.width = "95%";
        body.style.width = "95%";
    }, 600);
    botones[indexPagina].className = "boton activo";
}
function generarCajas(){
    caja1 = document.getElementById('caja1');
    caja2 = document.getElementById('caja2');
    caja3 = document.getElementById('caja3');
    caja4 = document.getElementById('caja4');
    caja5 = document.getElementById('caja5');
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
    for (var i = 1; i <= 31; i++) {
        var div = document.createElement('div');
        div.classList.add('celda');
        div.style.background = '#e5ce5d';
        caja3.appendChild(div);
    }
    for (var i = 1; i <= 31; i++) {
        var div = document.createElement('div');
        div.classList.add('celda');
        caja4.appendChild(div);
    }
    for (var i = 1; i <= 31; i++) {
        var div = document.createElement('div');
        div.classList.add('celda');
        caja5.appendChild(div);
    }
}
