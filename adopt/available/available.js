//var availableUri = 'http://roastonbone.com/dps-test/dps-api/api/available.php?view=compact';
 var availableUri = 'http://api.dpsrescue.com/api/available.php?view=compact';

var available = new Available();

$( document ).ready( function() {
  available.initialize();
} );

function Available () {
  this.dogs = [];
  this.cats = [];
}

Available.prototype.initialize = function () {
  var _this = this;
  return $.get( availableUri )
    .then( function ( response ) {
      _this.dogs = response.dogs;
      _this.cats = response.cats;
      _this.populateAnimal( 'dogs', $( '.dogs' ) );
      _this.populateAnimal( 'cats', $( '.cats' ) );
    } );
};

Available.prototype.populateAnimal = function ( animal, targetNode ) {
  this[ animal ].forEach( function ( animal ) {
    targetNode.append( available.createAnimalNode( animal ) );
  } )
};

Available.prototype.createAnimalNode = function ( animal ) {
  return '<span class="available col-md-2 col-sm-4 col-xs-12">'
          +'<a href="../pet-detail?id=' + animal.id + '" class="img-container">'
            +'<img src="' + animal.imgurl + '">'
          +'</a>'
          +'<div class="name">' + animal.name + '</div>'
          +'<div class="breed">' + animal.breed + '</div>'
          +'<div class="age">' + animal.age + ' - ' + animal.gender + '</div>'
        +'</span>'
};
