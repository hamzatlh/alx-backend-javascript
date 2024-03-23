const http = require('http');
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

    return { success: true, data: studentList };
  } catch (err) {
    return 'Cannot load the database';
  }
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const response = await countStudents('database.csv');
    if (response.success) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${response.data}`);
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(response.error);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

app.listen(1245);

module.exports = app;
