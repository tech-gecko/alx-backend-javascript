/**
 * A small HTTP server, the 'Hello World' of Node.js.
 * This is for older versions. For node 16 or later, import from 'node:http'.
 */
const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer();
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.write(Buffer.from(responseText));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app();

module.exports = app;
