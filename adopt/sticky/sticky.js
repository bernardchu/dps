var stickyUri = 'http://api.dpsrescue.com/api/sticky_dogs.php';

$( document ).ready( function() {
  $.get( stickyUri  )
    .then( function( response ) {
      if (!response.length) {
        HandlebarsHelpers.compile(response, "no-sticky", ".carousel-container");
        return;
      }
      HandlebarsHelpers.compile(response, "sticky", ".carousel-container");
      $( '.carousel' ).slick( {
        dots: true,
        infinite: true,
        speed: 300,
        lazyLoad: 'ondemand',
      } );
    } );
} );
