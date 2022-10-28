import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Fitness Tracker!</h1> 
            <button>
                <Link to='/routines/create-routine'>Add a Routine</Link>
            </button>
        </div> 

    )
}

export default Home;