const menuPC = document.querySelector('#menu');
const jornada = document.querySelector('#estado');
const spinner = document.querySelector('#spinnerContainer');
const tablaClasificacion = document.querySelector('#clasificacion');
const portada = componenteLi('#', 'img/hogar.png', 'Portada');
const fotos = componenteLi('#', 'img/galeria.png', 'Imagenes');
const ranking = componenteLi('#', 'img/trofeo.png', 'Ranking');
const calendario = componenteLi('#', 'img/calendario-reloj.png', 'Calendario');
const parejas = componenteLi('#', 'img/bola.png', 'Parejas');
const datosMenuPC = [portada, fotos, ranking, calendario, parejas];
const anchoPantalla = window.matchMedia("(max-width: 1400px)");

mediaQuery(anchoPantalla);
anchoPantalla.addListener(mediaQuery);

document.addEventListener('DOMContentLoaded', function () {
    const URL = 'json/parejas.json';
    let docJsonParejas;

    jornada.innerText = 'Cuarta jornada';
    spinner.appendChild(componenteSpinner('loadingClasificacion'));

    datosMenuPC.forEach(indice => {
        menuPC.appendChild(indice);
    });

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

function mediaQuery(anchoPantalla) {
    const titulo = document.querySelector('#titulo');

    if (anchoPantalla.matches) {
        titulo.className = 'col col-12'

    } else {
        titulo.className = 'col col-5'
    }
}


