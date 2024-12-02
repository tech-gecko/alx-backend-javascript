/* A basic command line prompter. */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  // trim() removes the newline added when user presses enter.
  const userInput = data.toString().trim();
  console.log(`Your name is: ${userInput}`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
