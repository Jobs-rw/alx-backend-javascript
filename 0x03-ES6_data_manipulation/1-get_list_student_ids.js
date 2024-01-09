function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to extract the 'id' property from each object
  return students.map(student => student.id);
}
const students = getListStudents();
const studentIds = getListStudentIds(students);
console.log(studentIds);

