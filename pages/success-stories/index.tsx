import DpsApi from '../../src/api/DpsApi';
import DpsSuccessStories from '../../src/success-stories/DpsSuccessStories'

export default function SuccessStories({ stories }) {
  return <DpsSuccessStories stories={stories} />
}

export async function getServerSideProps() {
  const stories = await DpsApi.getSuccessStories();
  return {
    props: { stories },
  }
}
