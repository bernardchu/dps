export type species = 'Dog' | 'Cat';

export interface IAnimalBase {
  id: string;
  age: string;
  breed: string;
  gender: string;
  name: string;
  species: species;
}

export interface IAnimalPictures {
  image: string;
  thumb: string;
}

export interface IAnimalCompact extends IAnimalBase {
  imgUrl: string;
}

export interface IAnimalPreCompact extends IAnimalBase {
  pictures: IAnimalPictures[];
}

export interface IAnimalDetailed extends IAnimalBase {
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

export interface IAnimalDetailedProcessed extends IAnimalDetailed {
  pictures: string[];
}

export interface IAnimalFull extends IAnimalDetailed {
  mixed: string;
  ageGeneral: string;
  altered: string;
  size: string;
  upToDate: string;
  color: string;
  pattern: string;
  pictures: IAnimalPictures[];
}