import DpsApi from "../../src/api/DpsApi";
import DpsSuccessStory from "../../src/success-stories/success-story/DpsSuccessStory";

export default function SuccessStory({ story }) {
  return <DpsSuccessStory story={story} />
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const story = await DpsApi.getSuccessStoryById(id);
  return {
    props: { story: story },
  }
}