import { IDpsAvailableIdResponse } from "../api/IDpsApiResponses";

/**
 * Wrapper class for data coming from API. Makes some types a bit more sensible and takes care of some
 * minor transformations.
 */
export default class DpsDetailedPet {
  private _isDog: boolean;
  private _video: string;

  constructor(private pet: IDpsAvailableIdResponse) {
    this._isDog = /dog/i.test(this.species);
    this._video = pet.video ? pet.video.replace("/v/", "/embed/") : ''; // make URL given by API embed properly
  }

  public get id(): string { return this.pet.id; }
  public get name(): string { return this.pet.name; }
  public get species(): 'dog' | 'cat' { return this.pet.species; }
  public get breed(): string { return this.pet.breed; }
  public get primary_breed(): string { return this.pet.primaryBreed; }
  public get secondary_breed(): string { return this.pet.secondaryBreed; }
  public get age(): string { return this.pet.age; }
  public get age_general(): string { return this.pet.age_general; }
  public get gender(): string { return this.pet.gender; }
  public get video(): string { return this._video; }
  public get pictures(): string[] { return this.pet.pictures; }
  public get coat_length(): string { return this.pet.coatLength; }
  public get upcoming(): string { return this.pet.upcoming; }
  public get boilerplate(): string[] { return this.pet.boilerplate; }
  public get insurance(): string { return this.pet.insurance; }
  public get bio(): string[] { return this.pet.bio; }
  public get dogs(): boolean { return this.pet.goodWithDogs; }
  public get cats(): boolean { return this.pet.goodWithCats; }
  public get kids(): boolean { return this.pet.goodWithKids; }
  public get special_needs(): boolean { return this.pet.specialNeeds; }
  public get housetrained(): boolean { return this.pet.housetrained; }
  public get declawed(): boolean { return this.pet.declawed; }
  public get last_updated(): string { return this.pet.last_updated; }
  public get contact(): string { return this.pet.contact; }

  public get isDog(): boolean { return this._isDog }
}