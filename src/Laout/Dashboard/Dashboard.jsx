import { FaHome } from "react-icons/fa";
import { FaCalendar, FaCartShopping, FaUtensils, FaUsers, FaList, FaBook } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdMedicalInformation } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { TiShoppingBag, TiThMenu } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";

const Deshbord = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="lg:w-72 w-40 min-h-screen bg-amber-300">
                <div className="text-center mt-10 mb-10">
                    <h1 className="text-3xl font-bold text-black">BISTRO BOSS</h1>
                    <p className="text-2xl font-semibold text-black">RESTAURANT</p>
                </div>
                {/* Deshbord side ber */}
                <ul className="menu gap-4">
                    {
                        isAdmin ? <>
                            <li> <NavLink to='/Dashboard/AdminHome' className='hover:text-blue-800 text-black'>
                                <FaHome className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" />ADMIN HOME</NavLink></li>

                            <li> <NavLink to='/Dashboard/AddItems' className='hover:text-blue-800 text-black'>
                                <FaUtensils className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />ADD ITEMS</NavLink></li>

                            <li> <NavLink to='/Dashboard/manegeItems' className='hover:text-blue-800 text-black'>
                                <FaList className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />MANAGE ITEMS</NavLink></li>

                            <li> <NavLink to='/Dashboard/Booking' className='hover:text-blue-800 text-black'>
                                <FaBook className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />MANAGE BOOKINGS</NavLink></li>

                            <li> <NavLink to='/Dashboard/AllUsers' className='hover:text-blue-800 text-black'>
                                <FaUsers className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />ALL USERS</NavLink></li>
                            </>
                         :
                            <>
                                <li> <NavLink to='/Dashboard/Home' className='hover:text-blue-800 text-black'>
                                    <FaHome className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" />UAER HOME</NavLink></li>

                                <li> <NavLink to='/Dashboard/Reservation' className='hover:text-blue-800 text-black'>
                                    <FaCalendar className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />RESERVATION</NavLink></li>

                                <li> <NavLink to='/Dashboard/PaymentHistory' className='hover:text-blue-800 text-black'>
                                    <MdPayment className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />PAYMENT HISTORY</NavLink></li>

                                <li> <NavLink to='/Dashboard/Cart' className='hover:text-blue-800 text-black'>
                                    <FaCartShopping className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />MY CART</NavLink></li>

                                <li> <NavLink to='/Dashboard/Review' className='hover:text-blue-800 text-black'>
                                    <MdPreview className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />ADD REVIWE</NavLink></li>

                                <li> <NavLink to='/Dashboard/Booking' className='hover:text-blue-800 text-black'>
                                    <MdMedicalInformation className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />ADD BOOKING</NavLink></li>
                            </>
                    }
                </ul>

                <p className="border-b-4 -mt-6 p-8 ml-6 mr-6 border-purple-700 mb-10"></p>

                {/* shared nav links */}

                <ul className="menu">
                    <li> <NavLink to='/' className='hover:text-blue-800 text-black'> <FaHome className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" />HOME</NavLink></li>

                    <li> <NavLink to='/menu' className='hover:text-blue-800 text-black'> <TiThMenu className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" />MENU</NavLink></li>

                    <li> <NavLink to='/order' className='hover:text-blue-800 text-black' > <TiShoppingBag className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" />SHOP</NavLink></li>

                    <li> <NavLink to='/ContactUs' className='hover:text-blue-800 text-black'> <MdOutlineEmail className="text-xl ml-2 w-6 h-6 hover:text-lime-500 text-black" />CONTECT</NavLink></li>
                </ul>
            </div>
            {/*/ Desbord Contact   */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshbord;
