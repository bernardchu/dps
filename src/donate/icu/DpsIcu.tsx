import * as React from 'react';
import Modal from 'react-modal';
import DpsApi from '../../api/DpsApi';
import DpsLoading from '../../common/DpsLoading';
import { IDpsAsyncState } from '../../model/IDpsAsyncState';
import { IDpsIcuAnimal } from '../../model/IDpsIcuAnimal';
import { modalStyles } from '../../styles/modalStyles';
import DpsIcuModal from './DpsIcuModal';
import DpsIcuTile from './DpsIcuTile';
import styles from './icu.module.scss';

interface IDpsIcuProps {
  icu: IDpsIcuAnimal[];
}

export default function DpsIcu(props: IDpsIcuProps) {
  Modal.setAppElement('#dps-app');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const icu = props.icu;

  const [modalAnimal, setModalAnimal] = React.useState(icu[0]);

  function handleOpen(clickedAnimal: IDpsIcuAnimal) {
    setModalAnimal(clickedAnimal);
    openModal();
  }

  return (<>
    <div className="row">
      <h2>Medical Dogs</h2>
      <p>In 2021, we spent over $100,000 on medical dogs. We hope to save even more dogs with medical special needs in 2022, but we need your help! Click on each dog to read their story. You can donate via the link on their description or via Zelle, Venmo, or by sending a check.</p>
      <div className={`col-xs-12 row ${styles.icu}`}>
        {icu.map(animal => <DpsIcuTile animal={animal} handleOpen={handleOpen.bind(null, animal)} />)}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}>
          <DpsIcuModal animal={modalAnimal} closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  </>);
}

