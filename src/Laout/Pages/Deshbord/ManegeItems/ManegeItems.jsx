import { AiTwotoneDelete } from "react-icons/ai";
import Title from "../../Home/Saherd/Title/Title";
import useMenu from "../../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxcios";
import { Link } from "react-router-dom";


const ManegeItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSeceur = useAxios();
  



    const hanlderFoodDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSeceur.delete(`/menu/${item._id}`)
                console.log(res);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} deleted.`,
                        icon: "success"
                    });
                }
            }
        });
    };



    const hanlderFoodUpdate = (item) => {
        
    };


    return (
        <div>
            <Title subcontitle={'---Hurry Up!---'} subconLocation={'MANAGE ALL ITEMS'}></Title>

            <div className="flex justify-between">
                <h1 className="text-2xl font-bold p-8 uppercase">Total items: {menu.length}</h1>
            </div>
            {/* taibal */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table lg:w-full w-64">
                        {/* head */}
                        <thead className="bg-amber-100 text-black rounded-xl">
                            <tr className="uppercase">
                                <th>#</th>
                                <th>Iteme Image</th>
                                <th>Iteme Name</th>
                                <th>Price</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                 
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">{item.name}</span>
                                    </td>

                                    <td>
                                        <span className="badge badge-ghost badge-sm">$ {item.price}</span>
                                    </td>

                                    <td>
                                        <Link to={`/Dashboard/UpdateItem/${item._id}`}>
                                            <button onClick={hanlderFoodUpdate} className="btn btn-ghost btn-xs">
                                                <FaEdit className="text-orange-400 text-2xl" />
                                            </button>
                                        </Link>

                                    </td>

                                    <th>
                                        <th>
                                            <button onClick={() => hanlderFoodDelete(item)} className="btn btn-ghost btn-xs"> <AiTwotoneDelete className="text-red-500 text-2xl" /> </button>
                                        </th>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManegeItems;