const http = require('http');

// Configura el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
<<<<<<< HEAD
  res.end('Hola, MundosE! 25/08 DEV nuevo\n');
=======
  res.end('Hola, MundosE! 25/08 DEVdev\n');
>>>>>>> e59eb15f28fc6eb0cd6de4859aabf3097d57286a
=======
  res.end('Hola, MundosE! 25/08 main\n');
>>>>>>> parent of e4a90fa (main vsc)
}); 

// Inicia el servidor y escucha en el puerto configurado
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
  
