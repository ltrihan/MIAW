// letter to an ascii code
const c2a = (s) => s.charCodeAt(0);

// ascii code to a letter
const a2c = (a) => String.fromCharCode(a);

const caesar = (str, cle) => {
  let res = '';
  let a = c2a('a');

  for (let i = 0, n = str.length; i < n; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      res += a2c((c2a(str[i]) - a + cle) % 26 + a);
    } else {
      res += str[i];
    }
  }
  return res;
};

caesar('trop facile', 1);
