import { RescueGroupsV2ResponseToAnimalConverter } from '../RescueGroupsV2ResponseToAnimalConverter';
import { RescueGroupsV2ExampleResponse } from './RescueGroupsV2ExampleResponse';

describe('Converting Rescue Groups V2 API response to Animals', () => {
  describe('sanity checks', () => {
    it('should throw if the expected section of the response is not found', () => {
      const unexpected = 'asdf';
      expect(() => {
        RescueGroupsV2ResponseToAnimalConverter.parse(unexpected)
      }).toThrowError(`"this.pet = [" was not found`);
      const missingRight = 'this.pet = [asdf';
      expect(() => {
        RescueGroupsV2ResponseToAnimalConverter.parse(missingRight)
      }).toThrowError(`[" was not found`);
    });
    it('should throw if animals do not have the right number of fields', () => {
      const unexpected = `this.pet = [['a', 'b']];`;
      expect(() => {
        RescueGroupsV2ResponseToAnimalConverter.parse(unexpected)
      }).toThrowError(`properties per animal expected`);
    });
  });

  it('should create the correct number of Animals from real data', () => {
    const parsed = RescueGroupsV2ResponseToAnimalConverter.parse(RescueGroupsV2ExampleResponse);
    expect(parsed).toHaveLength(38);
    expect(parsed[0].name).toBe('Astro');
    expect(parsed[37].name).toBe('Wish');
  });
});