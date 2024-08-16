export default function cleanSet(set, startString) {
  let arr = [];
  if (startString === '') { return ''; }

  for (const el of set) {
    if (el.startsWith(startString)) {
      arr = [...arr, el.slice(startString.length, el.length)];
    }
  }
  return arr.join('-');
}
