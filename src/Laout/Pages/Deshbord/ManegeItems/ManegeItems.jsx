import { AiTwotoneDelete } from "react-icons/ai";
import Title from "../../Home/Saherd/Title/Title";
import useMenu from "../../../../Hooks/useMenu";
import { FaEdit } from "react-icons/fa";


const ManegeItems = () => {
    const [ menu, loding ] = useMenu();

    

    const hanlderFoodDelete = (item) =>{

    }
    const hanlderFoodUpdate = (item) =>{

    }


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
                                    <button onClick={() => hanlderFoodUpdate(item._id)} className="btn btn-ghost btn-xs"> <FaEdit className="text-orange-400 text-2xl" /> </button>
                                    </td>

                                    <th>
                                        <button onClick={() => hanlderFoodDelete(item._id)} className="btn btn-ghost btn-xs"> <AiTwotoneDelete className="text-red-500 text-2xl" /> </button>
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