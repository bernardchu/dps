import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import DpsApi from '../api/DpsApi';
import { routes } from '../routing/routes';
import DpsDonateModalContent from './DpsDonateModalContent';
import { IDpsModalContent } from './IDpsModalContent';

export function DpsDonateModal() {
  Modal.setAppElement('#dps-app');
  const router = useRouter();
  // don't show the donate modal if they open the page on a donate route
  // currently only searches within top-level routes
  const hideDonateRoutes = Object.keys(routes).map(key => routes[key]).filter(route => route.hideDonate);
  const hideDonatePaths = hideDonateRoutes.map(route => route.path);
  const isHiddenDonateRoute = hideDonatePaths.some(path => router.asPath.indexOf(path) > -1);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalContentState = useState<IDpsModalContent>();
  const modalContent: IDpsModalContent = modalContentState[0] as IDpsModalContent;
  const setModalContent = modalContentState[1];

  React.useEffect(() => {
    !isHiddenDonateRoute && !modalContent && DpsApi.getModalContent()
      .then(content => {
        !modalContent && setModalContent(content);
        setTimeout(() => openModal(), 2000);
      })
      .catch(err => console.log(err));
  }, [openModal, setModalContent, modalContent, isHiddenDonateRoute]);

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '80vw',
      width: '500px'
    }
  };

  return (
    <>
      {!isHiddenDonateRoute && <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <DpsDonateModalContent closeModal={closeModal} content={modalContent} />
      </Modal>}
    </>
  );
}
