var availableUri = 'http://api.dpsrescue.com/api/available.php';

var available = new Available();

function Available () {
  this.facets = {};
  this.dogs = [];
  this.cats = [];
  this.animal = 'dogs';
}

Available.prototype.getFacets = function () {
  return Object.keys( this.facets );
}

Available.prototype.getFacetValues = function ( facet ) {
  if (!this.facets[facet]) { return [] }
  return Object.keys( this.facets[facet] );
}

Available.prototype.createAnimalNode = function ( dog ) {
  return '<a href="../pet-detail?id=' + dog.id + '" class="available nonstandard-link">'
          +'<div class="img-container">'
            +'<img src="' + dog.pictures[0].img + '">'
          +'</div>'
          +'<div class="name">' + dog.name + '</div>'
          +'<div class="breed">' + dog.breed + '</div>'
          +'<div class="age">' + dog.age + ' - ' + dog.gender + '</div>'
        +'</a>'
}

Available.prototype.populateAnimal = function ( animal, targetNode ) {
  targetNode.html( '' );
  this[ animal ].forEach( function ( animal ) {
    targetNode.append( available.createAnimalNode( animal ) );
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

Available.prototype.populateFilters = function ( targetNode ) {
  var _this = this;
  this.getFacets().forEach( function ( facet ) {
    targetNode.append( _this.createFilterNode( facet, _this.facets[ facet ] ) );
  } )
}

Available.prototype.createFilterNode = function ( label, facet ) {
  var _this = this;
  var node = $( '<div class="facet"><h4 class="facet-heading">' + this.facetToLabel( label ) + '</h6></div>' );
  Object.keys( facet ).forEach( function ( value ) {
    _this.addRadio( node, value, label );
  } )
  return node;
}

// convert primary_breed to primary breed and CSS text-transform: capitalize will take care of the rest.
Available.prototype.facetToLabel = function ( rawLabel ) {
  return rawLabel.replace( '_', ' ' );
}

Available.prototype.labelToFacet = function ( label ) {
  return label.replace( ' ', '_' ).toLowerCase();
}

Available.prototype.addRadio = function ( targetNode, value, label ) {
  targetNode.append( '<label><input type="radio" value="' + value + '" name="' + label + '"/> ' + value + '</label>' );
}

// currently doesn't work right; will need some refactoring to handle cats and dogs
Available.prototype.filter = function () {
  var query = $( 'form' ).serialize();
  if (query) {
    query += '&type=' + this.animal;
  }
  this.query( query );
  return false;
}

Available.prototype.query = function ( query ) {
  
}

Available.prototype.initialize = function () {
  return $.get( availableUri )
    .then( function ( response ) {
      available.dogs = response.dogs.animals;
      available.cats = response.cats.animals;
      available.populateAnimal( 'dogs', $( 'div.list' ) );

      available.facets = response.dogs.facets;
      available.populateFilters( $( '.filter .filters' ) );
    } );
}

Available.prototype.switchTo = function ( animal ) {
  if (this.animal === animal) { return }
  this.populateAnimal( animal, $( 'div.list' ) );
  this.animal = animal;
  $( '.available-dogs' ).toggleClass( 'active' );
  $( '.available-cats' ).toggleClass( 'active' );
}

$( document ).ready( function() {
  $( '.dogs-cats button' ).click( available.toggleFilterPane );
  $( '.close-filter' ).click( available.toggleFilterPane );
  $( '.available-dogs' ).click( available.switchTo.bind( available, 'dogs' ) );
  $( '.available-cats' ).click( available.switchTo.bind( available, 'cats' ) );
  $( 'form' ).submit( available.filter.bind( available ) );
  available.initialize();
} );
