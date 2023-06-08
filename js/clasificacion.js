const URL = '../json/jugadores.json';
const tabla = document.querySelector('#tabla');
let jugadores;
let nuevaLinea;
let nuevaCabecera;
let nombre;
let puntos;
let jugados;
let ganados;
let longitud;

fetch(URL)
    .then(response => response.json())
    .then(repos => {
        jugadores = repos.map(docJson => docJson);

        longitud = jugadores.length;
        jugadores.sort((a, b) => b.puntos - a.puntos);//Orden

        for (let i = 0; i < longitud; i++) {
            nuevaLinea = document.createElement('tr');
            nuevaCabecera = document.createElement('th');
            nuevaCabecera.innerText = i + 1;

            nombre = document.createElement('td');
            nombre.innerText = jugadores[i].nombre;

            puntos = document.createElement('td');
            puntos.innerText = jugadores[i].puntos;

            jugados = document.createElement('td');
            jugados.innerText = jugadores[i].partidosJugados;

            ganados = document.createElement('td');
            ganados.innerText = jugadores[i].partidosGanados;

            nuevaLinea.appendChild(nuevaCabecera);
            nuevaLinea.appendChild(nombre);
            nuevaLinea.appendChild(puntos);
            nuevaLinea.appendChild(jugados);
            nuevaLinea.appendChild(ganados);

            tabla.appendChild(nuevaLinea);
        }

        eliminarComponente('loadingClasificacion');

    })
    .catch(err => console.log(err));