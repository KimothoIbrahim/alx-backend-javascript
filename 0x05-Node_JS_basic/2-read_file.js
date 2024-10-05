const fs = require('fs');
const path = require('path');

function countStudents(Gpath) {
  try {
    const data = fs.readFileSync(path.resolve(Gpath), 'utf8');

    const rows = data.split('\n').filter((row) => row.trim() !== '');
    rows.shift();
    console.log(`Number of students: ${rows.length}`);
    const fields = {};

    rows.forEach((row) => {
      const values = row.split(',');
      if (values.length === 4) {
        const field = values[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(values[0]);
      }
    });

    for (const line in fields) {
      if (fields[line]) {
        const arr = fields[line];
        console.log(`Number of students in ${line}: ${arr.length}. List: ${arr.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
