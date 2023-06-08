const menuPC = document.querySelector('#menu');
const menuMovil = document.querySelector('#contenidoMenuMovil');
const jornada = document.querySelector('#estado');
const spinner = document.querySelector('#spinnerContainer');
const tablaClasificacion = document.querySelector('#clasificacion');
const portada = componenteLi('../index.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/hogar_skqqnv.png', 'Portada');
const fotos = componenteLi('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/galeria_iubt6g.png', 'Imagenes');
const ranking = componenteLi('pages/clasificacion.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/trofeo_ui4ond.png', 'Ranking');
const calendario = componenteLi('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/calendario-reloj_uocicx.png', 'Calendario');
const parejas = componenteLi('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/bola_zh2new.png', 'Parejas');
const datosMenuPC = [portada, fotos, ranking, calendario, parejas];
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
