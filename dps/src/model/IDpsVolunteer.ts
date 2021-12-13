export interface IDpsVolunteer {
  name: string;
  bio: string;
  photo: string;
  title: string;
  type: DpsVolunteerType
}

type DpsVolunteerType = 'secondary' | 'director' | 'primary'