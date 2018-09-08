$(document).ready(function () {
  $.get(apis.icu)
    .then(function (response) {
      HandlebarsHelpers.compile(response, "main", ".icu");
      HandlebarsHelpers.compile(response, "modals", ".modals");
      MicroModal.init();
    });
});
