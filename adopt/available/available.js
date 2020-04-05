var available = new Available();

$( document ).ready( function() {
  available.initialize();
} );

function Available () {
  this.firstAnimal = 'dogs'; // should be the only hard-coded animal
}
// Put all animals in their own sections with dogs first.
Available.prototype.initialize = function () {
  var _this = this;
  const allAnimalsContainer = $('.all-available-animals');
  return $.get( apis.available + '?view=compact' )
    .then( function ( response ) {
      Object.keys(response).sort(function (animalName, otherAnimalName) {
        return animalName === _this.firstAnimal ? -1 : 0;
      }).forEach(function (animalName) {
        if (!response[animalName] || !response[animalName].length) { return }
        _this[animalName] = response[animalName];
        _this.createAnimalSection(animalName, allAnimalsContainer);
        _this.populateAnimal(animalName, $('.' + animalName));
      });
    } );
};

Available.prototype.createAnimalSection = function ( animalName, node ) {
  node.append('<h2>Available ' + capitalize(animalName) + '</h2>');
  node.append('<div class="col-md-12 ' + animalName + '"></div>');
  node.append('<div class="clearfix></div>');
};

Available.prototype.populateAnimal = function ( animal, targetNode ) {
  this[ animal ].forEach( function ( animal ) {
    targetNode.append( available.createAnimalNode( animal ) );
  } )
};

Available.prototype.createAnimalNode = function ( animal ) {
  return '<span class="available col-md-2 col-xs-4">'
          +'<a href="../pet-detail/?id=' + animal.id + '" class="img-container">'
            +'<img src="' + animal.imgurl + '">'
          +'</a>'
          +'<div class="name">' + animal.name + '</div>'
          +'<div class="breed">' + animal.breed + '</div>'
          +'<div class="age">' + animal.age + ' - ' + animal.gender + '</div>'
        +'</span>'
};

function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}