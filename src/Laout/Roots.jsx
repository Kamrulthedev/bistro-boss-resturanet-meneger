import { createBrowserRouter } from "react-router-dom";
import MainLout from "./MainLout";
import Home from "./Pages/Home/Home/Home";
import Menu from "./Pages/menu/Menu/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Deshbord from "./Dashboard/Dashboard";
import Cart from "./Pages/Deshbord/Cart/Cart";
import PrivateRout from "./PrivateRout";
import ErrorPages from "../ErrorPages/ErrorPages";
import AllUsers from "./Pages/Deshbord/AllUsers/AllUsers";
import AdminHome from "./Pages/Deshbord/AdminHome/AdminHome";
import AddItem from "./Pages/Deshbord/AddItem/AddItem";
import ManegeItems from "./Pages/Deshbord/ManegeItems/ManegeItems";
import UpdateItem from "./Pages/Deshbord/UpdateItem/UpdateItem";
import ManegeBooking from "./Pages/Deshbord/MenegeBooking/ManegeBooking";
import AdminRaouts from "../Raouts/AdminRaouts";
import ContactUs from "./Pages/Contact/ContacUs/ContactUs";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLout></MainLout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/ContactUs',
                element:<ContactUs></ContactUs>
            }

        ]
    },
    {
        path: "/Dashboard",
        element: <PrivateRout> <Deshbord></Deshbord></PrivateRout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            //normal user raouts
            {
                path: "Cart",
                element: <Cart></Cart>
            },
            //admin routs
            {
                path: "AllUsers",
                element: <AdminRaouts> <AllUsers></AllUsers></AdminRaouts>
            },
            {
                path: "AdminHome",
                element: <AdminRaouts><AdminHome></AdminHome></AdminRaouts>
            },
            {
                path: 'AddItems',
                element: <AdminRaouts><AddItem></AddItem></AdminRaouts>
            },
            {
                path: 'manegeItems',
                element: <AdminRaouts><ManegeItems></ManegeItems></AdminRaouts>
            },
            {
                path: 'Booking',
                element: <AdminRaouts><ManegeBooking></ManegeBooking></AdminRaouts>
            },
            {
                path: 'UpdateItem',
                element: <AdminRaouts><UpdateItem></UpdateItem></AdminRaouts>
            }
        ]
    }
    
])

export default router;