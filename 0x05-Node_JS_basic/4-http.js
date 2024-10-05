const http = require('http');

const app = http.createServer();
app.listen(1245);

const body = 'Hello Holberton School!';

app.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': body.length });
  return response.end(body);
});

module.exports = app;
