export interface ISuccessStory {
  id: string;
  name: string;
  date: string;
  story: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
}

export interface IDBSuccessStory {
  id: string;
  stories: ISuccessStory[];
}