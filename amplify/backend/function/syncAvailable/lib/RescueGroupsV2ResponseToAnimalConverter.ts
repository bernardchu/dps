import assert = require('assert');
import { Animal } from "./Animal";

export class RescueGroupsV2ResponseToAnimalConverter {
  public static parse(raw: string): Animal[] {
    const animalsAsArrayInString = this.cropAnimals(raw);
    const animalsAsStringsInArray = this.splitAnimalsString(animalsAsArrayInString);
    const animalsAsStringArrays = this.splitAnimalStrings(animalsAsStringsInArray);
    return animalsAsStringArrays.map(a => new Animal(a));
  }

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

  private static splitAnimalsString(animalsAsArrayInString): string[] {
    return animalsAsArrayInString.split('],').map(animal => {
      const trimmed = animal.trim();
      return trimmed.substring(2, trimmed.length - 1) // substring gets rid of surrounding [' ']
    });
  }

  private static splitAnimalStrings(animalsAsStringsInArray: string[]): string[][] {
    const ret = animalsAsStringsInArray.map(animal => animal.split(`','`).map(prop => prop.trim()));
    const expectedNumberOfProperties = 49;
    ret.forEach(animal => assert(animal.length === expectedNumberOfProperties, `RescueGroups V2 API has likely changed output - ${expectedNumberOfProperties} properties per animal expected but ${animal.length} found`));
    return ret;
  }
}