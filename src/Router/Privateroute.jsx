import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/Authprovider";
import { useContext } from "react";
import Loading from "../Components/Loading";


const Privateroute = ({children}) => {

    const { user, loading } = useContext(authContext)
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Privateroute;