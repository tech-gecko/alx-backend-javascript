/**
 * Reads the file passed as argument asynchronously and counts the number of
 * students in the file.
 */
// fs's async counterpart.
const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    // async counterpart of fs.existsSync and the likes...
    await fs.access(filePath);

    // async counterpart of fs.readFileSync.
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data
      .split('\n') // Split the data into an array of lines.
      .map((line) => line.trim()) // Trim each line to remove extra spaces.
      .filter((line) => line); // Filter out empty lines.
    console.log(`Number of students: ${lines.length - 1}`);

    const csLines = lines.filter((line) => line.includes('CS'));
    const sweLines = lines.filter((line) => line.includes('SWE'));

    // Just a better way than the way used in file 2*,
    // not that it is an asynchronous way. It is still synchronous.
    const csArray = csLines.map((line) => line.split(',')[0]);
    const sweArray = sweLines.map((line) => line.split(',')[0]);

    console.log(`Number of students in CS: ${csLines.length}. List: ${csArray.join(', ')}`);
    console.log(`Number of students in SWE: ${sweLines.length}. List: ${sweArray.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
