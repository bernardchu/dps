var stickyUri = 'http://api.dpsrescue.com/api/sticky_dogs.php';

$( document ).ready( function() {
  $.get( stickyUri  )
    .then( function( response ) {
      console.log('response', response);

      var source   = document.getElementById("entry").innerHTML;
      var template = Handlebars.compile(source);
      var html = template(response);
      $( '.carousel-container' ).append(html);
      $( '.carousel' ).slick( {
        dots: true,
        infinite: true,
        speed: 300,
        lazyLoad: 'ondemand',
      } );
    } );
} );
