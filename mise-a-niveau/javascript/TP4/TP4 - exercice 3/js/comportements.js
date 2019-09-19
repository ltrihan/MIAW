const zoneRetourClient = document.getElementById('zoneRetourClient');
const inputTshirtNumber = document.getElementById('saisieNbTS');

const testIfWrong = (tshirtNumber) => {
  if (tshirtNumber < 0) {
    const feedBackCreation = document.createTextNode('Désolé, mais nous ne vous paierons pas pour commander des tshirts. Rentrez une valeur positive.');
    zoneRetourClient.appendChild(feedBackCreation);
  } else {
    const feedBackCreation = document.createTextNode(`Vous avez choisi de commander ${tshirtNumber} t-shirts, pour un montant de ${tshirtNumber * 45} €`);
    zoneRetourClient.appendChild(feedBackCreation);
  }
};

inputTshirtNumber.addEventListener('input', () => {
  zoneRetourClient.innerHTML = '';
  const tshirtNumber = document.getElementById('saisieNbTS').value;
  testIfWrong(tshirtNumber);
});
