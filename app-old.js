const http = require('http');

http.createServer((req, res)=>{

  //res.writeHead(200, {'Content-Type': 'application/json'})
  //res.setHeader('Content-Disposition','attachment; filename=lista.csv');
  //res.writeHead(200, {'Content-Type': 'application/csv'})

  const persona = {
    id:1,
    nombre:'Diego'
  }



  //res.write( JSON.stringify(persona) );

  res.write('Hola mundo');

  res.end();
}).listen(8080);

console.log('Escuchado en el puerto',8080)