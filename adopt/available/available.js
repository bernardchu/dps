var availableUri = 'http://api.dpsrescue.com/api/available.php';

var available = new Available();

function Available () {
  this.facets = {};
  this.dogs = [];
}

Available.prototype.getFacets = function () {
  return Object.keys( this.facets );
}

Available.prototype.getFacetValues = function ( facet ) {
  if (!this.facets[facet]) { return [] }
  return Object.keys( this.facets[facet] );
}

Available.prototype.createAnimalNode = function ( dog ) {
  return '<a href="../pet-detail?id=' + dog.id + '" class="available">'
          +'<div class="img-container">'
            +'<img src="' + dog.pictures[0].thumb + '">'
          +'</div>'
          +'<div class="name">' + dog.name + '</div>'
          +'<div class="breed">' + dog.breed + '</div>'
          +'<div class="age">' + dog.age + ' - ' + dog.gender + '</div>'
        +'</a>'
}

Available.prototype.populateDogs = function ( node ) {
  this.dogs.forEach( function ( dog ) {
    node.append( available.createAnimalNode( dog ) );
  } )
}

Available.prototype.toggleFilterPane = function () {
  var filterNode = $( '.filter' );
  if ( filterNode.hasClass( 'hidden' ) ) {
    filterNode.removeClass( 'hidden' );
  } else {
    filterNode.addClass( 'hidden' );
  }
  
}

$( document ).ready( function() {
  $( '.dogs-cats button' ).click( available.toggleFilterPane );
  $( '.close-filter' ).click( available.toggleFilterPane );
  $.get( availableUri )
    .then( function ( response ) {
      available.dogs = response.dogs.animals;
      available.facets = response.facets;
      available.populateDogs( $( 'div.list' ) );
    } );
} );