import * as React from 'react';
import Modal from 'react-modal';
import DpsApi from '../../api/DpsApi';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';
import DpsIcuModal from './DpsIcuModal';
import DpsIcuTile from './DpsIcuTile';
import styles from './icu.module.scss';

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
    Modal.setAppElement('#dps-app');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const icu = this.state?.icu;
    const loaded = this.state?.loaded;
    return (<>
      <div className="row">
        <h2>Medical Dogs</h2>
        <p>In 2021, we spent over $100,000 on medical dogs. We hope to save even more dogs with medical special needs in 2022, but we need your help! Click on each dog to read their story. You can donate via the link on their description or via Zelle, Venmo, or by sending a check.</p>
        <div className="col-xs-12 row icu">
          {!loaded && <DpsLoading />}
          {loaded && icu.map(animal => <>
            <DpsIcuTile animal={animal} handleOpen={openModal} />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              key={animal.photo}>
              <DpsIcuModal animal={animal} closeModal={close} />
            </Modal>
          </>)}
        </div>
      </div>
    </>);
  }
}
