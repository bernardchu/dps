$( document ).ready( function() {
  $.get( apis['sticky_dogs']  )
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
