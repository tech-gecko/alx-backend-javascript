/**
 * A small HTTP server using Express module.
 */
const express = require('express');
const app = express();

const PORT = 1245;
const HOST = 'localhost';

app.get('/', (_, res) => {
  res.send('Hello ALX!');
});

app.listen(PORT, HOST, () => {
    process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
})

module.exports = app;
