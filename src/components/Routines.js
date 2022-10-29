
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Routines = ({ routines }) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  function routineMatches(routine, string) {
      const{ title, goal} = routine;
  
      if (title.toLowerCase().includes(string.toLowerCase()) || goal.toLowerCase().includes(string.toLowerCase())) {
          return routine;
      }
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method 
  }
  
  const filteredRoutines = routines.filter(routine => routineMatches(routine, searchTerm));
  const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;

  return (
    <div className='outerDiv' id='outer div element'>
       <div className='searchedRoutine'>
          <form onSubmit={(event) => {
              event.preventDefault();
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
      routinesToDisplay.map((routine) => {
        const {name, goal, title, _id, isAuthor } = routine;
        return (
          <div className='postHolder' key={_id}>
            <h3 className='postTitle'>{title}</h3>
            <p className='postName'>Name: {name}</p>
            <p className='postGoal'>Goal: {goal}</p>
            {
              isAuthor ? (
            
                <button>
                  <p className='isAuthor'>Is Author </p>

                  <Link to={`/routines/edit-routine/${_id}`}>Edit</Link>
                  
                </button>
              ) : (
                
                <button>
                  <Link class="ViewButton" to={`/routines/${_id}` }>View</Link>
                
                </button>
              
              )
              
            }
          </div>
         
        )
      })
    }
  </div>
  )
}


export default Routines;