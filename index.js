const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const app = express();

app.use(serveStatic(__dirname + '/../client/dist'));
//serve vue app
app.listen(8080, () => {
  console.log('Server abierto en el puerto 8080');
});
