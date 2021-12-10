import { IDpsAvailableIdResponse } from "../api/IDpsApiResponses";

export default class DpsDetailedPet {
  private _isDog: boolean;
  constructor(private pet: IDpsAvailableIdResponse) {
    this._isDog = /dog/i.test(this.species);
  }

  public get id(): string { return this.pet.id; }
  public get name(): string { return this.pet.name; }
  public get species(): 'dog' | 'cat' { return this.pet.species; }
  public get breed(): string { return this.pet.breed; }
  public get primary_breed(): string { return this.pet.primary_breed; }
  public get secondary_breed(): string { return this.pet.secondary_breed; }
  public get age(): string { return this.pet.age; }
  public get age_general(): string { return this.pet.age_general; }
  public get gender(): string { return this.pet.gender; }
  public get video(): string { return this.pet.video; }
  public get pictures(): string[] { return this.pet.pictures; }
  public get coat_length(): string { return this.pet.coat_length; }
  public get upcoming(): string { return this.pet.upcoming; }
  public get boilerplate(): string[] { return this.pet.boilerplate; }
  public get insurance(): string { return this.pet.insurance; }
  public get bio(): string[] { return this.pet.bio; }
  public get dogs(): boolean { return !!this.pet.dogs; }
  public get cats(): boolean { return !!this.pet.cats; }
  public get kids(): boolean { return !!this.pet.kids; }
  public get special_needs(): boolean { return !!this.pet.special_needs; }
  public get housetrained(): boolean { return !!this.pet.housetrained; }
  public get declawed(): boolean { return !!this.pet.declawed; }
  public get last_updated(): string { return this.pet.last_updated; }
  public get contact(): string { return this.pet.contact; }

  public get isDog(): boolean { return this._isDog }
}