// Put all animals together in a flat list with dogs first.
var animals = [];
$.get(apis.available + '?view=compact')
  .then(function (response) {
    const firstAnimal = 'dogs'; // should be the only hard-coded animal
    animals = Object.keys(response).sort(function (animalName, otherAnimalName) {
      return animalName === firstAnimal ? -1 : 0;
    }).reduce(function (allAnimals, animalName) {
      return allAnimals.concat(response[animalName])
    }, []);
    HandlebarsHelpers.compile(animals, "print", ".main");
  });
