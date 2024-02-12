import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Pages/Home/Saherd/Footer/Footer";
import Navber from "./Pages/Home/Saherd/Navber/Navber";


const MainLout = () => {
    const location = useLocation()
    console.log(location)
    const jestLoginPages = location.pathname.includes('Login') || location.pathname.includes('SignUp')
   
    
    return (
        <div>
         { jestLoginPages ||  <Navber></Navber>}
            <Outlet></Outlet>
          { jestLoginPages || <Footer></Footer>}
        </div>
    );
};

export default MainLout;