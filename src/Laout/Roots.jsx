import { createBrowserRouter } from "react-router-dom";
import MainLout from "./MainLout";
import Home from "./Pages/Home/Home/Home";
import Menu from "./Pages/menu/Menu/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Deshbord from "./Deshbord/Deshbord";
import Cart from "./Pages/Deshbord/Cart/Cart";
import PrivateRout from "./PrivateRout";
import ErrorPages from "../ErrorPages/ErrorPages";
import AllUsers from "./Pages/Deshbord/AllUsers/AllUsers";



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
        path: "/Deshbord",
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
            }
        ]
    }
])

export default router;