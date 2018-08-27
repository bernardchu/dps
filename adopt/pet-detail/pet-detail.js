var petDetailUri = 'http://roastonbone.com/dps-test/dps-api/api/available.php?view=full&id=';

$( document ).ready( function() {
  $.get( petDetailUri + getQueryParameterByName('id', window.location.href) )
    .then( function( response ) {
      // Hack to deal with "1" and "0" instead of 1 and 0
      response.dogs = !!parseInt(response.dogs);
      response.cats = !!parseInt(response.cats);
      response.kids = !!parseInt(response.kids);
      response.declawed = !!parseInt(response.declawed);
      var source   = document.getElementById("entry").innerHTML;
      var template = Handlebars.compile(source);
      var html = template(response);
      $( '.main' ).append(html);
    } );
} );

/**
 * Example API response:
  {
    "id": "12945055",
    "name": "Rain",
    "species": "Dog",
    "breed": "American Eskimo Dog x Spitz",
    "primary_breed": "American Eskimo Dog",
    "secondary_breed": "Spitz",
    "age": "1 year old",
    "age_general": "Adult",
    "gender": "Male",
    "video": "",
    "pictures": [
    {
      "img": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599706_500x333.jpg",
      "thumb": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599706_100x66.jpg"
    },
    {
      "img": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599707_500x349.jpg",
      "thumb": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599707_100x69.jpg"
    },
    {
      "img": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599708_500x333.jpg",
      "thumb": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599708_100x66.jpg"
    },
    {
      "img": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599709_500x383.jpg",
      "thumb": "https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/12945/12945055/56599709_100x76.jpg"
    }
  ],
    "coat_length": "Long",
    "upcoming": "",
    "boilerplate": [
    "All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated and microchipped. ",
    " If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400 for each dog/puppy. ",
    " If it is on a weekend of our adoptions, follow us on @DPSRescue on Twitter to get real time updates on our adoptions. We will also post at the end of the evening the names of those dogs who have been adopted: www.facebook.com/DPSRescue"
  ],
    "insurance": "\"\"",
    "bio": [
    "Rain is a 1 year old Eskimo Spitz mix who weighs 12 lbs. He is full grown. He is a rescue from the Korean Meat Markets. He's a sweet but shy boy who will need a patient family to introduce him to the world. His foster mom says: \"Rain is a mild-mannered sweetheart who is initially shy but warms up quickly. He can be very independent but, once familiar with you, will follow you around the house and cuddle if asked. He is a very quiet dog who does not bark which makes him well-suited for apartments. More than anything, Rain loves to go on walks and sniff all the things! But he can also stay home and just chill.\" She also reports that house-training Rain has been going very well! Rain's foster mom reports that his adjustment in her home has been very easy which means he will adjust to a new permanent home just as easily!",
    "Rain gets along well with other dogs. He has lived with big and little dogs. He is currently fostered with dogs. He is an option to join a new home with a dog. Rain will be an option to go to the dog park or doggy day care in the future.",
    "Rain is only an option for a home that has had a dog in the last 3 years. If there are children in the home, they need to be over the age of 10."
  ],
    "dogs": "1",
    "cats": "0",
    "kids": "1",
    "special_needs": "0",
    "housetrained": "0",
    "declawed": "0",
    "last_updated": "2018-08-25 19:14:27",
    "contact": ""
  }
 */
