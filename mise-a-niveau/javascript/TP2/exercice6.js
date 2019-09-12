const regexCodePostal = /^\d{5}$/;

const isCodePostal = (str) => regexCodePostal.test(str);

console.log(isCodePostal('33000')); // true
console.log(isCodePostal('47200')); // true

const regexCodePostalFr = /^((0[1-9])|([1-9][0-5])|([1-8][0-9]))[0-9]{3}$/;

const isCodePostalFr = (str) => regexCodePostalFr.test(str);

console.log(isCodePostalFr('96000')); // false
console.log(isCodePostalFr('01500')); // true
console.log(isCodePostalFr('95500')); // true

const regexIsEmail = /^\w+[@][a-zA-Z]+[.][a-zA-Z]+$/;

const isEmail = (str) => regexIsEmail.test(str);

console.log(isEmail('test@test.com')); // true
console.log(isEmail('test@test')); // false
console.log(isEmail('testtest.com')); // false
