const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//Informar que queremos hacer uso de algunos archivos estáticos como recurso.
const publicPath = path.join(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/register', (req, res) => {
    res.redirect("/login");
});

app.post('/login', (req, res) => {
    res.redirect("/");
});