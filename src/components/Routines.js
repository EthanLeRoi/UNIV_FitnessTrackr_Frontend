
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';
<<<<<<< HEAD
import { createRoutineActivity } from './AttachActivitiesToRoutines';
import { Button, TextField, Typography } from '@mui/material';
=======
//import { createRoutineActivity } from './AttachActivitiesToRoutines';
import { Button, Typography } from '@mui/material';
>>>>>>> e9ca98b7fc9320a6285834822604491164de56c3
import ButtonGroup from '@mui/material/ButtonGroup';

//most likely need attachActivityToRoutine here


const Routines = ({ routines, token, activities }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  
  // function routineMatches(routine) {
    console.log(routines)
  //     const { name, goal} = routines;
     
  
  //     if ((name.toLowerCase().includes(''.toLowerCase())) || goal.toLowerCase().includes(''.toLowerCase())) {
  //         return routine;
  //     }
  // }

     

  
  
  // const filteredRoutines = routines.filter(routine => routineMatches(routine, searchTerm));
  // const routinesToDisplay = searchTerm.length ? filteredRoutines : routines;

  return (
    
    <div className='outerDiv' id='outer div element'>
       <div className='searchedRoutine'>
          <form onSubmit={(event) => {
              event.preventDefault();

          }}> 
          
        
          <button>
            <Link to='/routines/create-routine'>Add a Routine</Link>
          </button>
          
           </form>  
          </div>
    {
    
      routines.map((routine) => {
        const { name, goal, creatorName, _id, isAuthor, activity} = routine;
        return (
          <div className='postHolder' key={_id}>
            <p className='postName'>Name: {name}</p>
            <p className='postGoal'>Goal: {goal}</p>
            <p className='postCreatorName'>Routine By: {creatorName}</p>
            <p attachActivityToRoutine
            className='postRoutineActivity'>Activities: {activity}</p>
            {
              isAuthor ? (
                <>
                <Typography align = 'left'>
                    <ButtonGroup variant="contained">
                        <Button className="routine-buttons"><Link to={`/routines/edit-post/${_id}`}>Edit</Link></Button>
                        <Button className="routine-buttons" onClick={()=> deleteRoutine(token, _id)}>Delete</Button>
                    </ButtonGroup>
                </Typography>    
                </>
              ) : (
                
                <Typography align= 'left'>    
                                    <Button className="routine-buttons" variant="contained"><Link to={`/routines/${_id}`}>View</Link></Button>
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


