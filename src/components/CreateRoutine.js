import React, { useState } from "react";
import { createRoutines } from "../api";

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const CreateRoutine = ({ token, fetchRoutines, navigate }) => {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);


  const newRoutine = {
   title,
   name, 
   goal,
   isPublic
  };
  async function addRoutine() {
    const results = await createRoutines(token, newRoutine);
    fetchRoutines();
    navigate(`/posts`);
  }
  return (
    
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addRoutine();
        }}
      >
        <div>
          
          <h1>Create A New Post</h1>
          <input
            type="text"
            placeholder="Title*"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="text"
            placeholder="Goal*"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
          />
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
         

         <button variant="contained" type="submit">Create Post</button>

        </div>

        <FormControlLabel control={<Checkbox type='checkbox'
            color='success'
            checked={isPublic}
            onChange={(event)=> setIsPublic(event.target.checked)}
        />}  label="Self Deliver?"/>
      </form>
    
  );
};
export default CreateRoutine;