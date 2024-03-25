import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxcios";
import useAuth from "./useAuth";

const useCarts = () => {
   //ten stak quary
   const axiosSeceur = useAxios();
   const { user } = useAuth();

   const { refetch, data: cart = [] } = useQuery({
      queryKey: ['card', user?.email],
      queryFn: async () => {
         const res = await axiosSeceur.get(`/cards?email=${user?.email}`);
         return res.data; // Return the fetched data
      }
   });

   return [cart, refetch];
};

export default useCarts;
