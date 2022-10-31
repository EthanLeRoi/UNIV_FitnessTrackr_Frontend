
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteRoutine } from '../api';
import { Button, TextField, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

//most likely need attachActivityToRoutine here
//update routine activity


const Routines = ({ routines, token }) => {
  // const [searchTerm, setSearchTerm] = useState('');
  
  // function routineMatches(routine) {
  //   console.log(routine)
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
              <button>
              <Link to='/routines/create-routine'>Add a Routine</Link>
             </button>
          }}> 
            {/* <TextField
             type = 'text'
             placeholder = 'Search'
             onChange = {(event) => setSearchTerm(event.target.value)}
            ></TextField>
            <Button type='Search'>Search</Button> */}
            
           </form>  
          </div>
    {
    
      routines.map((routine) => {
        const { name, goal, _id, isAuthor } = routine;
        return (
          <div className='postHolder' key={_id}>
            <p className='postName'>Name: {name}</p>
            <p className='postGoal'>Goal: {goal}</p>
 
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


// import { Button, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './style.css';

// const Routines= ({ routines }) => {
//   const [searchTerm, setSearchTerm] = useState('');
 
//   function routineMatches(routine, string) {
//       const{ title, description} = routine;
  
//       if (title.toLowerCase().includes(string.toLowerCase()) || description.toLowerCase().includes(string.toLowerCase())) {
//           return post;
//       }
//     // return true if any of the fields you want to check against include the text
//     // strings have an .includes() method 
//   }
  
//   const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
//   const postsToDisplay = searchTerm.length ? filteredPosts : posts;

//   return (
//     <div className='outerDiv' id='outer div element'>
//        <div className='searchedPost'>
//           <form onSubmit={(event) => {
//               event.preventDefault();
//           }}> 
//             <TextField
//              type = 'text'
//              placeholder = 'Search'
//              onChange = {(event) => setSearchTerm(event.target.value)}
//             ></TextField>
//             <Button type='Search'>Search</Button>
            
//            </form>  
//           </div>
//     {
//       postsToDisplay.map((post) => {
//         const {description, location, price, title, _id, isAuthor } = post;
//         return (
//           <div className='postHolder' key={_id}>
//             <h3 className='postTitle'>{title}</h3>
//             <p className='postDescription'>Description: {description}</p>
//             <p className='postPrice'>Price: {price}</p>
//             <p className='postLocation'>Location: {location}</p>
//             {
//               isAuthor ? (
            
//                 <button>
//                   <p className='isAuthor'>Is Author </p>

//                   <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                  
//                 </button>
//               ) : (
                
//                 <button>
//                   <Link class="ViewButton" to={`/posts/${_id}` }>View</Link>
                
//                 </button>
              
//               )
              
//             }
//           </div>
         
//         )
//       })
//     }
//   </div>
//   )
// }


// export default Posts;