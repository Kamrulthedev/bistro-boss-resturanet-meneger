
import Footer from "../../Home/Saherd/Footer/Footer";
import Navber from "../../Home/Saherd/Navber/Navber";
import Title from "../../Home/Saherd/Title/Title";
import ContactBannar from "../ContactBannar/ContactBannar";
import Location from "../Location/Location";

const Contact = () => {
    return (
        <div>
            <Navber></Navber>
            <ContactBannar></ContactBannar>
          <Title subcontitle={'---Visit Us---'} subconLocation={'OUR LOCATION'}></Title>
             <Location></Location>
             <Title subcontitle={'---Send Us a Message---'} subconLocation={'CONTACT FORM'}></Title>
            <Footer></Footer>
        </div>
    );
};

export default Contact;