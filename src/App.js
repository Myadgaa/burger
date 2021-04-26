import logo from './logo.svg';
import React from 'react';
import './App.css';

import { Navbar } from './components/navbar'
import { Breadcrumb } from './components/breadcrumb'
import { Tab3 } from './components/tab3'
import { Tab } from './components/tab'

import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Breadcrumb />
      {/* <Tab3 /> */}
      <Tab />
    </div>
  );
}

export default App;
