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
  // numbers are 0 or 1 representing booleans
  id: string;
  name: string;
  species: 'dog' | 'cat';
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
  dogs: number;
  cats: number;
  kids: number;
  special_needs: number;
  housetrained: number;
  declawed: number;
  last_updated: string;
  contact: string;
}

export interface IDpsVolunteerApiResponse {
  primary: IDpsVolunteer[];
  secondary: IDpsVolunteer[];
  directors: IDpsVolunteer[];
}