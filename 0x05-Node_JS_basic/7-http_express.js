const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const db = await fs.readFile(path, 'utf8');
    const students = db.split('\n').filter((line) => line.trim() !== '');
    const totalStudents = students.length - 1;

    const fields = {};
    students.slice(1).forEach((student) => {
      const [name, , , field] = student.split(',').map((item) => item.trim());
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      }
    });

    let studentList = `Number of students: ${totalStudents}\n`;
    for (const fieldName in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
        studentList += `Number of students in ${fieldName}: ${fields[fieldName].length}. List: ${fields[fieldName].join(', ')}\n`;
      }
    }

    return studentList;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then((studentCount) => {
      res.send(`This is the list of our students\n${studentCount}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
