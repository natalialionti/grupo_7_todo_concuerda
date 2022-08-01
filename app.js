const express = require ("express");
const app = express();
const path = require ("path");
const port = 3030; 

app.listen (port, () => console.log("Servidor corriendo en puerto " + port));
<<<<<<< HEAD
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "views", "home.html"));});
app.get('/carrito', (req, res) => {res.sendFile(path.join(__dirname, "views", "carrito.html"));});
=======
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "views", "index.html"));});
app.get("/product-detail", (req,res)=> {res.sendFile(path.join(__dirname,"views", "productDetail.html"))})
>>>>>>> mariana
   
app.use(express.static("public"));  