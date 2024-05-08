const express = require('express');
const connection = require('./db');

const app = express();
const port = 3000;

// Conectar a la base de datos MySQL
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener todos los datos
app.get('/datos', (req, res) => {
    connection.query('SELECT * FROM tu_tabla', (error, results) => {
        if (error) {
            console.error('Error al obtener datos:', error);
            res.status(500).send('Error interno del servidor');
            return;
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
