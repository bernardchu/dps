export interface IDpsEventLocation {
  name: string;
  map_url: string;
  events: IDpsEvent[];
}

export interface IDpsEvent {
  date: string;
  time: string;
  note?: string;
}