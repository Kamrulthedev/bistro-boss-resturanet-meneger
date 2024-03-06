
import Footer from "../../Home/Saherd/Footer/Footer";
import Navber from "../../Home/Saherd/Navber/Navber";
import ContactBannar from "../ContactBannar/ContactBannar";

const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <ContactBannar></ContactBannar>
            <div className='text-center space-y-6 mb-8 mt-16' >
                    <h1 className='text-[#D99904] text-lg'>---Don't miss---</h1>
                    <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[360px]'></p>
                    <h3 className='text-4xl'>TODAY'S OFFER</h3>
                    <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[360px]'></p>
                </div>

            <Footer></Footer>
        </div>
    );
};

export default Contact;