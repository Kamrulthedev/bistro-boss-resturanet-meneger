
import img1 from './../../../../assets/contact/banner.jpg';

const ContactBannar = () => {
    return (
        <div>
            <div className="hero h-[450px]" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-40 "></div>
                <div className="hero-content text-center hero-overlay text-white bg-opacity-70 w-[700px] h-[272px]">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold">CONTACT US</h1>
                        <p className="mb-5">WOULD YOU LIKE TO TRY A DISH</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ContactBannar;
