$(document).ready(function () {
  $.get(apis.success + "?view=compact")
    .then(function (response) {
      HandlebarsHelpers.compile(response, 'success-stories', '.success-stories')
    })
});
