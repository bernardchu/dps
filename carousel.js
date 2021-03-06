/**
 * Carousel functionality
 * The basic idea for each carousel call an API that returns
 * an array of elements to be transformed into carousel slides,
 * create a series of DOM nodes from those elements and append
 * them to a container element, then slick the container to 
 * kickstart the carousel.
 */

var adoptableUri = 'http://api.dpsrescue.com/api/dog_photos.php';


$( document ).ready( function() {
  $.get( adoptableUri )
    .then( function( response ) {
      var adoptableNodes = response.map( function ( feature ) {
        return createAdoptableNode( feature );
      } );
      adoptableNodes.forEach( function ( node ) {
        $( '.adoptable' ).append( node );
      } );
      $( '.adoptable' ).slick( {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        adaptiveHeight: true
      } );
    } );
} );

// Create nodes for the adoptable carousel from each adoptable animal.
function createAdoptableNode (adoptable) {
  var node = $( '<div class="adoptable-current"></div>' );
  var image = '<a href="' + adoptable.url + '">'
               +'<img data-lazy="' + adoptable.imgurl + '" title="' + adoptable.name + '" alt="' + adoptable.name + '" />'
             +'</a>';
  var imageNode = $( image );
  var overlayNode = $( '<div class="adoptable-info-overlay"></div>' );
  var infoNode = $(
                   '<div class="adoptable-info">'
                     +'<h3>' + adoptable.name + '</h3>'
                     +'<h4>' + adoptable.gender + ' ' + adoptable.breed + '</h4>'
                     +'<h4>' + adoptable.age + '</h4>'
                   +'</div>'
                    );
  node.append( imageNode );
  imageNode.append( overlayNode );
  overlayNode.append( infoNode );
  return node;
}