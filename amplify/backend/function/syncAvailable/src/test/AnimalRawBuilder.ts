import { rescueGroupsV2Animal } from '../rescueGroupsV2Animal';

/**
 * Produces arrays that resemble the incoming arrays from the Rescue Groups API.
 * There are sensible values in all the fields by default but they can be modified
 * both at and after construction for testing purposes. For example, default is a Cat
 * but to create a dog
 * 
 * const testDog = new RescueGroupsV2AnimalRawBuilder({ species: 'Dog' }).getRaw();
 * or
 * const testDog = new RescueGroupsV2AnimalRawBuilder().modify({ species: 'Dog' }).getRaw();
 */
export class RescueGroupsV2AnimalRawBuilder {
  private animalID = '17388528';
  private status = 'Available';
  private lastUpdated = '2021-12-29 15:47:12';
  private rescueID = '';
  private name = 'Astro';
  private summary = '';
  private species = 'Cat';
  private breed = 'Turkish Van (short coat)';
  private primaryBreed = 'Turkish Van';
  private secondaryBreed = '';
  private sex = 'Male';
  private mixed = '';
  private dogs = 'Yes';
  private cats = 'Yes';
  private kids = '';
  private declawed = '';
  private housetrained = 'Yes';
  private age = 'Adult';
  private specialNeeds = '';
  private altered = 'Yes';
  private size = '';
  private uptodate = 'Yes';
  private color = '';
  private coatLength = 'Short';
  private pattern = '';
  private courtesy = 'No';
  private found = 'No';
  private foundDate = '';
  private foundZipCode = '';
  private killDate = '';
  private killReason = '';
  private description = '<p>All of our dogs are spayed/neutered, shots current (DHPP, Bordetella and Rabies where applicable), dewormed, flea and tick treated.&nbsp;</p> <p>* If you are interested in a dog, please first read the biography on the dog (keep scrolling down for the bio!) and then go to our website, www.dpsrescue.com for an application. Our adoption fee is $400-$1000. Each biography will specifically list the adoption fee.</p><br><br><p>Astro is a 4 year old Turkish Van Mix who was one of many cats we rescued from a hoarding situation. Our amazing volunteers have spent countless hours saving and caring for these cats who were in desperate need of help. Its been such a labor of love but the reward of having these wonderful cats find their forever families will be well worth the efforts.</p> <p>Astro was a little shy when he first went to his current foster home but since then he has really blossomed. He has never been shown love in the way he is experiencing it now and he has really started to trust his humans. His foster mom reports in the beginning he was very cautious of her, keeping his distance except during mealtime, but slowly and surely he has now turned into a lap cat. He loves to watch TV on the couch with his foster family and sleeps with his humans in bed at night. He gets along well with other cats and we think he would do fine with a cat savvy dog. If you are looking for a bonded pair, he and Squawk could be adopted together. They are currently in the same foster home and love playing and lounging on the cat tree together for hours on end. All Astor needs is a family to call his own!</p> <p>He has been neutered, tested negative for FIV/FeLV, vaccinated, dewormed, flea treatment applied and microchipped. His adoption fee is $100. Apply to adopt this handsome guy today!</p><br><br></p>';
  private pic1 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_500x721.jpg" width="\' + this.picMaxWidth + \'">';
  private pictmn1 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_100x144.jpg" width="\' + this.pictmnMaxWidth + \'">';
  private pic2 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_500x485.jpg" width="\' + this.picMaxWidth + \'">';
  private pictmn2 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_100x97.jpg" width="\' + this.pictmnMaxWidth + \'">';
  private pic3 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_500x386.jpg" width="\' + this.picMaxWidth + \'">';
  private pictmn3 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_100x77.jpg" width="\' + this.pictmnMaxWidth + \'">';
  private pic4 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_433x504.jpg" width="\' + this.picMaxWidth + \'">';
  private pictmn4 = '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_100x116.jpg" width="\' + this.pictmnMaxWidth + \'">';
  private video1 = '';
  private contactName = '';
  private contactEmail = '';
  private contactCellPhone = '';
  private contactHomePhone = '';
  private locationZipCode = '';
  private locationName = '';
  private detailLink = 'Astro';
  private created = '2021-10-27 16:54:56'

  constructor(modifications?: IRescueGroupsV2AnimalProps) {
    modifications && this.modify(modifications);
  }

  public modify(modifications: IRescueGroupsV2AnimalProps) {
    Object.keys(modifications).forEach(key => this[key] = modifications[key]);
  }

  public getRaw(): rescueGroupsV2Animal {
    return [
      this.animalID,
      this.status,
      this.lastUpdated,
      this.rescueID,
      this.name,
      this.summary,
      this.species,
      this.breed,
      this.primaryBreed,
      this.secondaryBreed,
      this.sex,
      this.mixed,
      this.dogs,
      this.cats,
      this.kids,
      this.declawed,
      this.housetrained,
      this.age,
      this.specialNeeds,
      this.altered,
      this.size,
      this.uptodate,
      this.color,
      this.coatLength,
      this.pattern,
      this.courtesy,
      this.found,
      this.foundDate,
      this.foundZipCode,
      this.killDate,
      this.killReason,
      this.description,
      this.pic1,
      this.pictmn1,
      this.pic2,
      this.pictmn2,
      this.pic3,
      this.pictmn3,
      this.pic4,
      this.pictmn4,
      this.video1,
      this.contactName,
      this.contactEmail,
      this.contactCellPhone,
      this.contactHomePhone,
      this.locationZipCode,
      this.locationName,
      this.detailLink,
      this.created,
    ];
  }
}

export interface IRescueGroupsV2AnimalProps {
  animalID?: string;
  status?: string;
  lastUpdated?: string;
  rescueID?: string;
  name?: string;
  summary?: string;
  species?: string;
  breed?: string;
  primaryBreed?: string;
  secondaryBreed?: string;
  sex?: string;
  mixed?: string;
  dogs?: string;
  cats?: string;
  kids?: string;
  declawed?: string;
  housetrained?: string;
  age?: string;
  specialNeeds?: string;
  altered?: string;
  size?: string;
  uptodate?: string;
  color?: string;
  coatLength?: string;
  pattern?: string;
  courtesy?: string;
  found?: string;
  foundDate?: string;
  foundZipCode?: string;
  killDate?: string;
  killReason?: string;
  description?: string;
  pic1?: string;
  pictmn1?: string;
  pic2?: string;
  pictmn2?: string;
  pic3?: string;
  pictmn3?: string;
  pic4?: string;
  pictmn4?: string;
  video1?: string;
  contactName?: string;
  contactEmail?: string;
  contactCellPhone?: string;
  contactHomePhone?: string;
  locationZipCode?: string;
  locationName?: string;
  detailLink?: string;
  created?: string;
}