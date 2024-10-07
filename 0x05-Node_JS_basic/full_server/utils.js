const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const dataObject = {};

      const arr = data.split('\n').filter((line) => line.trim() !== '');

      arr.shift();

      arr.forEach((row) => {
        const fields = row.split(',');
        if (fields.length === 4) {
          if (!dataObject[fields[3]]) {
            dataObject[fields[3]] = [];
          }
          dataObject[fields[3]].push(fields[0]);
        }
      });

      resolve(dataObject);
    }
  });
});

module.exports = readDatabase;
