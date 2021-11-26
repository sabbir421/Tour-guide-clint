import React from 'react';
import notFound from '../../img/error_404_1.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='d-flex mx-auto' src={notFound} alt="" />
            
        </div>
    );
};

export default NotFound;