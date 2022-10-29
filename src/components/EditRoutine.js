
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateRoutines} from '../api';


const EditRoutine = ({ routines, token, fetchRoutine, navigate }) => {
  const { routineID } = useParams();
  const [currentRoutine] = routines.filter(routine => routine._id === routineID);
  const {title, name, goal, isPublic} = currentRoutine;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newGoal, setNewGoal] = useState(goal);
  const [newName, setNewName] = useState(name);
  const [newIsPublic, setNewIsPublic] = useState(isPublic);
  
  async function editRoutine() {
    const updatedRoutines = {
      token: token,
      title: newTitle,
      name: newName,
    goal: newGoal,
    isPublic: newIsPublic,
    _id: routineID
    }
    await updateRoutines(updatedRoutines);
    fetchRoutine();
  }
  
//   async function handleDelete() {
//     await deleteRoutine(token, currentRoutine._id);
//     fetchRoutines();
//     alert('Your routine was successfully deleted!')
//     navigate('/routines')
//   }
  
  return (
    <form className='editForm' onSubmit={ (ev) => {
      ev.preventDefault();
      editRoutine();
      navigate('/routines')
    }}>
      <input className='editTitle'
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
    
     

      <input className='editName'
        type='text'
        placeholder={name}
        onChange={(ev) => setNewName(ev.target.value)}
      />

  

      <input className='editGoal'
        type='text'
        placeholder={goal}
        onChange={(ev) => setNewGoal(ev.target.value)}
      />

      <input className='newisPublic'
        type='text'
        checked={newIsPublic}
        onChange={(ev) => setNewIsPublic(ev.target.checked)}
      />
  

  <button variant="contained" type="submit">Edit Post</button>
              
    </form>
  )
}

export default EditRoutine;