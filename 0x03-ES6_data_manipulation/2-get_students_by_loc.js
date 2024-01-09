const getStudentsByLocation = (students, city) => {
  return students.filter(student => student.location === city);
};
import getListStudents from "./0-get_list_students.js";

const students = getListStudents();
const studentsInSanFrancisco = getStudentsByLocation(students, 'San Francisco');
console.log(studentsInSanFrancisco);

