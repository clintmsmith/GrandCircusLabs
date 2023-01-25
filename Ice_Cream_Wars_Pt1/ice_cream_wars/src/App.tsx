import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AdDesign } from './components/AdDesign';
import { Votes } from './components/Votes';

function App() {
  return (
    <div className="root">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <AdDesign />
        <Votes />
      </div>
    </div>
    
  );
};

export default App;
