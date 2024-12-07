const readDatabase = require('../utils');

/**
 * 'StudentsController' class that gets all students and students by major.
 */
class StudentsController {
  // Static method to return the first name of students by field.
  static getAllStudents(request, response) {
    const responseParts = ['This is the list of our students'];

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        responseParts.push(
          `Number of students in CS: ${studentsByField.CS.length}. List: ${
            studentsByField.CS.join(', ')
          }`,
          `Number of students in SWE: ${studentsByField.SWE.length}. List: ${
            studentsByField.SWE.join(', ')
          }`,
        );
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  // Static method to return the first name of students in the specified field.
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        const studentsByMajor = studentsByField[major];
        response.status(200).send(`List: ${studentsByMajor.join(', ')}`);
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
