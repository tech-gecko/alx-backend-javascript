/**
 * A small HTTP server, the 'Hello World' of Node.js.
 * This is for older versions. For node 16 or later, import from 'node:http'.
 */
const { createServer } = require('http');

const app = () => {
  const hostname = '127.0.0.1';
  const port = 1245;
  console.log('Starting server setup...');
  const server = createServer((req, res) => {
    console.log('Received a request...');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

app();
