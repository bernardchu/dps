import DpsPetDetail from "../../src/adopt/pet-detail/DpsPetDetail";
import DpsApi from "../../src/api/DpsApi";

export default function PetDetail({ pet, print }) {
  return <DpsPetDetail pet={pet} print={print} />
}

export async function getServerSideProps({ query }) {
  const { id, print } = query;
  const pet = await DpsApi.getAvailableById(id);
  return {
    props: {
      pet,
      print: print === 'true'
    },
  }
}