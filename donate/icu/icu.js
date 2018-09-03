var icuUri = 'http://api.dpsrescue.com/api/icu.php';

$(document).ready(function () {
  $.get(icuUri)
    .then(function (response) {
      console.log('response', response);
      var mainSource = document.getElementById("main").innerHTML;
      var modalSource = document.getElementById("modals").innerHTML;
      var mainTemplate = Handlebars.compile(mainSource);
      var modalTemplate = Handlebars.compile(modalSource);
      var mainHtml = mainTemplate(response);
      var modalHtml = modalTemplate(response);
      $('.icu').append(mainHtml);
      $('.modals').append(modalHtml);
      MicroModal.init();
    });
});

