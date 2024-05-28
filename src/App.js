import React from 'react';
import Alarms from './Pages/Alarms/index';
import Machines from './Pages/Machines/index';


// Import scss
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Users from './Pages/Users';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Machines/>}/>
        <Route path={'/alarms/:id'} element={<Alarms/>}/>
        <Route path={'/users'} element={<Users/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
