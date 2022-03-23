import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './DpsApp.scss';
import 'bootstrap-grid-only/bootstrap.css'
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';
import DpsRoutes from './routing/DpsRoutes';
import MicroModal from 'react-micro-modal';
import 'react-micro-modal/dist/index.css';
import DpsDonateModalContent from './DpsDonateModal';
import { routes } from './routing/routes';
import { ImgixProvider } from 'react-imgix';
import { imgixDomain } from './common/DpsImgixDomain';

function DpsApp() {
  const location = useLocation();
  // don't show the donate modal if they open the page on a donate route
  const isDonateState = location.pathname.indexOf(routes.donate.path) > -1;
  const modalState = useState<boolean>(false);
  const modalOpen: boolean = modalState[0];
  const setModalOpen = modalState[1];

  React.useEffect(() => {
    setTimeout(() => setModalOpen(true), 2000);
  }, [setModalOpen]);

  return (
    <div className="container">
      <ImgixProvider domain={imgixDomain}>
        <DpsHeader />
        <DpsRoutes />
        <Outlet />
        <DpsFooter />
        {!isDonateState && <MicroModal
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
      </ImgixProvider>
    </div>
  );
}

export default DpsApp;
