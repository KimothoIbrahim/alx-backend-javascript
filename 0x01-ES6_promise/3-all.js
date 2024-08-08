import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup () {
  Promise.all([uploadPhoto(), createUser()]).then((res) => {
    const [{ body }, { firstName, lastName }] = res;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => console.log('Signup system offline'));
}

module.exports = handleProfileSignup;
