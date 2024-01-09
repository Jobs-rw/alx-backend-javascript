const getListStudentIds = (students) => {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => student.id);
};
const students = getListStudents();
const studentIds = getListStudentIds(students);
console.log(studentIds);
