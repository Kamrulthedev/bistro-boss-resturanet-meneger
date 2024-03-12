import Navber from "../../Home/Saherd/Navber/Navber";
import Title from "../../Home/Saherd/Title/Title";
import Location from "../Location/Location";
import ContactBinnar from './../ContactBannar/ContactBannar';
import Form from './../Form/Form';


const ContactUs = () => {
    return (
        <div>
            <Navber></Navber>
        <ContactBinnar></ContactBinnar>

      <Title subcontitle={'---Visit Us---'} subconLocation={'OUR LOCATION'}></Title>
         <Location></Location>
         <Title subcontitle={'---Send Us a Message---'} subconLocation={'CONTACT FORM'}></Title>
        <Form></Form>
      
    </div>
    );
};

export default ContactUs;