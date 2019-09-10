const numbers = [1, 2, 3, 4];

function carre(x) { return x * x; }

const map = (arr, callback) => {
  const t = [];
  arr.forEach((element) => {
    t.push(callback(element));
  });
  return t;
};

console.log(map(numbers, carre));

console.log(numbers.map((x) => x * x));
