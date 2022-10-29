import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import './App.css';
import './App.css';


import {
  Activities,
  Login,
  Register,
  Routines,
  Home,
 MyRoutines,
  Navbar,
  CreateRoutine,
  EditRoutine,
  CreateActivity,
  AttachActivitiesToRoutines
} from './components'; 

import {
  getRoutines,
<<<<<<< HEAD
  getUserDetails,
  getActivities
=======
  getUserDetails
>>>>>>> 0335b901162dbbf4b02b67cf62d99e7ae4a569cb
} from './api';


const App = () => {
  
 const [routines, setRoutines] = useState([]);
 const [activities, setActivities] = useState([]);
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
<<<<<<< HEAD
    setRoutines(results);
  }
  async function fetchActivities() {
    const results = await getActivities(token)
    setActivities(results);
=======
    setRoutines(results.routines);
>>>>>>> 0335b901162dbbf4b02b67cf62d99e7ae4a569cb
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
      setUser(results);
    } else {
      console.log(results.message);
    }
  }
  
  useEffect(() => {
    fetchRoutines();
    getMe();
    fetchActivities();
  }, [token])
  
  // useEffect(() => {
  //   getMe();
  // }, [token])
  
  return (
    <div>
    
      <Navbar logout={ logout } token={ token }/>

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
          exact path='/activities/create-activity'
          element={<CreateActivity 
            token={ token } 
            fetchActivities={ fetchActivities } 
            navigate={ navigate }
          /> }
        />


<Route 
      exact path='/activities/attach-activities-to-routines'
      element={<AttachActivitiesToRoutines
        token={ token } 
        fetchActivities={ fetchActivities } 
        navigate={ navigate }
      // attachactivitiestoroutines={AttachActivitiesToRoutines}
    />}
    />


<Route 
      path='/routines'
      element={<Routines
      routines={routines}
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
          path='/my-routines' 
          element={<MyRoutines
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