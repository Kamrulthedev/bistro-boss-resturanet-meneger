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
import Contact from "./Pages/Contact/Contact/Contact";
import AddItem from "./Pages/Deshbord/AddItem/AddItem";
import ManegeItems from "./Pages/Deshbord/ManegeItems/ManegeItems";
import UpdateItem from "./Pages/Deshbord/UpdateItem/UpdateItem";
import ManegeBooking from "./Pages/Deshbord/MenegeBooking/ManegeBooking";



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
            }
        ]
    },
    {
        path: "/Dashboard",
        element: <PrivateRout> <Deshbord></Deshbord></PrivateRout>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "Cart",
                element: <Cart></Cart>
            },
            //admin routs
            {
                path: "AllUsers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "AdminHome",
                element:<AdminHome></AdminHome>
            },
            {
                path:'AddItems',
                element:<AddItem></AddItem>
            },
            {
                path:'manegeItems',
                element:<ManegeItems></ManegeItems>
            },
            {
                path:'Booking',
                element:<ManegeBooking></ManegeBooking>
            },
            {
                path:'UpdateItem',
                element:<UpdateItem></UpdateItem>
            }
        ]
    },
    {
        path:'/Contact',
        element:<Contact></Contact>,
        children:[
            
        ]
    }
])

export default router;