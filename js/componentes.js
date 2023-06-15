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

function componenteAcordeon(calendario) {
    let acordeon;
    let partidos;
    let pareja;
    let estado;

    for (let i = 0; i < calendario.length; i++) {
        acordeon = `<div class="accordion my-3" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    ${calendario[i].jornada}:${calendario[i].fecha}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">` ;

        partidos = calendario[i].partidos;

        for (let j = 0; j < partidos.length; j++) {
            pareja = document.createElement('p');
            estado = document.createElement('p');

            pareja.innerText = partidos[j].parejas;
            estado.innerText = partidos[j].estado;

            if (estado.innerText == 'Pendiente') {
                estado.style = 'color: red;';
            } else if (estado.innerText == 'Jugado') {
                estado.style = 'color: green;';
            } else {
                estado.style = 'color: black;';
            }

            acordeon.innerHTML = acordeon + pareja;
            acordeon.innerHTML = acordeon + estado;
            acordeon.innerHTML = acordeon + `<hr>`;

            console.log(acordeon)
        }
        acordeon += `</div>
                </div>
            </div>
        </div>`
    }

    return acordeon;
}
