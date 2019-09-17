// Exercice 1

const deleteBtnEx1 = document.querySelector('#boutonSupprimerEx1');
const li = document.querySelector('#ex1 ul li');
const ul = document.querySelector('#ex1 ul');
const deleteFirstLi = () => ul.removeChild(li);

deleteBtnEx1.addEventListener('click', deleteFirstLi);

// Exercice 2

