const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: 'Solicitação GET feita com sucesso' }));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Servidor conectado com sucesso, experimente a rota "/api"');
  }
});

const PORT =  process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor HTTP REST (GET) rodando na porta:${PORT}`);
});
