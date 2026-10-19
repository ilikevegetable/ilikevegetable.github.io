(function () {
  var gallery = document.getElementById('latte-gallery');
  var trigger = document.querySelector('.latte-gallery-trigger');
  if (!gallery || !trigger) return;

  var image = gallery.querySelector('.latte-gallery__image');
  var count = gallery.querySelector('.latte-gallery__count');
  var closeButton = gallery.querySelector('.latte-gallery__close');
  var prevButton = gallery.querySelector('.latte-gallery__arrow--prev');
  var nextButton = gallery.querySelector('.latte-gallery__arrow--next');
  var backdrop = gallery.querySelector('.latte-gallery__backdrop');
  var list = document.getElementById('latte-photos');
  var photos = list ? JSON.parse(list.textContent) : [];
  if (!photos.length) return;
  var index = 0;
  var previousOverflow = '';

  // Keep the overlay above the site's animated page and sticky navigation.
  document.body.appendChild(gallery);

  function preload(nextIndex) {
    var photo = photos[(nextIndex + photos.length) % photos.length];
    new Image().src = photo.src;
  }

  function showPhoto(nextIndex) {
    index = (nextIndex + photos.length) % photos.length;
    var photo = photos[index];
    image.src = photo.src;
    image.alt = photo.alt;
    // Keep width/height in step with the photo so the overlay doesn't jump while it loads.
    image.width = photo.w;
    image.height = photo.h;
    count.textContent = (index + 1) + ' / ' + photos.length;
    preload(index + 1);
    preload(index - 1);
  }

  function openGallery() {
    showPhoto(0);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    gallery.hidden = false;
    closeButton.focus();
  }

  function closeGallery() {
    gallery.hidden = true;
    document.body.style.overflow = previousOverflow;
    trigger.focus();
  }

  trigger.addEventListener('click', openGallery);
  closeButton.addEventListener('click', closeGallery);
  backdrop.addEventListener('click', closeGallery);
  prevButton.addEventListener('click', function () { showPhoto(index - 1); });
  nextButton.addEventListener('click', function () { showPhoto(index + 1); });

  document.addEventListener('keydown', function (event) {
    if (gallery.hidden) return;

    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') showPhoto(index - 1);
    if (event.key === 'ArrowRight') showPhoto(index + 1);

    if (event.key === 'Tab') {
      var buttons = [closeButton, prevButton, nextButton];
      var next = buttons.indexOf(document.activeElement) + (event.shiftKey ? -1 : 1);
      if (next < 0 || next >= buttons.length) {
        event.preventDefault();
        buttons[(next + buttons.length) % buttons.length].focus();
      }
    }
  });
})();
