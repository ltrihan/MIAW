const max = (x, y) => {
  if (x > y) {
    return x;
  } return y;
};

console.log(max(1, 2));

const max3 = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } if (y > x && y > z) {
    return y;
  } return z;
};

console.log(max3(1, 2, 3));

const jour = (num) => {
  switch (num) {
    case 1:
      return 'lundi';
    case 2:
      return 'mardi';
    case 3:
      return 'mercredi';
    case 4:
      return 'jeudi';
    case 5:
      return 'vendredi';
    case 6:
      return 'samedi';
    case 7:
      return 'dimanche';
    default:
    // Instructions à exécuter lorsqu'aucune des valeurs
    // ne correspond
      break;
  }
};

console.log(jour(2));
