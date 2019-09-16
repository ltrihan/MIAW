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


});
