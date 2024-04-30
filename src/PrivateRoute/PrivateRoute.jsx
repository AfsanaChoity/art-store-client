import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const location = useLocation();

    if ( loading) {
        return <div className="text-center mt-20"><span className=" loading loading-spinner loading-lg"></span></div>
    }
    if (!user){
        return <Navigate to='/login' state='/'></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;