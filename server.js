const express = require('express');
const app = express();
app.use(express.static('static'));

app.get('/procesarimg', (req, res) => {
  res.send('Se esta procesando la imagen');
});

app.listen(3000, function () {
  console.log('Servidor andando en el puerto 3000');
});
