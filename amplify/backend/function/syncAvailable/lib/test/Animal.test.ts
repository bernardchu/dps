import { Animal } from "../Animal";
import { rescueGroupsV2Animal } from "../rescueGroupsV2Animal";
import { RescueGroupsV2AnimalRawBuilder } from "./AnimalRawBuilder";
import { RescueGroupsV2AnimalRawDescriptionBuilder } from "./AnimalRawDescriptionBuilder";

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

  describe('description', () => {
    describe('boilerplate', () => {
      const boilerplate = ['some boilerplate', 'some more boilerplate'];
      const basicDescription = new RescueGroupsV2AnimalRawDescriptionBuilder();
      basicDescription.setBoilerplate([
        boilerplate[0],
        boilerplate[1]
      ]);
      it('should pass through the text in the first two p nodes as boilerplate for dogs', () => {
        const dog: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder({ species: 'Dog', description: basicDescription.build() }).getRaw();
        animal = new Animal(dog);
        expect(animal.description.boilerplate).toEqual(boilerplate);
      });
      it('should ignore given boilerplate and provide an alternative for cats', () => {
        const cat: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder({ species: 'Cat', description: basicDescription.build() }).getRaw();
        animal = new Animal(cat);
        expect(animal.description.boilerplate).not.toEqual(basicDescription.boilerplate);
        expect(animal.description.boilerplate).toEqual([expect.stringMatching('cat'), expect.stringMatching('cat')]);
      });
    });

    describe('upcoming', () => {
      it.each([
        ['This dog will be at a meet and greet event on Saturday, February 5th'],
        ['This cat will be at a meet and greet event on Saturday, February 5th'],
        ['This kitten will be at a meet and greet event on Saturday, February 5th'],
        ['This puppy will be at a meet and greet event on Saturday, February 5th']
      ])(
        'should parse out upcoming info "%s" if present at the beginning of the third p node',
        (upcomingText) => {
          const basicDescription = new RescueGroupsV2AnimalRawDescriptionBuilder();
          basicDescription.setUpcoming(upcomingText);
          basicDescription.isUpcoming = true;
          const upcomingPet: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder({ description: basicDescription.build() }).getRaw();
          animal = new Animal(upcomingPet);
          expect(animal.description.upcoming).toBe(upcomingText);
        }
      );

      it('should not parse out upcoming info if present in other p nodes', () => {
        const basicDescription = new RescueGroupsV2AnimalRawDescriptionBuilder();
        basicDescription.setBoilerplate([
          'This dog will be at a meet and greet event on Saturday, February 5th',
          'This dog will be at a meet and greet event on Saturday, February 5th'
        ]);
        basicDescription.setBio([
          'This dog will be at a meet and greet event on Saturday, February 5th',
          'This dog will be at a meet and greet event on Saturday, February 5th'
        ]);
        basicDescription.setUpcoming('blah');
        basicDescription.isUpcoming = true;
        const notUpcomingPet: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder({ description: basicDescription.build() }).getRaw();
        animal = new Animal(notUpcomingPet);
        expect(animal.description.upcoming).toBeFalsy();
      });

      it('should ignore "will not be"', () => {
        const notUpcoming = "This dog will not be at a meet and greet";
        const basicDescription = new RescueGroupsV2AnimalRawDescriptionBuilder();
        basicDescription.setUpcoming(notUpcoming);
        basicDescription.isUpcoming = true;
        const notUpcomingPet: rescueGroupsV2Animal = new RescueGroupsV2AnimalRawBuilder({ description: basicDescription.build() }).getRaw();
        animal = new Animal(notUpcomingPet);
        expect(animal.description.upcoming).toBeFalsy();
      });
    });

    // Seems the frontend doesn't use this info at the moment
    describe.skip('insurance', () => {
      it.todo('should parse out insurance info from any node beginning with "A healthy pet" after the boilerplate nodes');
    });

    describe('bio', () => {
      it.todo('should include all p nodes except insurance, upcoming, and boilerplate nodes')
      it.todo('should not include non-p nodes')
    });

    describe('age', () => {
      xit.each([
        ['1 week old'],
        ['1-week old'],
        ['2 weeks old'],
        ['3-4 weeks old'],
        ['1 month old'],
        ['1-month old'],
        ['2 months old'],
        ['3-4 months old'],
        ['1 year old'],
        ['1-year old'],
        ['2 years old'],
        ['3-4 years old'],
      ])(
        'should parse "%s"',
        (age) => {
          expect(age).toBe(age);
        }
      );
      it.todo('should be parsed out from the description');
      it.todo('should be parsed from the first occurrence of a string that looks like an age');
      it.todo('should be flexible regarding where in the third p node the age appears');
    });

    it.todo('should not include any HTML tags');
    it.todo('should not include backslash-escaped quotes');
    // Somewhat lower priority since the frontend is already using dangerouslySetInnerHTML
    it.todo('should not include any HTML entities');
  });
});