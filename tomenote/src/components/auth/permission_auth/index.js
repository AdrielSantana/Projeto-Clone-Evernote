import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const permissionRoute = () => {
    let userid = localStorage.getItem('token') == null ? false : true;

    return (
        !userid ? <Outlet/> : <Navigate to='/notes'/>
    )
}

export default permissionRoute;