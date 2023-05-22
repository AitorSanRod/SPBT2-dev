const menuPC = document.querySelector('#menu');
const jornada = document.querySelector('#estado');
const portada = componenteLi('#', 'img/hogar.png', 'Portada');
const fotos = componenteLi('#', 'img/galeria.png', 'Imagenes');
const ranking = componenteLi('#', 'img/trofeo.png', 'Ranking');
const calendario = componenteLi('#', 'img/calendario-reloj.png', 'Calendario');
const parejas = componenteLi('#', 'img/bola.png', 'Parejas');
const datosMenuPC = [portada, fotos, ranking, calendario, parejas];

jornada.innerText = 'Cuarta jornada';

datosMenuPC.forEach(indice => {
    menuPC.appendChild(indice);
});

function componenteLi(enlaceAlQueRedirige, srcImagen, texto) {
    const nodoLi = document.createElement('li');
    const ancla = document.createElement('a');
    const imagen = document.createElement('img');
    const parrafo = document.createElement('p');

    nodoLi.className = 'nav nav-pills';

    ancla.href = enlaceAlQueRedirige;
    ancla.className = 'nav-link fs-5 text-light d-flex flex-column justify-content-center align-items-center';

    imagen.src = srcImagen;
    imagen.className = 'img-fluid';
    imagen.style.width = '60px';

    parrafo.className = 'fw-medium';
    parrafo.innerText = texto;
    parrafo.style.width = '100px';
    parrafo.style.textAlign = 'center';

    ancla.appendChild(imagen);
    ancla.appendChild(parrafo);
    nodoLi.appendChild(ancla);

    return nodoLi;
}