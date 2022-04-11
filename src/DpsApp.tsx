import 'bootstrap-grid-only/bootstrap.css';
import React from 'react';
import { ImgixProvider } from 'react-imgix';
import 'react-micro-modal/dist/index.css';
import { Outlet } from 'react-router-dom';
import { imgixDomain } from './common/DpsImgixDomain';
import { DpsDonateModal } from './donate-modal/DpsDonateModal';
import './DpsApp.scss';
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';
import DpsRoutes from './routing/DpsRoutes';

function DpsApp() {
  return (
    <div className="container">
      <ImgixProvider domain={imgixDomain}>
        <DpsHeader />
        <DpsRoutes />
        <Outlet />
        <DpsFooter />
        <DpsDonateModal />
      </ImgixProvider>
    </div>
  );
}

export default DpsApp;
