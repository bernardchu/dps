import { rescueGroupsV2Animal } from "./rescueGroupsV2Animal";
type species = 'Dog' | 'Cat';
interface IAnimalDescription {
  upcoming: string;
  bio: string;
  insurance: string;
  boilerplate: string[];
  age: number;
}

interface IAnimalPictures {
  image: string;
  thumb: string;
}

/* Example of a chunk of raw output from rescue groups endpoint
[
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
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_500x721.jpg" width="'+this.picMaxWidth +'">', // pic1
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_100x144.jpg" width="'+this.  pictmnMaxWidth+'">', // pictmn1
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_500x485.jpg" width="'+this.picMaxWidth +'">', // pic2
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473655_100x97.jpg" width="'+this. pictmnMaxWidth+'">', // pictmn2
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_500x386.jpg" width="'+this.picMaxWidth +'">', // pic3
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84595485_100x77.jpg" width="'+this. pictmnMaxWidth+'">', // pictmn3
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_433x504.jpg" width="'+this.picMaxWidth +'">', // pic4
  '<img src="https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/84473656_100x116.jpg" width="'+this.  pictmnMaxWidth+'">', // pictmn4
  '', // video1
  '', // contactName
  '', // contactEmail
  '', // contactCellPhone
  '', // contactHomePhone
  '', // locationZipCode
  '', // locationName
  'Astro', // detailLink
  '2021-10-27 16:54:56' // created
],
*/

export class Animal {
  public id: string;
  public lastUpdated: string;
  public name: string;
  public species: species;
  public breed: string;
  public primaryBreed: string;
  public secondaryBreed: string;
  public sex: string;
  public mixed: string;
  public goodWithDogs: string;
  public goodWithCats: string;
  public goodWithKids: string;
  public declawed: string;
  public housetrained: string;
  public age: string;
  public specialNeeds: string;
  public altered: string;
  public size: string;
  public upToDate: string;
  public color: string;
  public coatLength: string;
  public pattern: string;
  public get description(): IAnimalDescription {
    return this._description;
  }
  private _description: IAnimalDescription;
  public get pictures(): IAnimalPictures[] {
    return this._pictures;
  };
  private _pictures: IAnimalPictures[];
  public contact: string;

  constructor(raw: rescueGroupsV2Animal) {
    this.id = raw[0];
    this.lastUpdated = raw[2];
    this.name = raw[4];
    this.species = raw[6] as species;
    this.breed = raw[7];
    this.primaryBreed = raw[8];
    this.secondaryBreed = raw[9];
    this.sex = raw[10];
    this.mixed = raw[11];
    this.goodWithDogs = raw[12];
    this.goodWithCats = raw[13];
    this.goodWithKids = raw[14];
    this.declawed = raw[15];
    this.housetrained = raw[16];
    this.age = raw[17];
    this.specialNeeds = raw[18];
    this.altered = raw[19];
    this.size = raw[20];
    this.upToDate = raw[21];
    this.color = raw[22];
    this.coatLength = raw[23];
    this.pattern = raw[24];
    this._description = Animal.parseDescription(raw[31], this.species);
    this._pictures = Animal.parseImages(raw.slice(32, 40));
    this.contact = raw[42].replace(/(<([^>]+)>)/gi, ""); // strip HTML tags; contact is probably unneeded so it's untested
  }

  private static parseDescription(description: string, species: species): IAnimalDescription {
    // TODO: sanitize HTML entities

    return {
      upcoming: '',
      bio: '',
      insurance: '',
      boilerplate: [''],
      age: 0
    };
  }

  private static parseImages(pictures: string[]): IAnimalPictures[] {
    const pairs = [
      [pictures[0], pictures[1]],
      [pictures[2], pictures[3]],
      [pictures[4], pictures[5]],
      [pictures[6], pictures[7]],
    ];
    const imageUriRegex = /.+src="(.+)" width/g;
    return pairs.filter(pair => pair[0] && pair[1])
      .map(pair => {
        return {
          image: Array.from(pair[0].matchAll(imageUriRegex), m => m[1])[0], // basically just get first capture group from the regex
          thumb: Array.from(pair[1].matchAll(imageUriRegex), m => m[1])[0]
        };
      })
  }
}