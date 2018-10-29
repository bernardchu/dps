var animals = [];
$.get(apis.available + '?view=compact')
  .then(function (response) {
    animals = response.dogs.concat(response.cats);
    HandlebarsHelpers.compile(animals, "print", ".main");
  });
