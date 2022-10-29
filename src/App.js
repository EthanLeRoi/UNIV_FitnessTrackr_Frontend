import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import './App.css';
import './App.css';


import {
  Activities,
  Login,
  Register,
  Routines,
  Home,
  Profile,
  Navbar,
  CreateRoutine,
  EditRoutine
} from './components'; 

import {
  getRoutines,
  getUserDetails
} from './api';


const App = () => {
  
 const [routines, setRoutines] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  
  const navigate = useNavigate();

  
  function logout() {
    window.localStorage.removeItem('token');
    setToken('');
    setUser({});
  }
  
  async function fetchRoutines() {
    const results = await getRoutines(token)
    setRoutines(results.data.routines);
  }
  
  async function getMe() {
    const storedToken = window.localStorage.getItem('token');
    
    if (!token) {
      if (storedToken) {
        setToken(storedToken);
      }
      return;
    }
    
    const results = await getUserDetails(token)
    if (results.success) {
      setUser(results.data);
    } else {
      console.log(results.error.message);
    }
  }
  
  useEffect(() => {
    fetchRoutines();
  }, [token])
  
  useEffect(() => {
    getMe();
  }, [token])
  
  return (
    <div>
    
      <Navbar logout={ logout } token={ token }/>

    <Routes>


      <Route
        path=''
        element={<Home />}
      />

      <Route 
        path='/Activities' 
        element={<Activities 
        //activities={activities} 
    />} 
    />

<Route 
      path='/routines'
      element={<Routines
      //routines={routines}
    />}
    />
<Route
          exact path='/routines/create-routine'
          element={<CreateRoutine 
            token={ token } 
            fetchRoutines={ fetchRoutines } 
            navigate={ navigate }
          /> }
        />

<Route
          exact path='/routines/edit-routine/:routineID'
          element={<EditRoutine
            routines={ routines }
            token={ token }
            fetchRoutines={ fetchRoutines } 
            navigate={ navigate }
          />}
        />


<Route 
          path='/profile' 
          element={<Profile 
          user={ user }
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
  );
} 



export default App;