// selection des éléments nécessaires
const videosSection = document.querySelector('.videos');
const imagesSection = document.querySelector('.images');
const displayImages = document.getElementById('images');
const displayVideos = document.getElementById('videos');

// fonctions pour cacher les vidéos et les images
const hideVideos = () => videosSection.classList.add('cacher');
const hideImages = () => {
  imagesSection.classList.add('cacher');
};


// on cache par défaut les vidéos
hideVideos();

displayImages.addEventListener('click', () => {
  hideVideos();
  imagesSection.classList.remove('cacher');
  // imagesSection.classList.add('afficher');
});

displayVideos.addEventListener('click', () => {
  hideImages();
  videosSection.classList.remove('cacher');
  // videosSection.classList.add('afficher');
});

// on veut tester si les chemins correspondent à des images
// on créer donc une regexp pour tester si la string de l'url se termine par .jpg
const regexpImage = /[.]jpg$/;

const estImage = (i) => regexpImage.test(i);

// on sélectionne la balise aside de la section videos
const asideVideos = document.querySelector('.videos aside');

const displayOnlyFirstImg = () => {
  document.querySelectorAll('img').forEach((image) => image.classList.add('cacher'));
  const firstImg = document.querySelectorAll('img')[0];
  firstImg.classList.remove('cacher');
};

const urlData = 'https://abourmau.lpmiaw.univ-lr.fr/lpmiaw/tpjs/';
fetch(urlData)
  .then((response) => response.json())
  .then((data) => {
    data.images.forEach((file) => {
      const urlFile = file.large_url;
      if (estImage(urlFile)) {
        const imgTag = document.createElement('img');
        imagesSection.appendChild(imgTag);
        imgTag.setAttribute('src', urlFile);
      } else {
        const videoTag = document.createElement('video');
        asideVideos.appendChild(videoTag);
        videoTag.controls = true;
        videoTag.setAttribute('src', urlFile);
        videoTag.setAttribute('type', 'video/mp4');
        // videoTag.setAttribute('controls');
      }
    });
    displayOnlyFirstImg();
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
