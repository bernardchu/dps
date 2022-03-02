interface IFostersResponse {
  fosters: IFosterInfo[];
  spotlight: ISpotlightInfo;
}

interface IFosterInfo {
  name: string;
  photo: string;
}

interface ISpotlightInfo extends IFosterInfo {
  bio: string;
}

export interface ISheetFoster extends IFosterInfo {
  bio?: string;
}

export class FostersHandler {
  public static organize(fostersData: ISheetFoster[]): IFostersResponse {
    const spotlight: ISpotlightInfo = fostersData.find(foster => !!foster.bio) as ISpotlightInfo;
    const fosters: IFosterInfo[] = fostersData.filter(foster => !foster.bio).map(foster => {
      return {
        name: foster.name,
        photo: foster.photo
      };
    });
    return { spotlight, fosters }
  }
}