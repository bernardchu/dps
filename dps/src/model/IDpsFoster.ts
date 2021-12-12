export interface IDpsFostersApiResponse {
  fosters: IDpsFoster[];
  spotlight: IDpsFosterSpotlight;
}

export interface IDpsFoster {
  name: string;
  photo: string;
}

export interface IDpsFosterSpotlight extends IDpsFoster {
  bio: string;
}