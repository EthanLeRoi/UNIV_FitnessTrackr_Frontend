
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';
import { Button, TextField, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

//most likely need attachActivityToRoutine here
//update routine activity


const Routines = ({ routines, token }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  function routineMatches(routine, string) {
      const{title, name, goal } = routine;
  
      if ((title.toLowerCase().includes(string.toLowerCase())) || name.toLowerCase().includes(string.toLowerCase()) || goal.toLowerCase().includes(string.toLowerCase())) {
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
              <button>
              <Link to='/routines/create-routine'>Add a Routine</Link>
             </button>
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
        const {title, name, goal, _id, isAuthor } = routine;
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
                        <Button className="post-buttons"><Link to={`/posts/edit-post/${_id}`}>Edit</Link></Button>
                        <Button className="post-buttons" onClick={()=> deleteRoutine(token, _id)}>Delete</Button>
                    </ButtonGroup>
                </Typography>    
                </>
              ) : (
                
                <Typography align= 'left'>    
                                    <Button className="post-buttons" variant="contained"><Link to={`/posts/${_id}`}>View</Link></Button>
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


export default Routines;