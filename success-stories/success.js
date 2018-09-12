$(document).ready(function () {
  $.get(apis.success)
    .then(function (response) {
      HandlebarsHelpers.compile(response, 'success-stories', '.success-stories')
    })
});
