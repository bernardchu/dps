export interface IDpsStickyDogCompact {
  id: string;
  name: string;
  donors: string;
  adoption_fee: string;
}

// maybe should inherit from some abstract interface shared with something like IDpsAdoptable but 
// I have no example API response to confirm against
export interface IDpsStickyDog extends IDpsStickyDogCompact {
  pictures: string[];
  bio: string[];
}