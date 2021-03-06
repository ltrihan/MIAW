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

// console.log(numbers.map((x) => x * x));

function pair(x) { return x % 2 === 0; }

const filter = (arr, callback) => {
  const t = [];
  arr.forEach((element) => {
    if (callback(element)) {
      t.push(element);
    }
  });
  return t;
};

console.log(filter(numbers, pair));

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const reduce = (arr, callback, init = 0) => {
  let sum = init;
  arr.forEach((number) => {
    sum = callback(number, sum);
  });
  return sum;
};

console.log(reduce(numbers, reducer));
