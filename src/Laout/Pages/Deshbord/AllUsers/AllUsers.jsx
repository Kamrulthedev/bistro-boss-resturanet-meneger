import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxcios";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSeceur = useAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSeceur.get('/users');
            console.log('Token from local storage:', localStorage.getItem('access-token'));

            return res.data;
        }
    });


    const hanlderMakeAdmin = user => {
        axiosSeceur.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


    const hanlderDeleteUser = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSeceur.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        })
    }





    return (
        <div className="">
            <div className='flex flex-col items-center space-y-6 mb-8 mt-16 justify-center'>

                <h1 className='text-[#D99904] text-lg '>---How Many---</h1>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
                <h3 className='text-3xl '>MANAGE ALL USERS</h3>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
            </div>
            <div className="bg-stone-100 p-6 mx-7">
                <h1 className="uppercase ml-10 text-2xl font-semibold ">Total users: {users.length}</h1>


                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-orange-300 text-white rounded-t-xl uppercase">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>email</th>
                                <th>role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* row 1 */}
                        {users.map((user, index) => <tr key={user._id}>
                            <th className="text-black">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td className="text-2xl ">
                                {user.role === 'admin' ? 'Admin' : <button><FaUsers onClick={() => hanlderMakeAdmin(user)} className="bg-yellow-400 p-1 rounded-xl"></FaUsers> </button>}
                            </td>

                            <td className="text-2xl"> <button><RiDeleteBin6Line onClick={() => hanlderDeleteUser(user)} className="bg-red-700 text-white p-1 rounded-xl"></RiDeleteBin6Line></button> </td>
                        </tr>)}
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;