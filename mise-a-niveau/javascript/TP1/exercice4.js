const testArrow = () => 'voici le texte de la fonction';

// console.log(testArrow());

const testArrow2 = () => {
  console.log(testArrow());
  console.log(this);
};

console.log(testArrow2());

const multiX = (x) => x * 10;
console.log(multiX(10));

const multiXY = (x, y) => x * y;
console.log(multiXY(10, 20));
