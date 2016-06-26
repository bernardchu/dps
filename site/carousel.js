/**
 * Carousel functionality
 * The basic idea for each carousel call an API that returns
 * an array of elements to be transformed into carousel slides,
 * create a series of DOM nodes from those elements and append
 * them to a container element, then slick the container to 
 * kickstart the carousel.
 */

var apis = {
  featured: 'http://dpsrescue.org/api/featured.php',
  adoptable: 'http://dpsrescue.org/api/dog_photos.php'
}

$( document ).ready( function() {
  // Featured carousel
  $.get( apis.featured )
    .then( function( response ) {
      var featuredNodes = response.map( function ( feature ) {
        return createFeatureNode( feature );
      } );
      featuredNodes.forEach( function ( node ) {
        $( '.featured' ).append( node );
      } );
      $( '.featured' ).slick( {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      } );
    } );

  // Adoptable dogs carousel
  $.get( apis.adoptable )
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

// Create nodes for the featured dogs carousel from each feature
function createFeatureNode ( feature ) {
  var node = $( '<div class="featured-current"></div>' );
  
  var featuredBodyNode = $( '<div class="featured-body"></div>');
  $( '<h2>' + feature.title + '</h2>' ).appendTo( featuredBodyNode );
  
  if ( feature.imgurl ) {
    var image = $( '<div class="featured_img"><a><img></a></div>' );
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