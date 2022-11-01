
import React from 'react';
// import {Link} from 'react-router-dom';

const MyRoutines = ({ user }) => {
  const routines = user.routines;
  const userID = user._id;
  
  console.log(user)
  
  return (
    <div>
      <div>
        <h1>List of my routines!</h1>

      </div>
      <div>

        {
          routines && routines.map(routine => {
            const fromUserID = routine.fromUser._id;
            
            if (userID === fromUserID) {
              return (
                <div key={routine._id}>{routine.content}</div>
              )
            }
          })    
        }
      </div>
    </div>
  )
}

export default MyRoutines;