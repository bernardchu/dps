import * as React from 'react';
import { useState } from 'react';
import MicroModal from 'react-micro-modal';
import { useLocation } from 'react-router-dom';
import { routes } from '../routing/routes';
import DpsDonateModalContent from './DpsDonateModalContent';

export interface IDpsDonateModalProps {
}

export function DpsDonateModal(props: IDpsDonateModalProps) {
  const location = useLocation();
  // don't show the donate modal if they open the page on a donate route
  // currently only searches within top-level routes
  const hideDonateRoutes = Object.keys(routes).map(key => routes[key]).filter(route => route.hideDonate);
  const hideDonatePaths = hideDonateRoutes.map(route => route.path);
  const isHiddenDonateRoute = hideDonatePaths.some(path => location.pathname.indexOf(path) > -1);
  const modalState = useState<boolean>(false);
  const modalOpen: boolean = modalState[0];
  const setModalOpen = modalState[1];

  React.useEffect(() => {
    setTimeout(() => setModalOpen(true), 2000);
  }, [setModalOpen]);

  return (
    <>
      {!isHiddenDonateRoute && <MicroModal
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
        {(close) => <DpsDonateModalContent closeModal={close} />}
      </MicroModal>}
    </>
  );
}
