export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const arr = array.map((item) => item.id);
  return arr;
}
