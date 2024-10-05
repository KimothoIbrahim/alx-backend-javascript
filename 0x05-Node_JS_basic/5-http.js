const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer();

app.listen(1245);

app.on('request', (request, response) => {
  if (request.url === '/') {
    const body = 'Hello Holberton School!';
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(body);
    response.end();
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        const body = 'This is the list of our students\n';
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(body);
        response.write(data);
        response.end();
      });
  }
});
