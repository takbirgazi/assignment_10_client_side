import Lottie from "lottie-react";
import loder from '../../public/loader.json';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
    return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-20 h-20">
                    <Lottie animationData={loder} loop={true} />
                </div>
            </div>
        );
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}