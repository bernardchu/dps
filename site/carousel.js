$( document ).ready( function() {
  // Featured carousel
  $.get( './api/featured.php' )
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
  $.get( './api/dog_photos.php' )
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
        // centerMode: true,
        // centerPadding: '60px',
        adaptiveHeight: true
      } );
    } );
} );

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

function createAdoptableNode (adoptable) {
  var node = $( '<div class="adoptable-current"></div>' );
  var image = '<a href="' + adoptable.url + '"><img data-lazy="' + adoptable.imgurl + '" title="' + adoptable.name + '" alt="' + adoptable.name + '" /></a>';
  var imageNode = $( image );
  node.append( imageNode );
  return node;
}