window.addEventListener('DOMContentLoaded', () => {
  console.log('Je suis le programme principal!');

  // Exercice 1

  const ingredientsLists = document.querySelectorAll('#ingredients li');
  console.log(`J'ai trouvé ${ingredientsLists.length} ingrédients`);

  // Exercice 2

  const elemEx2 = document.getElementById('elemEx2');
  // console.log(elemEx2.classList);
  elemEx2.classList.remove('control');
  elemEx2.classList.add('inverse');
  // console.log(elemEx2.classList);

  // Exercice 3

  document.getElementById('reussite').textContent = "ha ok, j'ai compris !";
  const dogAltAttribute = document.getElementById('dog').getAttribute('alt');
  console.log(dogAltAttribute);
  document.getElementById('legendeDog').innerHTML = dogAltAttribute;

  // Exercice 4

  const deleteButton = document.getElementById('boutonEffacerEx4');
  const displayButton = document.getElementById('boutonAfficherEx4');
  const dogFigure = document.getElementById('figureEx4');
  const deleteFigure = () => dogFigure.classList.add('invisible');
  const displayFigure = () => dogFigure.classList.remove('invisible');
  deleteButton.addEventListener('click', deleteFigure);
  displayButton.addEventListener('click', displayFigure);

  // pour le bonus afficher/masquer il suffirait de faire une condition

  // Exercice 5

  const listeImgTetes = document.getElementById('liste_tetes').querySelectorAll('li');
  listeImgTetes.forEach((li) => {
    li.classList.add('penche');
  });

  document.querySelectorAll('h2').forEach((h2) => {
    h2.classList.add('centre');
  });

  // Exercice 6

  document.getElementById('ex6').querySelector('p img').classList.add('penche');

  listeImgTetes.forEach((img) => {
    const removeOrAddPenche = () => {
      if (img.classList.value === 'penche') {
        img.classList.remove('penche');
      } else { img.classList.add('penche'); }
    };
    img.addEventListener('mouseover', removeOrAddPenche);
  });
});
