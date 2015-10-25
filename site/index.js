$( document ).ready( function() {
  $.get( 'http://dpsrescue.com/api/featured.php' )
    .then( function( response ) {
      var nodes = response.map( function ( feature ) {
        return createFeatureNode( feature );
      } );
      nodes.forEach( function ( node ) {
        $( '.featured' ).append( node );
      } );
      $( '.featured' ).slick( {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true
      } );
    } );
} );

function createFeatureNode ( feature ) {
  var node = $( '<div></div>' );
  $( '<h2>' + feature.title + '</h2>' ).appendTo( node );
  
  if ( feature.imgurl ) {
    var image = $( '<div class="featured_img"><a><img></a></div>' );
    image.find( 'img' ).attr( 'src', feature.imgurl );
    feature.href && image.find( 'a' ).attr( 'href', feature.href );
    image.appendTo( node );
  }

  if ( feature.description ) {
    feature.description.forEach( function ( paragraph ) {
      $( '<p>' + paragraph + '</p>' ).appendTo( node );  
    } )
  }

  if ( feature.hrefText ) {
    var link = $( '<p>' + feature.hrefText + '</p>' );
    link.find( 'a' ).attr( 'href', feature.href );
  }

  if ( feature.paypal ) {
    $( feature.paypal ).appendTo( node );
  }

  return node;
}