import _ = require('lodash');

interface IVolunteersResponse {
  directors: IVolunteer[];
  primary: IVolunteer[];
  secondary: IVolunteer[];
}

export interface IVolunteer {
  bio: string;
  name: string;
  photo: string;
  title: string;
  type: keyof IVolunteersResponse;
}

export class VolunteersHandler {
  public static organize(volunteersData: IVolunteer[]): IVolunteersResponse {
    return _.groupBy(volunteersData, v => v.type) as unknown as IVolunteersResponse;
  }
}