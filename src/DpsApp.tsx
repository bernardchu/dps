import 'bootstrap-grid-only/bootstrap.css';
import Head from 'next/head';
import React from 'react';
import { ImgixProvider } from 'react-imgix';
import { imgixDomain } from './common/DpsImgixDomain';
import { DpsDonateModal } from './donate-modal/DpsDonateModal';
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';

function DpsApp({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,900|Volkhov" rel="stylesheet" />
      </Head>
      <div className="container" id="dps-app">
        <ImgixProvider domain={imgixDomain}>
          <DpsHeader />
          {children}
          <DpsFooter />
          <DpsDonateModal />
        </ImgixProvider>
      </div>
    </>
  );
}

export default DpsApp;
