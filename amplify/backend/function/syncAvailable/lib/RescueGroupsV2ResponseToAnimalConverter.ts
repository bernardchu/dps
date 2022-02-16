import assert = require('assert');
import { Animal } from "./Animal";
import { rescueGroupsV2Animal } from './rescueGroupsV2Animal';

/**
 * See RescueGroupsV2ExampleResponse for an example of what a raw input to this parser would look like.
 * It's basically JavaScript code as string that we need to parse into our actual code. It's very fragile
 * as it depends on the "shape" of the response to not change appreciably, so there are assertions built in
 * to hopefully aid with debugging if RescueGroups changes things one day.
 */
export class RescueGroupsV2ResponseToAnimalConverter {
  public static parse(raw: string): Animal[] {
    const animalsAsArrayInString = this.cropAnimals(raw);
    const animalsAsStringsInArray = this.splitAnimalsString(animalsAsArrayInString);
    const animalsAsStringArrays = this.splitAnimalStrings(animalsAsStringsInArray);
    return animalsAsStringArrays.map(a => new Animal(a));
  }

  /**
   * Trims out the junk that precedes the array of arrays that we need to parse out of the string.
   * @param raw input from API
   * @returns Just the part that we are concerned with ("array" of animal data)
   */
  private static cropAnimals(raw: string): string {
    const leftBound = 'this.pet = [';
    const leftIndex = raw.indexOf(leftBound);
    assert(leftIndex > -1, 'RescueGroups V2 API has likely changed output - "this.pet = [" was not found');
    const leftTrimmed = raw.slice(leftIndex + leftBound.length); // we don't actually want to include leftBound
    const rightBound = `];` // this will appear before the leftBound so it's necessary to trim that out first
    const rightIndex = leftTrimmed.indexOf(rightBound);
    assert(rightIndex > -1, `RescueGroups V2 API has likely changed output - "];" after "this.pet = [" was not found`);
    return leftTrimmed.slice(0, rightIndex);
  }

  /**
   * Begin forming structure from the shapeless initial string - create an array of strings that each represent one animal.
   * eval would probably be easiest but not safe.
   * @param animalsAsArrayInString Just the array part from the raw API response
   * @returns an array of strings, each of which can be further parsed into fields that will eventually become Animals
   */
  private static splitAnimalsString(animalsAsArrayInString): string[] {
    return animalsAsArrayInString.split('],').map(animal => {
      const trimmed = animal.trim();
      return trimmed.substring(2, trimmed.length - 1) // substring gets rid of surrounding [' ']
    });
  }

  /**
   * @param animalsAsStringsInArray array of strings, each of which represents one animal
   * @returns array of string arrays; each string array represents fields for one animal
   */
  private static splitAnimalStrings(animalsAsStringsInArray: string[]): rescueGroupsV2Animal[] {
    const ret = animalsAsStringsInArray.map(animal => animal.split(`','`).map(prop => prop.trim()));
    const expectedNumberOfProperties = 49;
    ret.forEach(animal => assert(animal.length === expectedNumberOfProperties, `RescueGroups V2 API has likely changed output - ${expectedNumberOfProperties} properties per animal expected but ${animal.length} found`));
    return ret;
  }
}