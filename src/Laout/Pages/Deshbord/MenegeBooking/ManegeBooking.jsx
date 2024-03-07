import { AiTwotoneDelete } from "react-icons/ai";
import Title from "../../Home/Saherd/Title/Title";

const ManegeBooking = () => {
    return (
        <div>
            <Title subcontitle={'---At a Glance!---'} subconLocation={'MANAGE ALL BOOKINGS'}></Title>

            <div className="flex justify-between">
                <h1 className="text-2xl font-bold p-8 uppercase">Total items: 6</h1>
            </div>
            {/* taibal */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table lg:w-full w-64">
                        {/* head */}
                        <thead className="bg-amber-100 text-black rounded-xl">
                            <tr className="uppercase">
                                <th>USER EMAIL</th>
                                <th>PHONE NUMBER</th>
                                <th>BOOKING DATE</th>
                                <th>BOOKING TIME</th>
                                <th>ACTIVITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ((item, index) => <tr key={item._id}>
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

                                    <th>
                                        <button className="btn btn-ghost btn-xs"> <AiTwotoneDelete className="text-red-500 text-2xl" /> </button>
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

export default ManegeBooking;