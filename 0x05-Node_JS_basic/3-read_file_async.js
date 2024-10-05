const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        lines.shift();
        console.log(`Number of students: ${lines.length}`);

        const fields = {};

        lines.forEach((line) => {
          const values = line.split(',');
          if (values.length === 4) {
            const field = values[3];
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(values[0]);
          }
        });
        for (const lst in fields) {
          if (lst) {
            console.log(`Number of students in FIELD: ${lst}. List: ${fields[lst].join(', ')}`);
          }
        }
        resolve();
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  });

  return promise;
}

module.exports = countStudents;
