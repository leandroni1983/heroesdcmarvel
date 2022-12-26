import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';

export const PrivateRouter = ({ children }) => {
    console.log(children)
    const { logged } = useContext(AuthContext);

    return (logged)
        ? children
        : <Navigate to='/login' />
}
