const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

/**
 * Links the route '/' to the AppController.
 * Links the route '/students' and '/students/:major' to the StudentsController.
 */
const app = express();

app.get('/', AppController.getHomepage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = app;
