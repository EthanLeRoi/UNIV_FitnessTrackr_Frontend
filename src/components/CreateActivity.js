import React, { useState } from "react";
import { createActivities } from "../api";

// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';


const CreateActivity = ({ token, fetchActivities, navigate }) => {
  
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  // const [isPublic, setIsPublic] = useState(false);


  const newRoutine = {
   
   description,
  name
  //  isPublic,
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
            placeholder="Description*"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
         
         <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
    

       
         <button variant="contained" type="submit">Create Activity</button>

        </div>

      </form>
    
  );
};
export default CreateActivity;