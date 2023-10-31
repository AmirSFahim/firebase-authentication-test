import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/authProvider";


const PrivatRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivatRoute;
PrivatRoute.propTypes = {
    children: PropTypes.node
}