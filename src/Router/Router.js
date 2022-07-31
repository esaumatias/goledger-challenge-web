import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import DriverPage from '../Pages/DriverPage/DriverPage';
import CarsPage from '../Pages/CarsPage/CarsPage';
import Addcar from '../Pages/CarsPage/AddCar';
import EventAdd from '../Pages/Home/EventAdd';
import AddDriver from '../Pages/DriverPage/AddDriver';
import UpdateEvent from '../Pages/Home/UpdateEvent';
import UpdateCar from '../Pages/CarsPage/UpdateCar';
import UpdateDrive from '../Pages/DriverPage/UpdateDrive';
import TeamPage from '../Pages/TeamPage/TeamPage';
import AddTeam from '../Pages/TeamPage/AddTeam';
import UpdateTeam from '../Pages/TeamPage/UpdateTeam';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/add" element={ <EventAdd /> } />
      <Route exact path="/update/:id" element={ <UpdateEvent /> } />
      <Route exact path="/driver" element={ <DriverPage /> } />
      <Route exact path="/driver/add" element={ <AddDriver /> } />
      <Route exact path="/driver/update/:id" element={ <UpdateDrive /> } />
      <Route exact path="/cars" element={ <CarsPage /> } />
      <Route exact path="/cars/add" element={ <Addcar /> } />
      <Route exact path="/cars/update/:id" element={ <UpdateCar /> } />
      <Route exact path="/team" element={ <TeamPage /> } />
      <Route exact path="/team/add" element={ <AddTeam /> } />
      <Route exact path="/team/update/:id" element={ <UpdateTeam /> } />
    </Routes>
  );
}

export default Router;
