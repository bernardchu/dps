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
    + '        Holiday Drive to Save Lives'
    + '      </h2>'
    + '      <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>'
    + '    </header>'
    + '    <main class="modal__content" id="modal-1-content">'
    + '      <div class="donate-modal-image-container">'
    + '        <img src="https://dps-festive.imgix.net/images/donate/donation-popup.jpeg?w=300&h=220&fit=crop&crop=top"/>'
    + '      </div>'
    + '      <p>Donate now to help us save more dogs and cats in need! Your gift will provide:</p>'
    + '      <ul>'
    + '        <li>Food, treats, toys and other necessities</li>'
    + '        <li>Life-saving medical care</li>'
    + '        <li>Support for our foster homes</li>'
    + '        <li>Training for dogs with challenges</li>'
    + '        <li>And so much more!</li>'
    + '      </ul>'
    + '      <a href="/donate/donate/" class="hero-button col-xs-12">Donate</a>'
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
