export default function uploadPhoto(filename) {
  return new Promise((undefined, reject) => {
    reject(`${filename} cannot be processed`);
  });
}
