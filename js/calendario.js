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
  let datosPartido;
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
    itemBoton.innerHTML = `Jornada: ${calendario[i].jornada} - Límite: ${calendario[i].fecha}`;

    // Contenido
    contenidoDelAcordeon.id = `${calendario[i].jornada}`;
    contenidoDelAcordeon.className = 'accordion-collapse collapse';
    contenidoDelAcordeon.setAttribute('data-bs-parent', `#${id}`);
    cuerpoAcordeon.className = 'accordion-body';

    for (let j = 0; j < calendario[i].partidos.length; j++) {
      if (j < calendario[i].partidos.length - 1) {// Reviso si es el último apunte para no poner la linea final
        if (calendario[i].partidos[j].estado === 'Jugado') {// Depende del estado del partido doy un color u otro
          datosPartido = `
            <h5 class='text-center'>${calendario[i].partidos[j].parejas}</h5>
            <h6 class='text-center text-success'>${calendario[i].partidos[j].estado}</h6>
            <hr>
          `
        } else {
          datosPartido = `
            <h5 class='text-center'>${calendario[i].partidos[j].parejas}</h5>
            <h6 class='text-center text-danger'>${calendario[i].partidos[j].estado}</h6>
            <hr>
          `
        }

      } else {
        if (calendario[i].partidos[j].estado === 'Jugado') {
          datosPartido = `
            <h5 class='text-center'>${calendario[i].partidos[j].parejas}</h5>
            <h6 class='text-center text-success'>${calendario[i].partidos[j].estado}</h6>
          `
        } else if (calendario[i].partidos[j].estado === 'Descanso') {// Los Descanso siempre estan en el último lugar, por eso solo están aquí
          if (calendario[i].partidos[j].estado === 'Jugado') {
            datosPartido = `
              <h5 class='text-center'>${calendario[i].partidos[j].parejas}</h5>
              <h6 class='text-center text-info'>${calendario[i].partidos[j].estado}</h6>
            `
          } else {
            datosPartido = `
              <h5 class='text-center'>${calendario[i].partidos[j].parejas}</h5>
              <h6 class='text-center text-info'>${calendario[i].partidos[j].estado}</h6>
            `
          }
        } else {
          datosPartido = `
            <h5 class='text-center'>${calendario[i].partidos[j].parejas}</h5>
            <h6 class='text-center text-danger'>${calendario[i].partidos[j].estado}</h6>
          `
        }
      }

      cuerpoAcordeon.innerHTML += datosPartido;
    }

    contenidoDelAcordeon.appendChild(cuerpoAcordeon);
    itemAcordeon.appendChild(encabezadoItem);
    itemAcordeon.appendChild(itemBoton);
    itemAcordeon.appendChild(contenidoDelAcordeon);
    acordeon.appendChild(itemAcordeon);
  }

  componente.appendChild(acordeon);

  return componente;
}