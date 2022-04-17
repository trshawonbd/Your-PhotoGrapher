import React from 'react';
import './NotFound.css';
import gif from '../../../images/NotFound/giphy.gif';

const NotFound = () => {
    return (
    <div className='container'>
        <h2 className='py-5'>Not Found</h2>
    
        
        <div className='not-found w-100'>
            
            <img src={gif} alt="" srcset="" />      
        </div>
        </div>
    );
};

export default NotFound;