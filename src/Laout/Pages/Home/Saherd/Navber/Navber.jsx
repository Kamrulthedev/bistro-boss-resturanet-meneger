import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from './../../../../../assets/icon/images.png';
import { AuthContext } from "../../../../../providers/AuthProviders";
import useCarts from "../../../../../Hooks/useCarts";
import { useContext } from "react";

const Navber = () => {
    const { user, LogOut } = useContext(AuthContext);

    const [cart] = useCarts();
    const location = useLocation();
    const navigate = useNavigate();

 


    const handleLogOut = () => {
        if (user && user.email) {
            LogOut()
                .then(() => navigate(location?.state ? location.state : '/'))
                .catch(error => console.log(error));
        } else {
            navigate(location?.state ? location.state : '/');
        }
    };


    const AddLinks = <>
        <Link className="font-bold text-xs hover:text-lime-500 Lw " to='/' >HOME</Link>

        <Link className="font-bold text-xs hover:text-lime-500" to='/ContactUs'>CONTACT US</Link>

             <Link className="font-bold text-xs hover:text-lime-500" to='/Dashboard' >DASHBOARD</Link>

      

        <Link className="font-bold text-xs hover:text-lime-500 " to='/menu' >OUR MENU</Link>
        <Link className="font-bold text-xs hover:text-lime-500  flex" to='/order ' >OUR FOOD</Link>
        <Link className="flex " to='/Dashboard/Cart'>
            <FaCartShopping className="text-xl ml-2 w-6 h-6 hover:text-lime-500 " />
            <div className="badge badge-secondary absolute w-8 -ml-2 mt-2 relative">+{cart.length}</div>
        </Link>
        {user?.email ? <>
            <button className="font-bold text-xs hover:text-lime-500 " onClick={handleLogOut}>LOG OUT</button>
        </>
            : <Link className="font-bold text-xs hover:text-lime-500 " to={'/Login'}>LOGINH</Link>
        }
    </>


    const hanlerProfileClick = () => {


    };

    return (
        <>
            <div className="navbar fixed text-white z-10 bg-opacity-30 bg-black max-w-screen-xl	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-white p-2 shadow bg-base-100 rounded-box w-52">
                            {AddLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost h-10 w-48 items-center "><img className="rounded-lg" src={logo} alt="" /></a>
                </div>
                <div className="  gap-5 -ml-28 hidden lg:flex ">
                    {AddLinks}
                </div>
                <div>
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="">
                                <button onClick={hanlerProfileClick}> <div className="avatar items-center">
                                    <div className="w-8 ml-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navber;