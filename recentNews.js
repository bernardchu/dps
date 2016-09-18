/**
 * Populate the left main pane on the home page with info from
 * the Featured API.
 */

var featuredUri = 'http://dpsrescue.org/api/featured.php';

$( document ).ready( function() {
  $.get( featuredUri )
    .then( function( response ) {
      var featuredNodes = response.map( function ( feature ) {
        return createFeatureNode( feature );
      } );
      featuredNodes.forEach( function ( node ) {
        $( '.featured' ).append( node );
      } );
    } );

} );

function createFeatureNode ( feature ) {
  var node = $( '<div class="featured"></div>' );
  
  var featuredBodyNode = $( '<span class="featured-body"></div>');
  $( '<h2>' + feature.title + '</h2>' ).appendTo( featuredBodyNode );
  
  if ( feature.imgurl ) {
    var image = $( '<span class="featured_img"><a><img></a></div>' );
    image.find( 'img' ).attr( 'src', feature.imgurl );
    feature.href && image.find( 'a' ).attr( 'href', feature.href );
    image.appendTo( node );
  }

  if ( feature.description ) {
    feature.description.forEach( function ( paragraph ) {
      $( '<p>' + paragraph + '</p>' ).appendTo( featuredBodyNode );  
    } )
  }

  if ( feature.href_text ) {
    var link = $( '<a href="">' + feature.href_text + '</a>' );
    link.attr( 'href', feature.href );
    link.appendTo( featuredBodyNode );
  }

  if ( feature.paypal ) {
    $( feature.paypal ).appendTo( featuredBodyNode );
  }

  featuredBodyNode.appendTo( node );

  return node;
}
