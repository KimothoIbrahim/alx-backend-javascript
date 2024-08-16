export default function cleanSet(set, startString) {
  const nSet = new Set();
  if (startString === '') { return ''; }

  for (const el of set) {
    if (el.startsWith(startString)) {
      nSet.add(el.slice(startString.length, el.length));
    }
  }
  return [...nSet].join('-');
}
