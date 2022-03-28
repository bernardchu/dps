import { IDpsAdoptable } from "../model/IDpsAdoptable";
import { IDpsEventLocation } from "../model/IDpsEventsInterfaces";
import { IDpsVolunteer } from "../model/IDpsVolunteer";

export interface IDpsAvailableApiResponse {
  cats: IDpsAdoptable[];
  dogs: IDpsAdoptable[];
}

export interface IDpsDatesApiResponse {
  [key: string]: IDpsEventLocation;
}

export interface IDpsAvailableIdResponse {
  age: string;
  bio: string[],
  boilerplate: string[];
  breed: string;
  coatLength: string;
  declawed: boolean;
  gender: string;
  goodWithCats: boolean;
  goodWithDogs: boolean;
  goodWithKids: boolean;
  housetrained: boolean;
  id: string;
  name: string;
  pictures: string[];
  primaryBreed: string;
  secondaryBreed: string;
  specialNeeds: boolean;
  species: 'dog' | 'cat';
  upcoming: string;
  age_general: string;
  video: string;
  insurance: string;
  last_updated: string;
  contact: string;
}

export interface IDpsVolunteerApiResponse {
  primary: IDpsVolunteer[];
  secondary: IDpsVolunteer[];
  directors: IDpsVolunteer[];
}