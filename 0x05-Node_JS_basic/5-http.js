/**
 * A little more complex HTTP server that contains 2 different routes.
 * This is for older versions. For node 16 or later, import from 'node:http'.
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (req, res) => {
  if (req.url === '/') {
    // Logic for the root route.
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  } else if (req.url === '/students') {
    // Logic for the /students route.
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    // Async handling.
    countStudents(process.argv[2])
      .then((result) => {
        const responseText = `${result}`;

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.write(Buffer.from(responseText));
      })
      .catch((err) => {
        res.statusCode = 500; // Internal server error
        res.end(err.message);
      });
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
