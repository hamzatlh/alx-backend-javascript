const fs = require('fs');

function countStudents(path) {
  try {
    const db = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.trim() !== '');
    const totalStudents = db.length - 1;
    const fieldCounts = {};

    db.slice(1).forEach((student) => {
      const [name, , , field] = student.split(',').map((item) => item.trim());
      if (field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(name);
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const fieldName in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, fieldName)) {
        const studentList = fieldCounts[fieldName].join(', ');
        console.log(`Number of students in ${fieldName}: ${fieldCounts[fieldName].length}. List: ${studentList}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
