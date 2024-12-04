/**
 * A little more complex HTTP server that contains 2 different routes.
 * This is for older versions. For node 16 or later, import from 'node:http'.
 */
const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const app = () => {
  const hostname = '127.0.0.1';
  const port = 1245;

  console.log('Starting server setup...');
  const server = createServer((req, res) => {
    if (req.url === '/') {
      // Logic for the root route.
      console.log("Received a request for '/'...");
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      // Logic for the /students route.
      console.log("Received a request for '/students'...");
      res.setHeader('Content-Type', 'text/plain');
      // Async handling.
      countStudents(process.argv[2])
        .then((result) => {
          res.statusCode = 200;
          res.end(`This is the list of our students\n${result}`)
        })
        .catch((err) => {
          res.statusCode = 500; // Internal server error
          res.end(err.message);
        });
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

app();
