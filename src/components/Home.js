// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Fitness Tracker!</h1>
//       {/* <button>
//         <Link to='/posts/create-post'>Add a Post</Link>
//       </button> */}
//     </div>
//   )
// }

// export default Home;

import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
    return (
    <h1> Fitness Tracker</h1>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default Home;
