import { IDpsAdoptable } from "../model/IDpsAdoptable";
import { IDpsEvent } from "../model/IDpsEvent";
import { IDpsVolunteer } from "../model/IDpsVolunteer";

export interface IDpsAvailableApiResponse {
  cats: IDpsAdoptable[];
  dogs: IDpsAdoptable[];
}

export type IDpsDatesApiResponse = IDpsEvent[];

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

export type IDpsInHonorOfResponse = IDpsInHonorOfDonation[]

export interface IDpsInHonorOfDonation {
  imgSrc: string;
  name: string;
  message: string;
}