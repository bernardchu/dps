import { Animal } from "../Animal";
import { rescueGroupsV2Animal } from "../rescueGroupsV2Animal";
import { RescueGroupsV2AnimalRawBuilder } from "./AnimalRawBuilder";


let animal: Animal;

describe('Animal class', () => {
  describe('images', () => {
    const firstImage = 'https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_500x721.jpg';
    const firstThumb = 'https://s3.amazonaws.com/filestore.rescuegroups.org/2594/pictures/animals/17388/17388528/83348848_100x144.jpg';
    const secondImage = 'image1';
    const secondThumb = 'thumb1';
    const thirdImage = 'image2';
    const thirdThumb = 'thumb2';
    const fourthImage = 'image3';
    const fourthThumb = 'thumb3';
    const makeExampleImageString = (url: string): string => `<img src="${url}" width="\' + this.picMaxWidth + \'">`;

    it('should be organized when there is one well-formed pair', () => {
      const onePair = {
        pic1: makeExampleImageString(firstImage),
        pictmn1: makeExampleImageString(firstThumb),
        pic2: '',
        pictmn2: '',
        pic3: '',
        pictmn3: '',
        pic4: '',
        pictmn4: '',
      }
      const sample: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder(onePair).getRaw();
      animal = new Animal(sample);
      expect(animal.pictures).toHaveLength(1);
      expect(animal.pictures[0].image).toBe(firstImage);
      expect(animal.pictures[0].thumb).toBe(firstThumb);
    });

    it('should be organized when there are two well-formed pairs', () => {
      const twoPairs = {
        pic1: makeExampleImageString(firstImage),
        pictmn1: makeExampleImageString(firstThumb),
        pic2: makeExampleImageString(secondImage),
        pictmn2: makeExampleImageString(secondThumb),
        pic3: '',
        pictmn3: '',
        pic4: '',
        pictmn4: '',
      }
      const sample: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder(twoPairs).getRaw();
      animal = new Animal(sample);
      expect(animal.pictures).toHaveLength(2);
      expect(animal.pictures[0].image).toBe(firstImage);
      expect(animal.pictures[0].thumb).toBe(firstThumb);
      expect(animal.pictures[1].image).toBe(secondImage);
      expect(animal.pictures[1].thumb).toBe(secondThumb);
    });

    it('should be organized when there are three well-formed pairs', () => {
      const threePairs = {
        pic1: makeExampleImageString(firstImage),
        pictmn1: makeExampleImageString(firstThumb),
        pic2: makeExampleImageString(secondImage),
        pictmn2: makeExampleImageString(secondThumb),
        pic3: makeExampleImageString(thirdImage),
        pictmn3: makeExampleImageString(thirdThumb),
        pic4: '',
        pictmn4: '',
      }
      const sample: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder(threePairs).getRaw();
      animal = new Animal(sample);
      expect(animal.pictures).toHaveLength(3);
      expect(animal.pictures[0].image).toBe(firstImage);
      expect(animal.pictures[0].thumb).toBe(firstThumb);
      expect(animal.pictures[1].image).toBe(secondImage);
      expect(animal.pictures[1].thumb).toBe(secondThumb);
      expect(animal.pictures[2].image).toBe(thirdImage);
      expect(animal.pictures[2].thumb).toBe(thirdThumb);
    });

    it('should be organized when there are four well-formed pairs', () => {
      const fourPairs = {
        pic1: makeExampleImageString(firstImage),
        pictmn1: makeExampleImageString(firstThumb),
        pic2: makeExampleImageString(secondImage),
        pictmn2: makeExampleImageString(secondThumb),
        pic3: makeExampleImageString(thirdImage),
        pictmn3: makeExampleImageString(thirdThumb),
        pic4: makeExampleImageString(fourthImage),
        pictmn4: makeExampleImageString(fourthThumb),
      }
      const sample: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder(fourPairs).getRaw();
      animal = new Animal(sample);
      expect(animal.pictures).toHaveLength(4);
      expect(animal.pictures[0].image).toBe(firstImage);
      expect(animal.pictures[0].thumb).toBe(firstThumb);
      expect(animal.pictures[1].image).toBe(secondImage);
      expect(animal.pictures[1].thumb).toBe(secondThumb);
      expect(animal.pictures[2].image).toBe(thirdImage);
      expect(animal.pictures[2].thumb).toBe(thirdThumb);
      expect(animal.pictures[3].image).toBe(fourthImage);
      expect(animal.pictures[3].thumb).toBe(fourthThumb);
    });

    // Never observed in the real data but it doesn't hurt
    it('should be organized when there are two well-formed pairs out of order', () => {
      const fourPairs = {
        pic1: makeExampleImageString(firstImage),
        pictmn1: makeExampleImageString(firstThumb),
        pic2: '',
        pictmn2: '',
        pic3: makeExampleImageString(thirdImage),
        pictmn3: makeExampleImageString(thirdThumb),
        pic4: '',
        pictmn4: '',
      }
      const sample: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder(fourPairs).getRaw();
      animal = new Animal(sample);
      expect(animal.pictures).toHaveLength(2);
      expect(animal.pictures[0].image).toBe(firstImage);
      expect(animal.pictures[0].thumb).toBe(firstThumb);
      expect(animal.pictures[1].image).toBe(thirdImage);
      expect(animal.pictures[1].thumb).toBe(thirdThumb);
    });

    // This should probably eventually be the case but so far we only ever see well-formed pairs or ''
    xit('should not include malformed pairs', () => {
      const badPair = {
        pic1: firstImage,
        pictmn1: firstThumb,
        pic2: '',
        pictmn2: '',
        pic3: '',
        pictmn3: '',
        pic4: '',
        pictmn4: '',
      }
      const sample: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder(badPair).getRaw();
      animal = new Animal(sample);
      expect(animal.pictures).toHaveLength(0);
    });
  });
});