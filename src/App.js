import React from 'react'
//import axios from 'axios'
import { action,orginals } from './Constants/urls';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowCost from './Components/RowCost/RowCost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowCost url={orginals} title='Netflix orginals'/>
      <RowCost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;