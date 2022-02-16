import { rescueGroupsV2Animal } from "./rescueGroupsV2Animal";
const jsdom = require('jsdom');

type species = 'Dog' | 'Cat';
interface IAnimalDescription {
  upcoming: string;
  bio: string[];
  insurance: string;
  boilerplate: string[];
  age: string;
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

/**
 * Organizes the string arrays that we get from the RescueGroups V2 API into useful fields.
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
  public mixed: boolean;
  public goodWithDogs: boolean;
  public goodWithCats: boolean;
  public goodWithKids: boolean;
  public declawed: boolean;
  public housetrained: boolean;
  public age: string;
  public specialNeeds: boolean;
  public altered: boolean;
  public size: string;
  public upToDate: boolean;
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
    this.mixed = Animal.convertToBoolean(raw[11]);
    this.goodWithDogs = Animal.convertToBoolean(raw[12]);
    this.goodWithCats = Animal.convertToBoolean(raw[13]);
    this.goodWithKids = Animal.convertToBoolean(raw[14]);
    this.declawed = Animal.convertToBoolean(raw[15]);
    this.housetrained = Animal.convertToBoolean(raw[16]);
    this.age = raw[17];
    this.specialNeeds = Animal.convertToBoolean(raw[18]);
    this.altered = Animal.convertToBoolean(raw[19]);
    this.size = raw[20];
    this.upToDate = Animal.convertToBoolean(raw[21]);
    this.color = raw[22];
    this.coatLength = raw[23];
    this.pattern = raw[24];
    this._description = AnimalDescriptionParser.parseDescription(raw[31], this.species);
    this._pictures = Animal.parseImages(raw.slice(32, 40));
    this.contact = raw[42].replace(/(<([^>]+)>)/gi, ""); // strip HTML tags; contact is probably unneeded so it's untested
  }

  /**
   * @param pictures up to eight strings representing up to four pairs (image and thumb) of URIs of images of the animal.
   * @returns images organized into image and thumb
   */
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

  private static convertToBoolean(str: string): boolean {
    return !!str.match(/yes/i);
  }
}

/**
 * A lot of info gets parsed out of the description, which is generally the longest field. See the tests for more info.
 * In general, we parse out just the p html nodes and expect some number (see the constant) of the first nodes to be
 * boilerplate, followed possibly by one node that says if the animal has any upcoming events they will be attending,
 * followed by any number of nodes comprising the animal's bio.
 */
class AnimalDescriptionParser {
  private static EXPECTED_NUMBER_OF_BOILERPLATE_NODES = 2;
  private static CAT_BOILERPLATE = [
    'The adoption fee for adult cats is $100 and $150 per kitten.',
    'All cats are spayed/neutered, microchipped, FIV/FELV tested negative, shots current, dewormed, and on Advantage for fleas.'
  ];
  private static upcomingRegex = /^this\s(?:dog|cat|kitten|puppy)\swill\sbe\s/i;
  private static ageRegex = /(\d+-?\d*)[\s-](weeks?|months?|years?) old/;

  private static unescape(raw: string): string {
    return raw.replaceAll(/\\'/g, "'").replaceAll(/\\"/g, '"');
  }

  private static handleBoilerplate(pNodes: HTMLParagraphElement[], species: species): string[] {
    if (species === 'Dog') {
      return pNodes.slice(0, this.EXPECTED_NUMBER_OF_BOILERPLATE_NODES)
        .map(node => node.innerHTML)
        .map(text => text.startsWith('*') ? text.substring(1) : text)
        .map(t => t.trim());
    }
    return this.CAT_BOILERPLATE;
  }

  private static handleUpcoming(pNodes: HTMLParagraphElement[]): string {
    const expectedUpcomingNodeIndex = this.EXPECTED_NUMBER_OF_BOILERPLATE_NODES;
    const possibleUpcomingInfo = pNodes[expectedUpcomingNodeIndex].innerHTML;
    return possibleUpcomingInfo.match(this.upcomingRegex) ? possibleUpcomingInfo : '';
  }

  private static handleBio(pNodes: HTMLParagraphElement[], isUpcoming: boolean): string[] {
    const bioStartIndex = this.EXPECTED_NUMBER_OF_BOILERPLATE_NODES + (isUpcoming ? 1 : 0);
    return pNodes.slice(bioStartIndex).map(n => n.innerHTML);
  }

  private static handleAge(bio: string[]): string {
    const flattenedBio = bio.reduce((flattened, bioChunk) => flattened + bioChunk, '');
    const match = new RegExp(this.ageRegex).exec(flattenedBio);
    if (!match) { return null; }
    const num = match[1];
    const unit = match[2];
    const correctedUnit = this.handleAgeUnit(num, unit);
    return `${num} ${correctedUnit} old`;
  }

  private static handleAgeUnit(matchedNum: string, unit: string): string {
    const isPlural = matchedNum.indexOf('-') > -1 || matchedNum !== '1';
    if (isPlural) {
      return unit.endsWith('s') ? unit : unit + 's';
    }
    return unit.endsWith('s') ? unit.substring(0, unit.length - 1) : unit;
  }

  public static parseDescription(descriptionIn: string, species: species): IAnimalDescription {
    // TODO: sanitize HTML entities
    const { JSDOM } = jsdom;
    const unescaped = this.unescape(descriptionIn);
    const nodes: Document = new JSDOM(unescaped).window.document;
    const pNodes: HTMLParagraphElement[] = Array.prototype.slice.call(nodes.getElementsByTagName('p'));
    const upcoming: string = this.handleUpcoming(pNodes);
    const bio = this.handleBio(pNodes, !!upcoming);
    const age = this.handleAge(bio);
    const descriptionOut: IAnimalDescription = {
      upcoming,
      bio,
      age,
      insurance: '',
      boilerplate: this.handleBoilerplate(pNodes, species),
    };

    return descriptionOut;
  }
}