/* A basic command line prompter. */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();

  if (userInput) {
    console.log(`Your name is: ${userInput}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
