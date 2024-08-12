export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return;
  }
  const arr = students.reduce((prev, student) => prev + student.id, 0);
  return arr;
}
