function eliminarComponente(idDelComponente) {
    return document.getElementById(idDelComponente).remove();
}

function componenteLi(enlaceAlQueRedirige, srcImagen, texto) {
    const nodoLi = document.createElement('li');
    const ancla = document.createElement('a');
    const imagen = document.createElement('img');
    const parrafo = document.createElement('p');

    nodoLi.className = 'nav nav-pills';

    ancla.href = enlaceAlQueRedirige;
    ancla.className = 'nav-link fs-5 text-light d-flex flex-column justify-content-center align-items-center blur-out';

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

function componenteLiMovil(enlaceAlQueRedirige, srcImagen, texto) {
    const nodoLi = document.createElement('li');
    const ancla = document.createElement('a');
    const imagen = document.createElement('img');
    const parrafo = document.createElement('p');

    nodoLi.className = 'nav nav-pills my-3';

    ancla.href = enlaceAlQueRedirige;
    ancla.className = 'nav-link fs-5 text-light d-flex align-items-center blur-out';
    ancla.style.width = '95%';

    imagen.src = srcImagen;
    imagen.className = 'img-fluid';
    imagen.style.width = '60px';

    parrafo.className = 'fw-medium ms-5';
    parrafo.innerText = texto;
    parrafo.style.width = '100px';
    parrafo.style.textAlign = 'center';

    ancla.appendChild(imagen);
    ancla.appendChild(parrafo);
    nodoLi.appendChild(ancla);

    return nodoLi;
}

function componenteSpinner(idDelComponente) {
    const spinner = document.createElement('div');

    spinner.className = 'spinner-border my-5'
    spinner.style.width = '3rem';
    spinner.style.height = '3rem';
    spinner.role = 'status';
    spinner.id = idDelComponente;

    return spinner;
}

function componenteMenuLateralIndex() {
    const menuLateral = document.createElement('div');
    const divCabecera = document.createElement('div');
    const tituloMenu = document.createElement('h2');
    const botonCierre = '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>';
    const divContenido = document.createElement('div');
    const textoContenido = document.createElement('ul');
    const portadaMovil = componenteLiMovil('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/hogar_skqqnv.png', 'Portada');
    const fotosMovil = componenteLiMovil('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/galeria_iubt6g.png', 'Imagenes');
    const rankingMovil = componenteLiMovil('pages/clasificacion.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/trofeo_ui4ond.png', 'Ranking');
    const calendarioMovil = componenteLiMovil('pages/calendario.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/calendario-reloj_uocicx.png', 'Calendario');
    const parejasMovil = componenteLiMovil('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/bola_zh2new.png', 'Parejas');
    const datosMenuMovil = [portadaMovil, fotosMovil, rankingMovil, calendarioMovil, parejasMovil];

    menuLateral.className = 'offcanvas offcanvas-start';
    menuLateral.tabIndex = '-1';
    menuLateral.id = 'menuLateral';
    menuLateral.setAttribute('aria-labelledby', 'offcanvasExampleLabel');

    divCabecera.className = 'offcanvas-header';

    tituloMenu.className = 'offcanvas-title';
    tituloMenu.innerHTML = 'Super Padel Bros Tour <span class="signature">2</span>';

    divCabecera.appendChild(tituloMenu);
    divCabecera.innerHTML += botonCierre;
    menuLateral.appendChild(divCabecera);

    divContenido.className = 'offcanvas-body';

    textoContenido.id = 'contenidoMenuMovil';
    datosMenuMovil.forEach(item => {
        textoContenido.appendChild(item);
    });

    divContenido.appendChild(textoContenido);
    menuLateral.appendChild(divContenido);

    return menuLateral;
}

function componenteMenuLateral() {
    const menuLateral = document.createElement('div');
    const divCabecera = document.createElement('div');
    const tituloMenu = document.createElement('h2');
    const botonCierre = '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>';
    const divContenido = document.createElement('div');
    const textoContenido = document.createElement('ul');
    const portadaMovil = componenteLiMovil('../index.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/hogar_skqqnv.png', 'Portada');
    const fotosMovil = componenteLiMovil('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/galeria_iubt6g.png', 'Imagenes');
    const rankingMovil = componenteLiMovil('pages/clasificacion.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/trofeo_ui4ond.png', 'Ranking');
    const calendarioMovil = componenteLiMovil('pages/calendario.html', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/calendario-reloj_uocicx.png', 'Calendario');
    const parejasMovil = componenteLiMovil('#', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/bola_zh2new.png', 'Parejas');
    const datosMenuMovil = [portadaMovil, fotosMovil, rankingMovil, calendarioMovil, parejasMovil];

    menuLateral.className = 'offcanvas offcanvas-start';
    menuLateral.tabIndex = '-1';
    menuLateral.id = 'menuLateral';
    menuLateral.setAttribute('aria-labelledby', 'offcanvasExampleLabel');

    divCabecera.className = 'offcanvas-header';

    tituloMenu.className = 'offcanvas-title';
    tituloMenu.innerHTML = 'Super Padel Bros Tour <span class="signature">2</span>';

    divCabecera.appendChild(tituloMenu);
    divCabecera.innerHTML += botonCierre;
    menuLateral.appendChild(divCabecera);

    divContenido.className = 'offcanvas-body';

    textoContenido.id = 'contenidoMenuMovil';
    datosMenuMovil.forEach(item => {
        textoContenido.appendChild(item);
    });

    divContenido.appendChild(textoContenido);
    menuLateral.appendChild(divContenido);

    return menuLateral;
}

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
