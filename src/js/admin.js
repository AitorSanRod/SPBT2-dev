const spinnerContainer = document.querySelector('#loadingClasificacion');
const opciones = document.querySelector('#opciones');
const nuevoPartido = componenteLiGrande('/nuevo-partido', 'https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/hogar_skqqnv.png', 'Nuevo partido');

spinnerContainer.style.display = 'none';
opciones.appendChild(nuevoPartido);