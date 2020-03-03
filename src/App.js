import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';
import { dogs, dogNames } from './globals';



function App({ dogs, dogNames }) {
  return (
    <div>
      <BrowserRouter >
        <Nav dogNames={dogNames}/>
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = { dogs, dogNames }
  

export default App;
