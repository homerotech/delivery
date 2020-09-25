import React from 'react';
import Routes from './routes'
import './App.css';
import CountProvider from './pages/catalogosEEmpresas/Context'

function App() {
  return (<CountProvider>
    <div className="App">
       
        <Routes/>
    </div>
    </CountProvider>
  );
}

export default App;
