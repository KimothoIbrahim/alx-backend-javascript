export default function updateStudentGradeByCity(students, city, grades) {
  const arr = students.map((student) => {
    const arr = grades.filter((grade) => grade.studentId === student.id);
    if (arr[0]) {
      student.grade = arr[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return arr;
}
