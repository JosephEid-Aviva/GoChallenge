import React from 'react';
import './App.css';
import zeroLogo from './zero.svg'
import avivaLogo from './aviva-logo.svg'
import VinFinder from './Components/VinFinder/VinFinder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: "70%"}}>
          <div style={{float: "left", width: "60%"}}>
          <img style={{height: "50px", marginRight: "10px", paddingTop: "45px"}} src={avivaLogo} className="Aviva-logo" alt="aviva-logo" />
          <img style={{height: "45px", marginBottom: "7px"}} src={zeroLogo} className="Zero-logo" alt="zero-logo" />
          </div>
          <div style={{float: "left", width: "40%"}}>
            <h1 style={{float: "left"}}>VIN Finder</h1>
          </div>
        </div>
      </header>
      <main>
        <VinFinder />
      </main>
    </div>
  );
}

export default App;
