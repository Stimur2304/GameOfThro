import './App.css';
import React from 'react';
import Character from './page/character/character';
import DetailedInfo from './page/detailed/detailedInfo';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Character/>}/>
        <Route path='/:id' element={<DetailedInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
