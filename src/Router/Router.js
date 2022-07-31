import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import DriverPage from '../Pages/DriverPage/DriverPage';
import CarsPage from '../Pages/CarsPage/CarsPage';
import Addcar from '../Pages/CarsPage/AddCar';
import EventAdd from '../Pages/Home/EventAdd';
import AddDriver from '../Pages/DriverPage/AddDriver';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/addEvent" element={ <EventAdd /> } />
      <Route exact path="/teams" element={ <DriverPage /> } />
      <Route exact path="/teams/addDriver" element={ <AddDriver /> } />
      <Route exact path="/cars" element={ <CarsPage /> } />
      <Route exact path="/cars/addCarro" element={ <Addcar /> } />
    </Routes>
  );
}

export default Router;
