const menuPC = document.querySelector('#menu');
const menuMovil = document.querySelector('#contenidoMenuMovil');
const jornada = document.querySelector('#estado');
const spinner = document.querySelector('#spinnerContainer');
const tablaClasificacion = document.querySelector('#clasificacion');
const portada = componenteLi('#', 'img/hogar.png', 'Portada');
const fotos = componenteLi('#', 'img/galeria.png', 'Imagenes');
const ranking = componenteLi('#', 'img/trofeo.png', 'Ranking');
const calendario = componenteLi('#', 'img/calendario-reloj.png', 'Calendario');
const parejas = componenteLi('#', 'img/bola.png', 'Parejas');
const datosMenuPC = [portada, fotos, ranking, calendario, parejas];
const portadaMovil = componenteLiMovil('#', 'img/hogar.png', 'Portada');
const fotosMovil = componenteLiMovil('#', 'img/galeria.png', 'Imagenes');
const rankingMovil = componenteLiMovil('#', 'img/trofeo.png', 'Ranking');
const calendarioMovil = componenteLiMovil('#', 'img/calendario-reloj.png', 'Calendario');
const parejasMovil = componenteLiMovil('#', 'img/bola.png', 'Parejas');
const datosMenuMovil = [portadaMovil, fotosMovil, rankingMovil, calendarioMovil, parejasMovil];
const anchoPantalla = window.matchMedia("(max-width: 1400px)");
const menuResponsive = document.querySelector('#menuResponsive');
const menuLateral = document.querySelector('#getMenu');

menuLateral.appendChild(componenteMenuLateral());
jornada.innerText = 'Cuarta jornada';
spinner.appendChild(componenteSpinner('loadingClasificacion'));

datosMenuPC.forEach(indice => {
    menuPC.appendChild(indice);
});

mediaQuery(anchoPantalla);
anchoPantalla.addListener(mediaQuery);

function mediaQuery(anchoPantalla) {
    const titulo = document.querySelector('#titulo');
    const cabecera = document.querySelector('h1');

    if (anchoPantalla.matches) {
        titulo.className = 'col col-9';
        cabecera.innerHTML = 'SPBT <span class="signature">2</span>';
        menuResponsive.style.display = 'flex';
        menuResponsive.style.alignItems = 'center';
        menuResponsive.style.justifyContent = 'center';

    } else {
        titulo.className = 'col col-5';
        cabecera.innerHTML = 'Super Padel Bros Tour <span class="signature">2</span>';
        menuResponsive.style.display = 'none';
    }
}
