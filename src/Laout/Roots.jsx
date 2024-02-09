import { createBrowserRouter } from "react-router-dom";
import MainLout from "./MainLout";
import Home from "./Pages/Home/Home/Home";
import Menu from "./Pages/menu/Menu/Menu";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLout></MainLout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'/Login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;