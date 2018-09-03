var stickyUri = 'http://api.dpsrescue.com/api/sticky_dogs.php';

$( document ).ready( function() {
  $.get( stickyUri  )
    .then( function( response ) {
      HandlebarsHelpers.compile(response, "entry", ".carousel-container");
      $( '.carousel' ).slick( {
        dots: true,
        infinite: true,
        speed: 300,
        lazyLoad: 'ondemand',
      } );
    } );
} );
