// Exercice 1

const deleteBtnEx1 = document.querySelector('#boutonSupprimerEx1');
const liEx1 = document.querySelector('#ex1 ul li');
const ul = document.querySelector('#ex1 ul');
const deleteFirstLi = () => ul.removeChild(liEx1);

deleteBtnEx1.addEventListener('click', deleteFirstLi);

// Exercice 2

const boutonDeplacerEx2 = document.querySelector('#boutonDeplacerEx2');
const liEx2 = document.querySelector('#ex2 ul li');
const ulEx2 = document.querySelector('#ex2 ul');
const moveFirstLiEx2 = () => ulEx2.appendChild(liEx2);

boutonDeplacerEx2.addEventListener('click', moveFirstLiEx2);

// Exercice 3                                                             // TO FINISH

const liEx3 = document.querySelector('#ingredients li');
const ulEx3 = document.querySelector('#ingredients');

const toutReafficherEx3 = document.querySelector('#ex3 .control');

ulEx3.addEventListener('click', () => {
  liEx3.classList.add('invisible');
});

toutReafficherEx3.addEventListener('click', () => {
  liEx3.classList.remove('invisible');
});

// Exercice 4

const liEx4 = document.querySelectorAll('#lesPrenoms li');

liEx4.forEach((li) => li.addEventListener('click', () => li.classList.add('invisible')));

const toutReafficherEx4 = document.querySelector('#ex3 .control');

toutReafficherEx4.addEventListener('click', () => {
  liEx4.forEach((li) => li.classList.remove('invisible'));
});
