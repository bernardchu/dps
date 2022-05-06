import DpsApi from "../../src/api/DpsApi";
import DpsMeetVolunteers from "../../src/volunteer/meet/DpsMeetVolunteers";

export default function MeetVolunteers({ volunteers }) {
  return <DpsMeetVolunteers
    directors={volunteers.directors}
    primary={volunteers.primary}
    secondary={volunteers.secondary} />
}

export async function getServerSideProps() {
  const volunteers = await DpsApi.getVolunteers();
  return {
    props: { volunteers },
  }
}