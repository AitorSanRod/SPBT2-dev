const express = require('express');
const bodyParser = require('body-parser');
const colors = require('picocolors');
const fs = require('fs');
const app = express();
const PORT = 3000;
const documento = '/src/docs/datos.json';

// Middleware para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(PORT, () => {// Iniciamos el servidor
    console.log(colors.green(`Servidor en ejecución en http://localhost:${PORT}`));
    getDocuments();
    postDocuments();
});

function getDocuments() {
    getHtml();
    getStyle();
    getJs();
    getJson();
    getImages();
}

function postDocuments() {
    app.post('/guardar_datos', (req, res) => {// Ruta para guardar los datos en el archivo JSON
        try {
            const jsonData = JSON.stringify(req.body, null, 4); // Convertimos el objeto a JSON con formato legible
            console.log(`Datos:\n${jsonData}`);
            fs.writeFileSync(__dirname + documento, jsonData); // Guardamos los datos en el archivo datos.json
            res.json(jsonData);

        } catch (error) {
            console.error('Error al guardar los datos:', error);
            req.status(500).json({ error: 'Ha ocurrido un error al guardar los datos.' });
        }
    });
}

function getHtml() {
    app.get('/', (req, res) => {// Enviar pagina html
        res.sendFile(__dirname + '/index.html');
    });

    app.get('/calendario', (req, res) => {
        res.sendFile(__dirname + '/src/pages/calendario.html');
    });

    app.get('/clasificacion', (req, res) => {
        res.sendFile(__dirname + '/src/pages/clasificacion.html');
    });

    app.get('/admin', (req, res) => {
        res.sendFile(__dirname + '/src/pages/admin.html');
    });

    app.get('/nuevo-partido', (req, res) => {
        res.sendFile(__dirname + '/src/pages/nuevoPartido.html');
    });

    app.get('/close-server', (req) => {
        try {
            cerrarServidor();
        } catch (error) {
            req.json(error);
        }
    });
}

function getStyle() {
    app.get('/style/main-style', (req, res) => {
        res.sendFile(__dirname + '/src/style/main-style.css');
    });

    app.get('/style/calendario', (req, res) => {
        res.sendFile(__dirname + '/src/style/calendario.css');
    });
}

function getJs() {
    app.get('/js/main', (req, res) => {// Abrir /js para recoger el main
        res.sendFile(__dirname + '/src/js/main.js');
    });

    app.get('/js/componentes', (req, res) => {
        res.sendFile(__dirname + '/src/js/componentes.js');
    });

    app.get('/js/index', (req, res) => {
        res.sendFile(__dirname + '/src/js/index.js');
    });

    app.get('/js/calendario', (req, res) => {
        res.sendFile(__dirname + '/src/js/calendario.js');
    });

    app.get('/js/clasificacion', (req, res) => {
        res.sendFile(__dirname + '/src/js/clasificacion.js');
    });

    app.get('/js/admin', (req, res) => {
        res.sendFile(__dirname + '/src/js/admin.js');
    });

    app.get('/js/formulario', (req, res) => {
        res.sendFile(__dirname + '/src/js/formulario.js');
    });
}

function getJson() {
    app.get('/json/parejas', (req, res) => {
        res.sendFile(__dirname + '/src/json/parejas.json');
    });

    app.get('/json/calendario', (req, res) => {
        res.sendFile(__dirname + '/src/json/calendario.json');
    });

    app.get('/json/jugadores', (req, res) => {
        res.sendFile(__dirname + '/src/json/jugadores.json');
    });

    app.get('/json/partidos', (req, res) => {
        res.sendFile(__dirname + '/src/json/partidos.json');
    });
}

function getImages() {
    app.get('/img/ico', (req, res) => {
        res.sendFile(__dirname + '/src/img/ico/tenis-ico.ico');
    });
}

function cerrarServidor() {
    server.close(() => {
        console.log(colors.red(`http://localhost:${PORT} cerrado.`));
    });
}