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

function componenteSpinner(idDelComponente) {
    const spinner = document.createElement('div');

    spinner.className = 'spinner-border'
    spinner.style.width = '3rem';
    spinner.style.height = '3rem';
    spinner.role = 'status';
    spinner.id = idDelComponente;

    return spinner;
}