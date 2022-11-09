import React, { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import Loading from '../../Loadiing/Loading';
import UseContext, { AuthContext } from '../../UseContext/UseContext';


const privetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location  = useLocation();
    if(loading) {
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>;
};

export default privetRoute;

