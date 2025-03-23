import * as React from 'react';
import MicroModal from 'react-micro-modal';
import DpsApi from '../../api/DpsApi';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';
import DpsIcuModal from './DpsIcuModal';
import DpsIcuTile from './DpsIcuTile';
import './icu.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../routing/routes';

interface IDpsIcuState extends IDpsAsyncState {
  hospice: IDpsIcuAnimal[];
  medical: IDpsIcuAnimal[];
}

export default class DpsIcu extends React.PureComponent<{}, IDpsIcuState> {
  public componentDidMount() {
    DpsApi.getIcu()
      .then((icu) => {
        const [hospice, medical]: IDpsIcuAnimal[][] = icu.reduce<[IDpsIcuAnimal[], IDpsIcuAnimal[]]>(
          ([h, m], animal) => (animal.hospice ? [[...h, animal], m] : [h, [...m, animal]]),
          [[], []]
        );
        this.setState({
          loaded: true,
          hospice,
          medical
        });
      }, (error) => {
        // TODO

      });
  }

  public render() {
    const medical = this.state?.medical;
    const hospice = this.state?.hospice;
    const loaded = this.state?.loaded;
    return (<>
      <div className="row">
        <h2>Medical and Hospice Dogs</h2>
        <p>In 2021, we spent over $100,000 on medical dogs. We hope to save even more dogs with medical special needs in 2022, but we need your help! Click on each dog to read their story. You can donate via the link on their description or any of the methods listed <Link to={`../../${routes.donate.path}/${routes.donate.children!.donate.path}#monetary`}>here</Link>.</p>
        {!loaded && <DpsLoading />}

        {loaded && medical.length > 0 && <>
          <h3>Medical Dogs</h3>
          <div className="col-xs-12 row icu">
            {medical.map(animal =>
              <MicroModal
                trigger={(handleOpen) => <DpsIcuTile animal={animal} handleOpen={handleOpen} />}
                openInitially={false}
                closeOnOverlayClick={true}
                closeOnEscapePress={true}
                disableFirstElementFocus={true}
                key={animal.photo}>
                {(close) => <DpsIcuModal animal={animal} closeModal={close} />}
              </MicroModal>)}
          </div>
        </>}
        {loaded && hospice.length > 0 && <>
          <hr />
          <h3>Hospice Dogs</h3>
          <div className="col-xs-12 row icu">
            {hospice.map(animal =>
              <MicroModal
                trigger={(handleOpen) => <DpsIcuTile animal={animal} handleOpen={handleOpen} />}
                openInitially={false}
                closeOnOverlayClick={true}
                closeOnEscapePress={true}
                disableFirstElementFocus={true}
                key={animal.photo}>
                {(close) => <DpsIcuModal animal={animal} closeModal={close} />}
              </MicroModal>)}
          </div>
        </>}
      </div>
    </>);
  }
}
