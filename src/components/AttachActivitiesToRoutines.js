import React, { useState } from "react";
import { attachActivityToRoutine } from "../api";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const CreateRoutineActivity = ({ token, fetchRoutines, navigate, routines }) => {
 
  const [name, setName] = useState("");

  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);


  const newRoutineActivity = {
  
   name, 
   goal,
   isPublic,
  };

  async function addRoutineActivity() {
    const results = await attachActivityToRoutine(token, newRoutineActivity);
    fetchRoutines();
    navigate(`/routines`);
  }
  return (
    
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addRoutineActivity();
        }}
      >
        <div>
          
          <h1>Create A New Routine Activity</h1>
        
        
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
         

    


         <input
            type="text"
            placeholder="Goal*"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
          />

        <FormControlLabel control={<Checkbox type='checkbox'
            color='success'
            checked={isPublic}
            onChange={(event)=> setIsPublic(event.target.checked)}
        />}  label="isPublic?"/>

         <button variant="contained" type="submit">Create Activity Routine</button>

        </div>


        {
    
    routines.map((routine) => {
      const { name, goal, creatorName, _id, activity} = routine;
      return (
        <div className='postHolder' key={_id}>
          <p className='postName'>Name: {name}</p>
          <p className='postGoal'>Goal: {goal}</p>
          <p className='postCreatorName'>Routine By: {creatorName}</p>
          <p  className='postRoutineActivity'>Activities: {activity}</p>
        </div>
       
      )
    })
  }


      </form>
    
  );
};
export default CreateRoutineActivity;