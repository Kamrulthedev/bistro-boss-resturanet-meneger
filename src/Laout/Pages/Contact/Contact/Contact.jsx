
import Footer from "../../Home/Saherd/Footer/Footer";
import Navber from "../../Home/Saherd/Navber/Navber";
import ContactBannar from "../ContactBannar/ContactBannar";

const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <ContactBannar></ContactBannar>
            <div className='flex flex-col items-center space-y-6 mb-8 mt-16 justify-center'>
                <h1 className='text-[#D99904] text-lg'>---Visit Us---</h1>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
                <h3 className='text-4xl'>OUR LOCATION</h3>
                <p className='border w-[424px] h-[4px] text-center flex-shrink-0'></p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contact;