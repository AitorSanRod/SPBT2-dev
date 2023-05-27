document.addEventListener('DOMContentLoaded', function () {
    const URL = 'json/parejas.json';
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