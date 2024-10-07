const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('../database.csv').then((data) => {
      let newData = 'This is the list of our students';

      Object.keys(data).forEach((key) => {
        newData += `\nNumber of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`;
      });

      response.send(newData);
    })
      .catch((err) => {
        response.status(500).send(err);
      });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase('../database.csv').then((data) => {
      let newData = 'This is the list of our students\n';
      const param = request.params.major;

      if (param === 'SWE' || param === 'CS') {
        newData += `\nNumber of students in ${param}: ${data[param].length}. List: ${data[param].join(', ')}`;
        response.send(newData);
      } else {
        throw new Error('Major parameter must be CS or SWE');
      }
    })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }
}

module.exports = StudentsController;
