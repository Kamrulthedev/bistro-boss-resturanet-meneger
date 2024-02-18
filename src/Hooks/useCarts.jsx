import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxcios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const useCarts = () => {
   //ten stak quary
   const axiosSeceur = useAxios();
   const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
      queryKey: ['cart', user?.email],
      queryFn: async () => {
         const res = await axiosSeceur.get(`/cards? email = ${user.email}`)
         return res.data;
      }
   })
   return [cart, refetch]
};

export default useCarts;