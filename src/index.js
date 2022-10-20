//testing if this pushes

import {
    Activities,
    Login,
    Register,
    Routines,
    Users
} from './components'; 

const App = () => {

    return (
        <div>
            <Routes>

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