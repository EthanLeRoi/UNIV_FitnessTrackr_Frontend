//testing if this pushes
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

import {
    Activities,
    Login,
    Register,
    Routines,
    Users,
    Home
} from './components'; 


const App = () => {

    return (
        <div>
            hello
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
           
        </div>
    )
}


const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);