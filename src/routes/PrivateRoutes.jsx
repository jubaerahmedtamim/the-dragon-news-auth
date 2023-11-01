import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location =  useLocation();
    console.log(location);

    if(loading){
        return <Spinner animation='border' variant='primary'></Spinner>
    }

    if(user){
        return children
    }
    else{
        return <Navigate state={{from: location}} to='/login' replace></Navigate>
    };
};

export default PrivateRoutes;