var icuUri = 'http://api.dpsrescue.com/api/icu.php';

$(document).ready(function () {
  $.get(icuUri)
    .then(function (response) {
      HandlebarsHelpers.compile(response, "main", ".icu");
      HandlebarsHelpers.compile(response, "modals", ".modals");
      MicroModal.init();
    });
});

