const xhr = new XMLHttpRequest();
const url = 'https://www.univ-larochelle.fr/';

xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send();
const res = xhr.responseText;
console.log(res);
