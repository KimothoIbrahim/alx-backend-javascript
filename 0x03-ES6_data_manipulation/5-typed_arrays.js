export default function createInt8TypedArray(length, position, value) {
  const typed = new ArrayBuffer(length);
  const dv = new DataView(typed);
  dv.setUint8(position, value, false);
  return dv;
}
