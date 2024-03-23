const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const db = await fs.readFile(path, 'utf8');
    const students = db.split('\n').filter((line) => line.trim() !== '');
    const totalStudents = students.length - 1;
    console.log(`Number of students: ${totalStudents}`);

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

    for (const fieldName in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldName)) {
        const studentList = fields[fieldName].join(', ');
        console.log(`Number of students in ${fieldName}: ${fields[fieldName].length}. List: ${studentList}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
