export default function getStudentByLocation(list, city) {
  return list.filter((student) => student.location === city);
}
