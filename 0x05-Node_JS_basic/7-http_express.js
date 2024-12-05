/**
 * A small HTTP server using Express module.
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const PORT = 1245;

app.get('/', (_, res) => {
  // Logic for the home page.
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  // Logic for the /students route.
  res.set('Content-Type', 'text/plain');
  // Better way to handle async responses than the way in the file 5*.
  const responseParts = ['This is the list of our students\n'];
  // Async handling.
  countStudents(process.argv[2])
    .then((result) => {
      responseParts.push(result); // Add the result to the response.
      res.status(200).send(responseParts.join('')); // Send the final response, but not as an array.
    })
    .catch((err) => {
      // Send the first line, then the error message with status 500.
      const errResponseParts = ['This is the list of our students\n'];
      errResponseParts.push(err.message);
      // If you'd used sendStatus, it would have not sent any message after.
      res.status(500).send(errResponseParts.join(''));
    });
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}\n`);
});

module.exports = app;
