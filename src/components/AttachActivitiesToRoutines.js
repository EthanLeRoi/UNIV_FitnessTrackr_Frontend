import React, { useState } from "react";
import { attachActivityToRoutine } from "../api";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const CreateRoutineActivity = ({ token, fetchRoutines, navigate }) => {
 
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

      </form>
    
  );
};
export default CreateRoutineActivity;