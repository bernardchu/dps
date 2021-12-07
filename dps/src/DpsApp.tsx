import React from 'react';
import { Outlet } from 'react-router-dom';
import './DpsApp.scss';
import 'bootstrap-grid-only/bootstrap.css'
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';
import DpsRoutes from './routing/DpsRoutes';

class DpsApp extends React.Component {
  render() {
    return (
      <div className="container">
        <DpsHeader />
        <DpsRoutes />
        <Outlet />
        <DpsFooter />
      </div>
    );
  }
}

export default DpsApp;
