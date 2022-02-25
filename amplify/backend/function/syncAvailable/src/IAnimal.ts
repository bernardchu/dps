import { IAnimalPictures } from "./IAnimalPictures";
import { species } from "./species";

export interface IAnimalBase {
  id: string;
  age: string;
  breed: string;
  gender: string;
  name: string;
  species: species;
}

export interface IAnimalCompact extends IAnimalBase {
  imgUrl: string;
}

export interface IAnimalDetailed extends IAnimalBase {
  pictures: IAnimalPictures;
  upcoming: string;
  bio: string[];
  boilerplate: string[];
  coatLength: string;
  goodWithDogs: string;
  goodWithCats: string;
  goodWithKids: string;
  declawed: string;
  lastUpdated: string;
  primaryBreed: string;
  secondaryBreed: string;
  housetrained: string;
  specialNeeds: string;
  video: string;
  contact: string;
}

export interface IAnimalFull extends IAnimalDetailed {
  mixed: string;
  ageGeneral: string;
  altered: string;
  size: string;
  upToDate: string;
  color: string;
  pattern: string;
}