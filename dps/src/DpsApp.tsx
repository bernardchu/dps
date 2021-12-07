import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';
import DpsRoutes from './routing/DpsRoutes';

class DpsApp extends React.Component {
  render() {
    return (
      <div>
        <DpsHeader />
        <DpsRoutes />
        <Outlet />
        <DpsFooter />
      </div>
    );
  }
}

export default DpsApp;
