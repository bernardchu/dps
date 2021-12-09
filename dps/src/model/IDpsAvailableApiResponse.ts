import { IDpsAdoptable } from "./IDpsAnimal";

export interface IDpsAvailableApiResponse {
  cats: IDpsAdoptable[];
  dogs: IDpsAdoptable[];
}