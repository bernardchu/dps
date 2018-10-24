var id = getQueryParameterByName('id');

$(document).ready(function () {
  $.get(apis.success + "?id=" + id)
    .then(function (response) {
      var context = response[0];
      context.photos = _.flatMap(context.updates, function (update) {
        return update.photos;
      });
      HandlebarsHelpers.compile(context, 'success-story', '.success-story');
      $( '.carousel' ).slick( {
        dots: true,
        infinite: true,
        speed: 300,
        lazyLoad: 'ondemand',
      } );
    })
});
