const express = require('express');

const Students = require('../controllers/StudentsController');
const App = require('../controllers/AppController');

const router = express.Router({ mergeParams: true });

router.get('/', App.getHomepage);
router.get('/students', Students.getAllStudents);
router.get('/students/:major', Students.getAllStudentsByMajor);

module.exports = router;
