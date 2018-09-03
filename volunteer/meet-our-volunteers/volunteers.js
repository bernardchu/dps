var volunteersUri = 'http://api.dpsrescue.com/api/volunteers.php';

$(document).ready(function () {
  $.get(volunteersUri)
    .then(function (response) {
      HandlebarsHelpers.compile(response, "primary", ".primary");
      HandlebarsHelpers.compile(response, "primary-modals", ".primary-modals");
      HandlebarsHelpers.compile(response, "secondary", ".secondary");
      MicroModal.init();
    });
});

/* Example API response:
{
  "primary"  : [{
    "name" : "Tera",
    "title": "Executive Director",
    "type" : "primary",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/volunteer\/volunteers\/tera.png",
    "bio"  : "It does not come as a surprise that as Executive Director, Tera has a lot on her plate every minute of every day. She handles everything from start to finish, from when cats and dogs get picked up off the streets or pulled from a kill shelter to being cared for in a foster home until they are safe and sound in their permanent homes with their new families. When it comes to rescuing, Tera does everything in her power to provide animals with what they need. Her assessment in adoption applications fall nothing short of what these animals deserve. \n\nNot only does she manage the front stage of DPS, Tera also runs the backstage show which is what makes the rescue so successful. She finds connections to build a stronger and wider network of caring people who all share one vision of providing neglected animals with the best qualities of life. She is quick to handle any bumps on the road while being responsible for 30-70 animals and 100+ volunteers at a time, and often putting herself aside for others. \n\nShe is a fearless leader and protective mother who looks out for the volunteers and animals like her own. No matter how much she has going on, Tera will not hesitate to stop and take care of the individuals on the team. She is also an influential mentor to many as they enter the animal rescue world and figure out their strengths and weaknesses as a leader and team member. \n\nRather than hold their hands, she cheers and supports from the sidelines as volunteers learn from their own mistakes and empowers them to be self-confident both in and outside of the organization. \n\nAdopters, volunteers, fosters, and other people Tera meets along the way often come back years later just to ask about how she is doing and to thank her again for the incredible impact she has made in their lives and on the rescue. Tera value the relationships with the hundreds of people she meets every day and always welcomes them back with open warms. \n\nWithout Tera, there would be no DPS and the community would lack a significantly inspirational advocate who saves lives and educates the public everywhere she goes. \n"
  }, {
    "name" : "Caroline",
    "title": "Head of Interview Team",
    "type" : "primary",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/volunteer\/volunteers\/caroline.jpg",
    "bio"  : "We asked for a volunteer to transport a dog from our vet in Campbell to Redwood City. Caroline emailed that she could do it. There were a flurry of emails back and forth between a few key volunteers, \u201cDo we have someone we don\u2019t know do this? Do we have any choice? Ok, let her go\u2026 but call as soon as she arrives and take her picture! We want to know who she is\u2026\u201d And so, a few hours later a puppy was delivered and a thank you tweet went out, and that was the first time we heard the name Caroline. Little did we know that she would make such an imprint on our rescue.\n\nOur next adoption event, she made herself known. She was a born leader. She was directing and leading by example. She knew all the volunteers and knew how to motivate them. It was a lively summer and just as things were starting to rev up she said, \u201cNext weekend is my last..\u201d. \n\nWe were devastated as she told us she was leaving for college, we lose all our best to college! \n\nBut this one we wouldn\u2019t let go quietly into the good night. We kept in touch and eventually she became our Lead Interviewer. It was a definite opening we had in the rescue plus it was something she could do from over 2,000 miles away.\n\nCaroline\u2019s family is a two-time foster failure home. The most recent being a little 7 week old puppy found in a box on the side of the road. Caroline stopped and of course saved the little guy. He went down to SoCal but made his way back up to her house for \u201cfostering\u201d in NorCal. \n\nHowever when she was given the deadline of when he had to be listed on the website, she sent a text that said, \u201cCan\u2019t. We\u2019re adopting\u2026\u201d And so little Nibbles joined Luna and Tucker in Caroline\u2019s home. Trust us, nobody was surprised!\n\nCaroline is someone who makes a quiet but forceful mark. She has a reserved but powerful presence and when she is gone is when you really feel the hit. She creates a much smoother and efficient Interview System. We saw better interviews and a real start to relationships because of Caroline. She is a great first Ambassador for the rescue. And soon, we\u2019ll say goodbye to her again as she heads back to the East Coast for another school year. But she\u2019s already left her mark and she\u2019ll continue to do so in our rescue.\n\n"
  }],
  "secondary": [{
    "name" : "Jimi",
    "title": "Trainer, Fuzzy Wolf Dog Training",
    "type" : "secondary",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/volunteer\/volunteers\/jimi.jpg",
    "bio"  : null
  }, {
    "name" : "Dominique",
    "title": "Dog Intakes, Behavior Evaluator",
    "type" : "secondary",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/volunteer\/volunteers\/dominique.jpg",
    "bio"  : null
  }, {
    "name" : "Tracy",
    "title": "On-site Photographer",
    "type" : "secondary",
    "photo": "http:\/\/dps-festive.imgix.net\/images\/volunteer\/volunteers\/tracy.png",
    "bio"  : null
  }]
}

*/
