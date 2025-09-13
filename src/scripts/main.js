'use strict';

const gallery = document.querySelector('.gallery');
const bigImage = gallery.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
  }

  const imageSource = link.href;

  bigImage.src = imageSource;
});
