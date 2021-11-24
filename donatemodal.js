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
    + '      Believe you can make a difference this holiday season. Your gift provides:'
    + '      <ul>'
    + '        <li>Food and shelter</li>'
    + '        <li>Medical care</li>'
    + '        <li>Loving adoptive families</li>'
    + '        <li>And more!</li>'
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
