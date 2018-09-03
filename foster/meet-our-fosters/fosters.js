var fostersUri = 'http://api.dpsrescue.com/api/fosters.php';

$(document).ready(function () {
  $.get(fostersUri)
    .then(function (response) {
      HandlebarsHelpers.compile(response.spotlight, "spotlight", ".spotlight");
      HandlebarsHelpers.compile(response.fosters, "fosters", ".fosters");
    });
});

/* Example API Response:

{
  "spotlight": {
    "name" : "Danielle",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/foster\/fosters\/danielle.jpg",
    "bio"  : "For many in rescue, it\u2019s just in the blood. For Danielle, that couldn\u2019t be more true. Danielle has fostered hundreds of kittens and cats for DPS over the past five years. Her speciality is kittens, especially sick kittens. She is our resident Kitten Whisperer. She turns even the most feral kittens into adoptable, loving little felines. As a result, every adopter who adopts tells us the same thing \u201cThis is the most loving kitten I have ever had!\u201d\n\nDanielle is anything but \u201cjust\u201d a foster. She transports from San Diego to homes as far as Vegas. \n\nWhere there is a home waiting, Danielle is getting in her car to deliver their new family member. \n\nWe are so thankful for the Jacobs and their support for DPS!\n"
  },
  "fosters"  : [{
    "name" : "Jane and Chuck",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/foster\/fosters\/jane-and-chuck.jpg"
  }, {
    "name" : "Lola and Bobi",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/dps-logo.png"
  }, {
    "name" : "Amy and Ian",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/foster\/fosters\/amy-and-ian.png"
  }]
}
*/
