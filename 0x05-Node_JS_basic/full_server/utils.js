const fs = require('fs').promises;

/**
 * Reads the database asynchronously and organizes students by field.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<Object>} - A promise that resolves with an object of arrays
 *                              of student first names per field.
 */
async function readDatabase(filePath) {
  try {
    // Read the file content asynchronously.
    const data = await fs.readFile(filePath, 'utf-8');

    // Split into lines, remove empty lines, and trim spaces.
    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line);

    // Organize students by fields.
    const studentsByField = {};
    lines.forEach((line) => {
      // Array destructuring.
      const [firstname, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    return studentsByField;
  } catch (err) {
    // Reject the promise with an error.
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
