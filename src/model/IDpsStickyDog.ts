// maybe should inherit from some abstract interface shared with something like IDpsAdoptable but 
// I have no example API response to confirm against
export interface IDpsStickyDog {
  id: string;
  name: string;
  pictures: string[];
  donors: string;
  adoption_fee: string;
  bio: string[];
  paypal: string;
}