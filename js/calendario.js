const URL = '../json/calendario.json';
const contenedorCalendario = document.querySelector('#calendario');

fetch(URL)
    .then(response => response.json())
    .then(repos => {
        jsonCalendario = repos.map(docJson => docJson);
        contenedorCalendario.appendChild(componenteAcordeonCalendario('acordeonCalendario', jsonCalendario));
    })
    .catch(err => console.log(err));

function componenteAcordeonCalendario(id, calendario) {
    let acordeon;
    let itemAcordeon;
    let encabezadoItem;
    let itemBoton;
    let contenidoDelAcordeon;
    let cuerpoAcordeon;
    let componente = document.createElement('div');

    acordeon = document.createElement('div');
    acordeon.className = 'accordion';
    acordeon.id = id;

    for (let i = 0; i < calendario.length; i++) {
        itemAcordeon = document.createElement('div');
        encabezadoItem = document.createElement('h2');
        itemBoton = document.createElement('button');
        contenidoDelAcordeon = document.createElement('div');
        cuerpoAcordeon = document.createElement('div');

        // Encabezado y boton
        itemAcordeon.className = 'accordion-item';
        encabezadoItem.className = 'accordion-header';
        itemBoton.className = 'accordion-button';
        itemBoton.type = 'button';
        itemBoton.setAttribute('data-bs-toggle', 'collapse');
        itemBoton.setAttribute('data-bs-target', `#${calendario[i].jornada}`);
        itemBoton.setAttribute('aria-expanded', 'true');
        itemBoton.setAttribute('aria-controls', `collapse${i}`);
        itemBoton.innerHTML = `Jornada: ${calendario[i].jornada}`;

        // Contenido
        contenidoDelAcordeon.id = `${calendario[i].jornada}`;
        contenidoDelAcordeon.className = 'accordion-collapse collapse';
        contenidoDelAcordeon.setAttribute('data-bs-parent', `#${id}`);
        cuerpoAcordeon.className = 'accordion-body';

        calendario[i].partidos.forEach(partido => {
            cuerpoAcordeon.innerHTML += `
                    <h5 class='text-center'>${partido.parejas}</h5>
                    <h6 class='text-center'>${partido.estado}</h6>
                    <hr>
                `;
        });

        contenidoDelAcordeon.appendChild(cuerpoAcordeon);
        itemAcordeon.appendChild(encabezadoItem);
        itemAcordeon.appendChild(itemBoton);
        itemAcordeon.appendChild(contenidoDelAcordeon);
        acordeon.appendChild(itemAcordeon);
    }

    componente.appendChild(acordeon);

    return componente;
}