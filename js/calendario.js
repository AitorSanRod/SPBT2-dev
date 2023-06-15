const URL = '../json/calendario.json';
const contenedorCalendario = document.querySelector('#calendario');

fetch(URL)
    .then(response => response.json())
    .then(repos => {
        jsonCalendario = repos.map(docJson => docJson);
        contenedorCalendario.innerHTML = componenteAcordeon(jsonCalendario);
    })
    .catch(err => console.log(err));