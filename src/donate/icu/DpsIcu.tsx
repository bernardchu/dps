import * as React from 'react';
import MicroModal from 'react-micro-modal';
import DpsApi from '../../api/DpsApi';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';
import DpsIcuModal from './DpsIcuModal';
import DpsIcuTile from './DpsIcuTile';
import './icu.scss';

interface IDpsIcuState extends IDpsAsyncState {
  icu: IDpsIcuAnimal[];
}

export default class DpsIcu extends React.PureComponent<{}, IDpsIcuState> {
  public componentDidMount() {
    DpsApi.getIcu()
      .then((icu) => {
        this.setState({
          loaded: true,
          icu: icu
        });
      }, (error) => {
        // TODO
      });
  }

  public render() {
    const icu = this.state?.icu;
    const loaded = this.state?.loaded;
    return (<>
      <div className="row">
        <h2>Intensive Care</h2>
        <p>Some of the dogs we rescue need a little more TLC before they are ready to
          find their furever homes. They come to us with a bellyful of puppies, a
          broken limb or missing eye. We make sure they get patched up and adopted
          into loving families. Read on for a behind-the-scenes look at some of our
          dogs who needed more care. Anything you can donate to help with their vet
          costs is much appreciated!</p>
        <div className="col-xs-12 row icu">
          {!loaded && <DpsLoading />}
          {loaded && icu.map(animal =>
            <MicroModal
              trigger={(handleOpen) => <DpsIcuTile animal={animal} handleOpen={handleOpen} />}
              openInitially={false}
              closeOnOverlayClick={true}
              closeOnEscapePress={true}
              disableFirstElementFocus={true}
              key={animal.photo}>
              {() => <DpsIcuModal animal={animal} />}
            </MicroModal>)}
        </div>
      </div>
    </>);
  }
}
