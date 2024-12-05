/**
 * A small HTTP server using Express module.
 */
const express = require('express');

const app = express();

const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}\n`);
});

module.exports = app;
