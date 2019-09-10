const numbers = [1, 2, 3, 10, 20, 30];

const lastButOne = (arr) => {
  if (arr.length >= 2) {
    return arr.slice(-2)[0];
  } return false;
};

lastButOne(numbers);

const square = (arr) => {
  const squaredNumbers = [];
  arr.forEach((number) => {
    squaredNumbers.push(number * number);
  });
  return squaredNumbers;
};

square(numbers);

const gt10 = (arr) => {
  const bigNumbers = [];
  arr.forEach((number) => {
    if (number >= 10) {
      bigNumbers.push(number);
    }
  });
  return bigNumbers;
};

gt10(numbers);

const sum = (arr) => {
  let sumNumbers = 0;
  arr.forEach((number) => {
    sumNumbers += number;
  });
  return sumNumbers;
};

sum(numbers);
