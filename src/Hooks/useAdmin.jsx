import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxcios";

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSeceur = useAxios();
    const { data: isAdmin, isPending: isAdminLoding } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSeceur.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    });
    return [isAdmin, isAdminLoding]
};

export default useAdmin;