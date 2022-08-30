import React from 'react';
import {Navigate} from 'react-router-dom';

const permissionRoute = ({children}) => {
    let userid = localStorage.getItem('token') == null ? false : true;
    
    if(userid){
        return <Navigate to='/notes' replace/>
    }

    return children
}

export default permissionRoute;