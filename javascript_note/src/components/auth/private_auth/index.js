import React from 'react';
import {Navigate} from 'react-router-dom';

const privateRoute = ({children}) => {
    let userid = localStorage.getItem('token') == null ? false : true;
    
    if(!userid){
        return <Navigate to='/login' replace/>
    }

    return children
}

export default privateRoute;