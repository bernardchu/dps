import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
// import MicroModal from 'react-micro-modal';
import DpsApi from '../api/DpsApi';
import { routes } from '../routing/routes';
import DpsDonateModalContent from './DpsDonateModalContent';
import { IDpsModalContent } from './IDpsModalContent';

export function DpsDonateModal() {
  const router = useRouter();
  // don't show the donate modal if they open the page on a donate route
  // currently only searches within top-level routes
  const hideDonateRoutes = Object.keys(routes).map(key => routes[key]).filter(route => route.hideDonate);
  const hideDonatePaths = hideDonateRoutes.map(route => route.path);
  const isHiddenDonateRoute = hideDonatePaths.some(path => router.asPath.indexOf(path) > -1);
  const modalState = useState<boolean>(false);
  const modalOpen: boolean = modalState[0];
  const setModalOpen = modalState[1];

  const modalContentState = useState<IDpsModalContent>();
  const modalContent: IDpsModalContent = modalContentState[0] as IDpsModalContent;
  const setModalContent = modalContentState[1];

  React.useEffect(() => {
    !isHiddenDonateRoute && !modalContent && DpsApi.getModalContent()
      .then(content => {
        !modalContent && setModalContent(content);
        setTimeout(() => setModalOpen(true), 2000);
      })
      .catch(err => console.log(err));
  }, [setModalOpen, setModalContent, modalContent, isHiddenDonateRoute]);

  return (
    <>
      {/* {!isHiddenDonateRoute && <MicroModal
        open={modalOpen}
        openInitially={false}
        closeOnOverlayClick={true}
        closeOnEscapePress={true}
        overrides={
          {
            Dialog: {
              style: {
                maxWidth: '80vw',
                width: '500px'
              }
            },
            Overlay: {
              style: {
                zIndex: 1001
              }
            }
          }
        }
        handleClose={() => setModalOpen(false)}>
        {(close) => <DpsDonateModalContent closeModal={close} content={modalContent} />}
      </MicroModal>} */}
    </>
  );
}
