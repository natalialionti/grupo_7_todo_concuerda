const express = require('express');
const path = require('path');
const app = express();
const port = 3030; 

app.listen (port, () => console.log('Servidor corriendo en puerto http://localhost:' + port));
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "views", "home.html"));});
app.get('/detalle', (req, res) => res.sendFile(path.join(__dirname, 'views', 'detalle.html')));
   
app.use(express.static("public"));