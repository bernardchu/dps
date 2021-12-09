import { IDpsAdoptable } from "../model/IDpsAnimal";
import { IDpsEventLocation } from "../model/IDpsEventsInterfaces";

export interface IDpsAvailableApiResponse {
  cats: IDpsAdoptable[];
  dogs: IDpsAdoptable[];
}

export interface IDpsDatesApiResponse {
  [key: string]: IDpsEventLocation;
}