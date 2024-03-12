import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRaouts = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

// Define propTypes for the AdminRaouts component
AdminRaouts.propTypes = {
    children: PropTypes.node.isRequired // Define children prop as a required node
};

export default AdminRaouts;
