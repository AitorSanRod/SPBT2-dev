const spinnerContainer = document.querySelector('#loadingClasificacion');
const divFormulario = document.querySelector('#formulario');
const formulario = document.querySelector('#partido');
const envio = '/guardar-partido';
const jsonParejas = '/json/parejas'

spinnerContainer.style.display = 'none';

puntuacionSets('puntuaciones');

fetch(jsonParejas)
    .then(res => res.json())
    .then(data => {
        let optionSet;
        let selects = document.getElementsByClassName('parejas');

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < selects.length; j++) {
                optionSet = document.createElement('option');
                optionSet.value = data[i].pareja;
                optionSet.innerHTML = data[i].pareja;
                selects[j].appendChild(optionSet);
            }
        }
    })


formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    let parejaGanadora = document.querySelector('#nombre').value;
    let ParejaPerdedora = document.querySelector('#nombre').value;
    let puntoParejaGanadora = document.querySelector('#nombre').value;
    let PuntosParejaPerdedora = document.querySelector('#nombre').value;
    const jsonData = {
        nombre: nombre,
    };

    fetch(formulario, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData)
    })
        .then(response => response.json())
        .then(() => {
            console.log('Datos guardados con éxito.');
        })
        .catch(error => {
            console.error('Error al guardar los datos:', error);
        });
});

function puntuacionSets(clase) {
    let optionSet;
    let selects = document.getElementsByClassName(clase);

    for (let i = 0; i < selects.length; i++) {
        for (let j = 0; j < 8; j++) {
            optionSet = document.createElement('option');
            optionSet.value = j;
            optionSet.innerHTML = j;
            selects[i].appendChild(optionSet);
        }
    }
}
