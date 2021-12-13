import * as React from 'react';
import { Link } from 'react-router-dom';
import DpsApi from '../api/DpsApi';
import { IDpsAsyncState } from '../model/IDpsAsyncState';
import { IDpsSuccessStoryCompact } from '../model/IDpsSuccessStory';
import { routes } from '../routing/routes';
import './successStories.scss';

interface IDpsSuccessStoriesState extends IDpsAsyncState {
  stories: IDpsSuccessStoryCompact[];
}

export default class DpsSuccessStories extends React.PureComponent<{}, IDpsSuccessStoriesState> {
  public componentDidMount() {
    DpsApi.getSuccessStories()
      .then((successStories) => {
        this.setState({
          loaded: true,
          stories: successStories
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const loaded = this.state?.loaded;
    const stories = this.state?.stories;
    return (
      <div className="row success-stories">
        {!loaded && <div>Loading...</div>}
        {loaded && stories.map(story =>
          <div className="col-xs-4 col-sm-4 col-md-2 success-stories-dog" key={story.id}>
            <Link to={`${routes.successStories.children!.successStory.path}/?id=${story.id}`} className="img-container">
              <img src={`${story.photo1}?crop=faces,top&fit=crop&h=200&w=200`} />
            </Link>
            <div className="name">{story.name}</div>
          </div>)}
      </div>
    );
  }
}
