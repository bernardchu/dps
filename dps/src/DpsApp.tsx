import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './DpsApp.scss';
import 'bootstrap-grid-only/bootstrap.css'
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';
import DpsRoutes from './routing/DpsRoutes';
import MicroModal from 'react-micro-modal';
import 'react-micro-modal/dist/index.css';
import DpsDonateModalContent from './DpsDonateModal';

export interface IDpsAppState {
  modalOpen: boolean;
}

class DpsApp extends React.Component<{}, IDpsAppState> {
  public componentDidMount() {
    setTimeout(() => this.setState({ modalOpen: true }), 2000);
  }

  render() {
    const modalOpen = this.state?.modalOpen;
    return (
      <div className="container">
        <DpsHeader />
        <DpsRoutes />
        <Outlet />
        <DpsFooter />
        <MicroModal
          open={modalOpen}
          openInitially={false}
          closeOnOverlayClick={true}
          closeOnEscapePress={true}
          handleClose={() => this.setState({ modalOpen: false })}>
          {(close) => <DpsDonateModalContent closeModal={close} />}
        </MicroModal>
      </div>
    );
  }
}

export default DpsApp;
