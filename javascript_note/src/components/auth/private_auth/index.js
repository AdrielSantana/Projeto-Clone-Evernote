import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const privateRoute = () => {
    let userid = localStorage.getItem('token') == null ? false : true;

    return (
        userid ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default privateRoute;