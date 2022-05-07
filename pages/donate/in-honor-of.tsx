import DpsApi from '../../src/api/DpsApi';
import DpsInHonorOf from '../../src/donate/in-honor-of/DpsInHonorOf'

export default function InHonorOf({ donations }) {
  return <DpsInHonorOf donations={donations} />
}

export async function getServerSideProps() {
  const donations = await DpsApi.getInHonorOf();
  return {
    props: { donations: donations },
  }
}
