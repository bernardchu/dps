import React from 'react';
import './App.css';
import DpsFooter from './DpsFooter';
import DpsHeader from './header/DpsHeader';

class DpsApp extends React.Component {
  render() {
    return (
      <div className="App">
        <DpsHeader />
        <DpsFooter />
      </div>
    );
  }
}

export default DpsApp;
