import { IDpsAdoptable } from "../model/IDpsAnimal";
import { IDpsEventLocation } from "../model/IDpsEventsInterfaces";

export interface IDpsAvailableApiResponse {
  cats: IDpsAdoptable[];
  dogs: IDpsAdoptable[];
}

export interface IDpsDatesApiResponse {
  [key: string]: IDpsEventLocation;
}

export interface IDpsAvailableIdResponse {
  id: string;
  name: string;
  species: string;
  breed: string;
  primary_breed: string;
  secondary_breed: string;
  age: string;
  age_general: string;
  gender: string;
  video: string;
  pictures: string[];
  coat_length: string;
  upcoming: string;
  boilerplate: string[];
  insurance: string;
  bio: string[],
  dogs: string;
  cats: string;
  kids: string;
  special_needs: string;
  housetrained: string;
  declawed: string;
  last_updated: string;
  contact: string;
}