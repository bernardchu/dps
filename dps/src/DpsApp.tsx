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

function DpsApp() {
  const location = useLocation();
  console.log(location);
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
      <DpsHeader />
      <DpsRoutes />
      <Outlet />
      <DpsFooter />
      {!isDonateState && <MicroModal
        open={modalOpen}
        openInitially={false}
        closeOnOverlayClick={true}
        closeOnEscapePress={true}
        handleClose={() => setModalOpen(false)}>
        {(close) => <DpsDonateModalContent closeModal={close} />}
      </MicroModal>}
    </div>
  );
}

export default DpsApp;
