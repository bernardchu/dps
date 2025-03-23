interface IICUAnimal {
  name: string;
  photo: string;
  bio: string;
  donateLink: string;
}

export interface IICUSheetAnimal extends IICUAnimal {
  hospice: string;
}

interface IICUAnimalResponse extends IICUAnimal {
  hospice: boolean;
}

export class ICUHandler {
  public static organize(animals: IICUSheetAnimal[]): IICUAnimalResponse[] {
    return animals.map(({ name, photo, bio, donateLink, hospice }) => {
      return {
        name,
        photo,
        bio,
        donateLink,
        hospice: !!parseInt(hospice)
      }
    });
  }
}