import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRaouts = (children) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoding] = useAdmin();


    if(loading || isAdminLoding){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to={'/Login'} state={{from: location}} replace></Navigate>
};

export default AdminRaouts;