import React from 'react';
import DeviceOrientation from './components/DeviceOrientation';
import Gyroscope from './components/Gyroscope';
import RelativeOrientation from './components/RelativeOrientation';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Gyroscope Demo</h1>
      <DeviceOrientation />
      <Gyroscope />
      <RelativeOrientation />
    </div>
  );
}

export default App;
