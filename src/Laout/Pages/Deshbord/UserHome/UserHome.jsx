import {  TiCalendar, TiShoppingCart, TiStar } from "react-icons/ti";
import useAuth from "../../../../Hooks/useAuth";
import UserHomeInfo from "./UserHomeInfo";
import { MdPayment } from "react-icons/md";

const UserHome = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className="bg-slate-200 h-screen">
            <h1 className="text-3xl font-bold  ml-10 text-black pt-14">HI, WELCOME BACK</h1>
            <UserHomeInfo className='mb-16'></UserHomeInfo>
            <div className="mt-12 ml-8">
                <div className="flex flex-col w-full lg:flex-row p-4">
                    <div className="grid flex-grow h-   card bg-orange-100 rounded-box place-items-center">
                        <div className="avatar">
                            <div className="w-40 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <h1 className="text-3xl uppercase -mt-24 text-black">{user.displayName}</h1>
                    </div>

                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow h-96 card bg-yellow-100 rounded-box place-items-center ">
                        <div>
                            <h1 className="text-3xl font-bold text-black">YOUR ACTIVITIES</h1>
                        </div>
                        <div className="-mt-40">
                         <h1 className="flex text-xl font-bold items-center text-blue-600"> <TiShoppingCart className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" /> ORDERS: </h1>
                         <h1 className="flex text-xl font-bold items-center text-yellow-500"> <TiStar className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" /> REVIEWS: </h1>
                         <h1 className="flex text-xl font-bold items-center text-lime-600"> <TiCalendar className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" /> BOOKINGS: </h1>
                         <h1 className="flex text-xl font-bold items-center text-red-600"> <MdPayment className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" /> PAYMENT: </h1>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome; 