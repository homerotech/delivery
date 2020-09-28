import React from 'react';
import Routes from './routes'
import './App.css';
import CountProvider from './Context/Context'

function App() {
  return (<CountProvider>
    <div className="App">
       
        <Routes/>
    </div>
    </CountProvider>
  );
}

export default App;
