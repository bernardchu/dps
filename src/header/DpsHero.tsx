import React from "react";
import Link from 'next/link';
import Imgix from 'react-imgix';
import DpsHamburgerMenu from '../hamburger/DpsHamburgerMenu';
import DpsSocials from "./DpsSocials";

class DpsHero extends React.Component {
  render() {
    return (
      <div className="row hero">
        <Link href="/">
          <a className="logo col-md-2 hidden-sm hidden-xs">
            <Imgix
              src="/logo-v2.png"
              imgixParams={{ rect: '210,400,390,230', auto: 'format' }}
              htmlAttributes={{ alt: 'DPS Logo' }} />
          </a>
        </Link>
        <Link href="/">
          <a className="logo hidden-md hidden-lg col-sm-10 col-xs-10">
            <Imgix
              src="/logo-v2.png"
              imgixParams={{ rect: '210,400,690,230', auto: 'format' }}
              htmlAttributes={{ alt: 'DPS Logo' }} />
          </a>
        </Link>
        <div className="col-md-8 col-sm-9 title hidden-sm hidden-xs">
          <h1>Doggie Protective Services</h1>
        </div>
        <DpsSocials className="hidden-xs" />
        <DpsHamburgerMenu />
      </div>
    );
  }
}

export default DpsHero;
