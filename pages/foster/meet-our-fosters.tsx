import DpsApi from "../../src/api/DpsApi";
import DpsMeetFosters from "../../src/foster/meet/DpsMeetFosters";

export default function MeetFosters({ fosters }) {
  return <DpsMeetFosters fosters={fosters.fosters} spotlight={fosters.spotlight} />
}

export async function getServerSideProps() {
  const fosters = await DpsApi.getFosters();
  return {
    props: { fosters: fosters },
  }
}
