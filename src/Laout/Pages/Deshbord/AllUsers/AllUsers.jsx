import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxcios";

const AllUsers = () => {
const axiosSeceur = useAxios();

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSeceur.get('/users');
            return res.data;
        }
    })

    return (
        <div className="">
            <div className='text-center space-y-6 mb-8 mt-10' >
                <h1 className='text-[#D99904] text-lg '>---How Many---</h1>
                <p className='border  text-center flex-shrink-0 ml-60 mr-60'></p>
                <h3 className='text-3xl '>MANAGE ALL USERS</h3>
                <p className='border dark:border-slate-950 text-center flex-shrink-0 ml-60 mr-60'></p>
            </div>
            <div className="bg-stone-100 p-6 mx-7">
                <h1 className="uppercase ml-10 text-2xl font-semibold ">Total users: {users.length}</h1>

            </div>
        </div>
    );
};

export default AllUsers;