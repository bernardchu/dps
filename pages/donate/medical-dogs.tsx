import DpsApi from "../../src/api/DpsApi";
import DpsIcu from "../../src/donate/icu/DpsIcu";

export default function MedicalDogs({ icu }) {
  return <DpsIcu icu={icu} />
}

export async function getServerSideProps() {
  const icu = await DpsApi.getIcu();
  return {
    props: { icu: icu },
  }
}
