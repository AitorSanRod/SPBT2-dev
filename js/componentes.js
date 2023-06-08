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

    spinner.className = 'spinner-border'
    spinner.style.width = '3rem';
    spinner.style.height = '3rem';
    spinner.role = 'status';
    spinner.id = idDelComponente;

    return spinner;
}

function componenteMenuLateral() {
    const menuLateral = document.createElement('div');
    const divCabecera = document.createElement('div');
    const tituloMenu = document.createElement('h5');
    const botonCierre = '<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>';
    const divContenido = document.createElement('div');
    const textoContenido = document.createElement('ul');
    const portadaMovil = componenteLiMovil('#', 'img/hogar.png', 'Portada');
    const fotosMovil = componenteLiMovil('#', 'img/galeria.png', 'Imagenes');
    const rankingMovil = componenteLiMovil('#', 'img/trofeo.png', 'Ranking');
    const calendarioMovil = componenteLiMovil('#', 'img/calendario-reloj.png', 'Calendario');
    const parejasMovil = componenteLiMovil('#', 'img/bola.png', 'Parejas');
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
