import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import logo from './../../../../../assets/icon/images.png';
import { useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthProviders";

const Navber = () => {
    const {user, LogOut} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleLogOut = () => {
        LogOut()
            .then(() => {})
        navigate(location?.state ? location.state : '/')
            .catch(error => console.log(error))
    }

    const AddLinks = <>
        <Link className="font-bold text-xs hover:text-lime-500" to='/' >HOME</Link>
        <Link className="font-bold text-xs hover:text-lime-500 " >CONTACT US</Link>
        <Link className="font-bold text-xs hover:text-lime-500 ">DASHBOARD</Link>
        <Link className="font-bold text-xs hover:text-lime-500 " to='/menu' >OUR MENU</Link>
        <Link className="font-bold text-xs hover:text-lime-500  flex" to='/order'>OUR SHOP<FaCartShopping className="text-xl ml-2" /></Link>
        {user?.email ? <>
            <button className="font-bold text-xs hover:text-lime-500 " onClick={handleLogOut}>LOG OUT</button>
        </>
            :<Link className="font-bold text-xs hover:text-lime-500 " to={'/Login'}>LOGINH</Link>
        }
    </>

    return (
        <>
            <div className="navbar fixed text-white z-10 bg-opacity-30 bg-black max-w-screen-xl	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-950 rounded-box w-52">
                        {AddLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost h-10 w-48 items-center "><img className="rounded-lg" src={logo} alt="" /></a>
                </div>
                <div className="navbar-end gap-6 hidden lg:flex ">
                   {AddLinks}
                </div>
                <div>
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="">
                                <div className="avatar items-center">
                                    <div className="w-8 ml-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navber;