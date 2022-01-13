(function () {
  const showModal = !document.referrer || document.referrer.indexOf(window.location.hostname) === -1;
  if (!showModal) {
    return;
  }
  const MODAL_DELAY = 2 * 1000;
  const donateModal =
    '<div class="modal micromodal-slide" id="donate-modal" aria-hidden="true">'
    + '<div class="modal__overlay" tabindex="-1" data-micromodal-close>'
    + '  <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">'
    + '    <header class="modal__header">'
    + '      <h2 class="modal__title" id="donate-modal-title">'
    + '        Join us in honoring Betty White'
    + '      </h2>'
    + '      <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>'
    + '    </header>'
    + '    <main class="modal__content" id="modal-1-content">'
    + '      <div class="donate-modal-image-container">'
    + '        <img src="https://dps-festive.imgix.net/images/donate/betty-white-usa-today.jpeg?txt64=U291cmNlOiBVU0EgVG9kYXk=&txt-clr=white&w=300"/>'
    + '      </div>'
    + '      <p>Betty White demonstrated a lifelong commitment to helping animals in need. Join us in honoring Betty White\'s memory to make the world a better, kinder place for all animals by making a donation in support of the work we do.</p>'
    + '      <a href="/donate/donate/" class="hero-button col-xs-12">Donate Now</a>'
    + '    </main>'
    + '  </div>'
    + '</div>'
    + '</div>';
  $('body').append(donateModal);
  MicroModal.init();
  setTimeout(() => {
    MicroModal.show('donate-modal');
  }, MODAL_DELAY);
})();
