import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import {
  Activities,
  Login,
  Register,
  Routines,
  Users,
  Home
} from './components'; 

function App() {
  return (
    <BrowserRouter >
    <Routes>


      <Route
        path='/'
        element={<Home />}
      />

      <Route 
        path='/Activities' 
        element={<Activities 
        activities={activities} 
    />} 
    />


    <Route 
      path='/Routines'
      element={<Routines
      routines={routines}
    />}
    />

    <Users
      path='/Users'
      element={<Users
      users={users}
    />}
    />


 <Route 
    path='/register' 
    element={<Register 
    setToken={ setToken } 
    token={token} 
    navigate={navigate} 
  />} 
/>
<Route
    path='/login'
    element={ <Login 
    setToken={ setToken }
    navigate={ navigate }
  />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;