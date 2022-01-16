export interface IDpsSuccessStoryCompact {
  id: string;
  name: string;
  photo1: string;
}

export interface IDpsSuccessStory {
  id: string;
  name: string;
  updates: IDpsSuccessStoryUpdate[];
}

export interface IDpsSuccessStoryUpdate {
  date: string;
  photos: string[];
  story: string;
}