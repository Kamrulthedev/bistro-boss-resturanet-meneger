

const ContactUs = () => {
    return (
        <div>
        <Navbar></Navbar>
        <ContactBannar></ContactBannar>

      <Title subcontitle={'---Visit Us---'} subconLocation={'OUR LOCATION'}></Title>
         <Location></Location>
         <Title subcontitle={'---Send Us a Message---'} subconLocation={'CONTACT FORM'}></Title>
        <Form></Form>
        <Footer></Footer>
    </div>
    );
};

export default ContactUs;