import { Outlet } from "react-router-dom";
import Footer from "./Pages/Home/Saherd/Footer/Footer";
import Navber from "./Pages/Home/Saherd/Navber/Navber";


const MainLout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLout;