// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
let student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Addis Ababa'
};

let student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Addis Ababa'
};

// Create an array named studentsList containing the two students
let studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript, render a table and for each element in the array, append a new row to the table
let table = document.createElement('table');
studentsList.forEach(student => {
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);
