const menu = [
  { title: 'Home', link: 'home.php' },
  { title: 'Contact us', link: 'contact.php' },
  {
    title: 'More',
    submenu: [
      { title: 'page1', link: 'page1.php' },
      { title: 'page2', link: 'page2.php' },
    ],
  },
];

const createMenuHtml = (obj) => {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);
  obj.forEach((menuElement) => { // si link creer li
    if (menuElement.hasOwnProperty('link')) {
      const li = document.createElement('li');
      li.innerHTML = menuElement.title;
      ul.appendChild(li);
    } else { // si objet rappeler la fonction elle même
      // TODO
    }
  });
};
createMenuHtml(menu);
