const http = require('http');

const server = http.createServer(() => { console.log('Every request'); });
server.listen(1245);

const body = 'Hello Holberton School!';

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': body.length });
  return response.end(body, () => console.log('response sent'));
});
