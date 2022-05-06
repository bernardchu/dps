import 'bootstrap-grid-only/bootstrap.css';
import React from 'react';
import { ImgixProvider } from 'react-imgix';
import { imgixDomain } from './common/DpsImgixDomain';
import { DpsDonateModal } from './donate-modal/DpsDonateModal';
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';

function DpsApp({ children }: { children: React.ReactNode }) {
  return (
    <div className="container" id="dps-app">
      <ImgixProvider domain={imgixDomain}>
        <DpsHeader />
        {children}
        <DpsFooter />
        <DpsDonateModal />
      </ImgixProvider>
    </div>
  );
}

export default DpsApp;
