/**
 * Reads the file passed as argument synchronously and counts the number of
 * students in the file.
 */
const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data
    .split('\n') // Split the data into an array of lines.
    .map((line) => line.trim()) // Trim each line to remove extra spaces.
    .filter((line) => line); // Filter out empty lines.
  console.log(`Number of students: ${lines.length - 1}`);

  const csLines = lines.filter((line) => line.includes('CS'));
  const sweLines = lines.filter((line) => line.includes('SWE'));

  const csArray = [];
  const sweArray = [];
  for (const line of csLines) {
    csArray.push(line.split(',')[0]);
  }
  for (const line of sweLines) {
    sweArray.push(line.split(',')[0]);
  }

  console.log(`Number of students in CS: ${csLines.length}. List: ${csArray.join(', ')}`);
  console.log(`Number of students in SWE: ${sweLines.length}. List: ${sweArray.join(', ')}`);
}

module.exports = countStudents;
