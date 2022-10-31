import React, { useState } from "react";
import { createActivities } from "../api";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const CreateActivity = ({ token, fetchActivities, navigate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [isPublic, setIsPublic] = useState(false);


  const newRoutine = {
   title,
   description,
   duration,
   isPublic,
  };

  async function addActivity() {
    const results = await createActivities(token, newRoutine);
    fetchActivities();
    navigate(`/activities`);
  
  }
  return (
    
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addActivity();
        }}
      >
        <div>
          
          <h1>Create A New Activity</h1>
          <input
            type="text"
            placeholder="Title*"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        
          <input
            type="text"
            placeholder="Description*"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
         
         <input
            type="text"
            placeholder="Duration*"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
    

        <FormControlLabel control={<Checkbox type='checkbox'
            color='success'
            checked={isPublic}
            onChange={(event)=> setIsPublic(event.target.checked)}
        />}  label="isPublic?"/>

         <button variant="contained" type="submit">Create Activity</button>

        </div>

      </form>
    
  );
};
export default CreateActivity;