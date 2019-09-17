const data = {
  "window": {"title": "Sample Widget", "width": 500, "height": 500},
  "image": {"src": "images/logo.png", "coords": [250, 150, 350, 400]},
  "messages": [
  {"text": "Save", "offset": [10, 30]},
  {"text": "Quit", "offset": [30, 10]}]
};

// récupérer ...
// le titre de la fenêtre
console.log(data.window.title);

// la 3e coordonnée de l’image
console.log(data.image.coords[2]);

// le nombre de messages
console.log(data.messages.length);

// l’offset y du dernier message
console.log(data.messages[1].offset);
