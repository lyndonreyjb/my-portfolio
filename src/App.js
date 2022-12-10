import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Page/>
        <About/>
    </div>
  );
}

export default App;
