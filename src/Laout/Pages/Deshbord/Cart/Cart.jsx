import { Link } from "react-router-dom";
import useCarts from "../../../../Hooks/useCarts";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxcios";

const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, items) => total + items.price, 0);
    const axiosSecure = useAxios();

    const hanlderDelete = id => {

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

                axiosSecure.delete(`/cards/${id}`)
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
        });
    };


    return (
        <div>
              <div className='flex flex-col items-center space-y-6 mb-8 mt-16 justify-center'>
                <h1 className='text-[#D99904] text-lg '>---My Cart---</h1>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
                <h3 className='text-3xl '>WANNA ADD MORE?</h3>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
            </div>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold p-8 uppercase">Total orders : {cart.length}</h1>
                <h1 className="text-2xl font-bold p-8 uppercase">total price : {totalPrice}</h1>
                <Link >
                    <button className="btn btn-sm bg-amber-500 text-black hover:text-white mt-9 mr-6 ">PAY</button>
                </Link>
            </div>
            {/* taibal */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table lg:w-full w-64">
                        {/* head */}
                        <thead className="bg-amber-100 text-black rounded-xl">
                            <tr className="">
                                <th>#</th>
                                <th>Iteme Image</th>
                                <th>Iteme Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
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
                                        <button className="btn btn-ghost btn-xs"> <AiTwotoneDelete onClick={() => hanlderDelete(item._id)} className="text-red-500 text-2xl" /> </button>
                                    </th>
                                </tr>)
                            };
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;