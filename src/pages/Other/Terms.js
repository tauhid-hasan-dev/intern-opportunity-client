import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <p className='text-3xl '>Here is our terms and conditions</p>
            <div>
                Go back to register
                <Link to='/register' className="underline text-blue-500">Register</Link>
            </div>
        </div>
    );
};

export default Terms;