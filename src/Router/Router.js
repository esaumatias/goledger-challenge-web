import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import TeamPage from '../Pages/TeamPage/TeamPage';
import CarsPage from '../Pages/CarsPage/CarsPage';
import Addcar from '../Pages/CarsPage/AddCar';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/teams" element={ <TeamPage /> } />
      <Route exact path="/cars" element={ <CarsPage /> } />
      <Route exact path="/cars/addCarro" element={ <Addcar /> } />
    </Routes>
  );
}

export default Router;
