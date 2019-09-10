const factorielleItFor = (num) => {
  let result = 1;
  for (let count = 2; count <= num; count += 1) {
    result *= count;
  }
  return result;
};

console.log(factorielleItFor(4));

const factorielleItWhile = (num) => {
  let result = 1;
  let count = 2;
  while (count <= num) {
    result *= count;
    count += 1;
  }
  return result;
};

console.log(factorielleItWhile(4));

// const factorielleRec = num => {
//   if (num === 0)
//     { return 1; }
//   else
//     { return num * factorielleRec( num - 1 ); }
// };
