const menuPC = document.querySelector('#menu');
const menuMovil = document.querySelector('#contenidoMenuMovil');
const jornada = document.querySelector('#estado');
const spinner = document.querySelector('#spinnerContainer');
const tablaClasificacion = document.querySelector('#clasificacion');
const portada = componenteLi('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/hogar_skqqnv.png', 'Portada');
const fotos = componenteLi('imagenes', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/galeria_iubt6g.png', 'Imagenes');
const ranking = componenteLi('clasificacion', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/trofeo_ui4ond.png', 'Ranking');
const calendario = componenteLi('calendario', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/calendario-reloj_uocicx.png', 'Calendario');
const parejas = componenteLi('parejas', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/bola_zh2new.png', 'Parejas');
const datosMenuPC = [portada, fotos, ranking, calendario, parejas];
const anchoPantalla = window.matchMedia("(max-width: 1400px)");
const menuResponsive = document.querySelector('#menuResponsive');
const menuLateral = document.querySelector('#getMenu');

menuLateral.appendChild(componenteMenuLateralIndex());
jornada.innerText = 'Cuarta jornada';
spinner.appendChild(componenteSpinner('loadingClasificacion'));

datosMenuPC.forEach(indice => {
    menuPC.appendChild(indice);
});

//Esto esta mal, pero funciona (deprecated)
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

document.addEventListener('DOMContentLoaded', function () {
    const URL = 'json/parejas';
    let docJsonParejas;

    fetch(URL)
        .then(response => response.json())
        .then(repos => {
            docJsonParejas = repos.map(docJson => docJson);
            docJsonParejas.sort((a, b) => b.puntos - a.puntos);//Orden

            for (let i = 0; i < docJsonParejas.length; i++) {
                document.getElementById('pareja' + i).innerText = docJsonParejas[i].pareja;
                document.getElementById('ganados' + i).innerText = docJsonParejas[i].partidosGanados;
                document.getElementById('puntos' + i).innerText = docJsonParejas[i].puntos;
            }

            eliminarComponente('loadingClasificacion');
            tablaClasificacion.style.display = 'block';
            tablaClasificacion.style.margin = 'auto';
            tablaClasificacion.style.width = 'fit-content';
        })
        .catch(err => console.log(err));
});