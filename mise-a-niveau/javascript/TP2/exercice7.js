const miroir = (tab) => {
  if (tab.join('') === tab.reverse().join('')) {
    return true;
  } return false;
};

miroir([1, 2, 1, 3]); // false
// console.log(miroir([1, 2, 1])); // true
// console.log(miroir([1, 2, 2, 1])); // true
// console.log(miroir([1, 2])); // true

// checker spread et rest
// const t = [1, 2, 3];
// const t2 = t;
// t2.push(4);
// console.log(t);
// console.log(t2);

const afficheRec = (arr) => {
  arr.forEach((number) => {
    if (typeof number !== 'number') {
      number.forEach((num) => {
        console.log(num);
      });
    } console.log(number);
  });
};

// console.log(afficheRec([1, 2, 3]));
console.log(afficheRec([1, 2, [3, 4, [5, 6, 7], 8], 9]));

const majuscules = (s) => s.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');
majuscules('il fait beau');

const alpha = (str) => str.replace(/\s/g, '').split('').sort().join('');
alpha('je suis en cours');

const anagramme = (s1, s2) => s1.split('').sort().join('').trim() === s2.split('').sort().join('').trim();
anagramme('chien', 'ni che');

// letter to an ascii code
const c2a = (s) => s.charCodeAt(0);

// ascii code to a letter
const a2c = (a) => String.fromCharCode(a);

const caesar = (str, cle) => {
  let res = '';
  const a = c2a('a');

  for (let i = 0, n = str.length; i < n; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      res += a2c(((c2a(str[i]) - a + cle) % 26) + a);
    } else {
      res += str[i];
    }
  }
  return res;
};

caesar('trop facile', 1);

// const vigenere = () => {
//   // TODO
// };
