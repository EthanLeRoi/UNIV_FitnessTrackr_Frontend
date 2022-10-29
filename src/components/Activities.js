import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteRoutineActivity } from '../api';
import { Button, TextField, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const Activities = ({ activities, token }) => { 
const [searchTerm, setSearchTerm] = useState(''); 

function activityMatches(activity, string) {
    const{ title, goal} = activity;

    if (title.toLowerCase().includes(string.toLowerCase()) || goal.toLowerCase().includes(string.toLowerCase())) {
        return activity;
    }

}

const filteredActivities = activities.filter(activity => activityMatches(activity, searchTerm));
const activitiesToDisplay = searchTerm.length ? filteredActivities : activities;

return (
  <div className='outerDiv' id='outer div element'>
     <div className='searchedActivity'>
        <form onSubmit={(event) => {
            event.preventDefault();
<<<<<<< HEAD
            <button>
            <Link to='activities/attach-activities-to-routines'>Add a Routine Activity</Link>
           </button>
=======
>>>>>>> 0335b901162dbbf4b02b67cf62d99e7ae4a569cb
        }}> 
          <TextField
           type = 'text'
           placeholder = 'Search'
           onChange = {(event) => setSearchTerm(event.target.value)}
          ></TextField>
          <Button type='Search'>Search</Button>
          
         </form>  
        </div>
  {
    activitiesToDisplay.map((activity) => {
      const {name, goal, title, _id, isAuthor } = activity;
      return (
        <div className='postHolder' key={_id}>
          <h3 className='postTitle'>{title}</h3>
          <p className='postName'>Name: {name}</p>
          <p className='postGoal'>Goal: {goal}</p>
          {
            isAuthor ? (
              <>
              <Typography align = 'left'>
                  <ButtonGroup variant="contained">
                      <Button className="post-buttons"><Link to={`/routines/edit-routines/${_id}`}>Edit</Link></Button>
                      <Button className="post-buttons" onClick={()=> deleteRoutineActivity(token, _id)}>Delete</Button>
                  </ButtonGroup>
              </Typography>    
              </>
            ) : (
              
              <Typography align= 'left'>    
                                  <Button className="post-buttons" variant="contained"><Link to={`/routines/${_id}`}>View</Link></Button>
              </Typography>
            
            )
            
          }
        </div>
       
      )
    })
  }
</div>
)



}
export default Activities;