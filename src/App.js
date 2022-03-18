import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarShips from './page/StarShipList/StarShipList';
import ShipDetails from './page/ShipDetails/ShipDetails';

import './App.css';

function App() {
  const [navItems, setNavItems] = useState([
    {url: "/star-ships", name: "All Starships"}
  ])
  
  return (
    <>
    <NavBar navItems={navItems}/>
     <Routes>
       <Route path="/star-ships" element={<StarShips />}/>
       <Route path="/ship-details" element={<ShipDetails />}/>
     </Routes>
    </>
  );
}

export default App;
