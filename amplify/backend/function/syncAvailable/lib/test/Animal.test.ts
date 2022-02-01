import { Animal } from "../Animal";

const sample = [
  '17388528', // animalID
  'Available', // status
  '2021-12-29 15:47:12', // lastUpdated
  '', // rescueID
  'Astro', // name
  '', // summary
  'Cat', // species
  'Turkish Van (short coat)', // breed
  'Turkish Van', // primaryBreed
  '', // secondaryBreed
  'Male', // sex
  '', // mixed
  'Yes', // dogs
  'Yes', // cats
  '', // kids
  '', // declawed
  'Yes', // housetrained
  'Adult', // age
  '', // specialNeeds
  'Yes', // altered
  '', // size
  'Yes', // uptodate
  '', // color
  'Short', // coatLength
  '', // pattern
  'No', // courtesy
  'No', // found
  '', // foundDate
  '', // foundZipCode
  '', // killDate
  '', // killReason
  '<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Astro is a 4 year old Turkish Van Mix who was one of many cats we rescued from a hoarding situation. Our amazing volunteers have spent countless hours saving and caring for these cats who were in desperate need of help. Its been such a labor of love but the reward of having these wonderful cats find their forever families will be well worth the efforts.</p> <p>Astro was a little shy when he first went to his current foster home but since then he has really blossomed. He has never been shown love in the way he is experiencing it now and he has really started to trust his humans. His foster mom reports in the beginning he was very cautious of her, keeping his distance except during mealtime, but slowly and surely he has now turned into a lap cat. He loves to watch TV on the couch with his foster family and sleeps with his humans in bed at night. He gets along well with other cats and we think he would do fine with a cat savvy dog. If you are looking for a bonded pair, he and Squawk could be adopted together. They are currently in the same foster home and love playing and lounging on the cat tree together for hours on end. All Astor needs is a family to call his own!</p> <p>He has been neutered, tested negative for FIV/FeLV, vaccinated, dewormed, flea treatment applied and microchipped. His adoption fee is $100. Apply to adopt this handsome guy today!</p><br><br></p>', // description
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_500x721.jpg" width="\' + this.picMaxWidth + \'">', // pic1
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_100x144.jpg" width="\' + this.pictmnMaxWidth + \'">', // pictmn1
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_500x485.jpg" width="\' + this.picMaxWidth + \'">', // pic2
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_100x97.jpg" width="\' + this.pictmnMaxWidth + \'">', // pictmn2
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_500x386.jpg" width="\' + this.picMaxWidth + \'">', // pic3
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_100x77.jpg" width="\' + this.pictmnMaxWidth + \'">', // pictmn3
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_433x504.jpg" width="\' + this.picMaxWidth + \'">', // pic4
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_100x116.jpg" width="\' + this.pictmnMaxWidth + \'">', // pictmn4
  '', // video1
  '', // contactName
  '', // contactEmail
  '', // contactCellPhone
  '', // contactHomePhone
  '', // locationZipCode
  '', // locationName
  'Astro', // detailLink
  '2021-10-27 16:54:56' // created
];

let animal: Animal;
beforeEach(() => {
  animal = new Animal(sample);
});

describe('Animal class', () => {
  describe('images', () => {
    it('should have organized images', () => {
      expect(animal.pictures).toHaveLength(4);
    });
  });
});