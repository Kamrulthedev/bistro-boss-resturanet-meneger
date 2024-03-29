
import Title from "../../Home/Saherd/Title/Title";
import ReservationInfo from "./ReservationInfo";
import { FaClipboardList } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Reservation = () => {

   

    return (
        <div className="bg-white text-black pb-8">
            <Title subcontitle={'-----Reservation-----'} subconLocation={'BOOK A TABLE'}></Title>
            <ReservationInfo></ReservationInfo>
            <div className="text-center">
                <button className="btn bg-orange-400 text-white ">Book A Tarble <FaClipboardList></FaClipboardList></button>
            </div>
            <Title subcontitle={'----Visit Us----'} subconLocation={'OUR LOCATIOIN'}></Title>

            <div className="ml-6 flex">

            <div className="w-80 h-60  shadow-xl border-2 flex flex-col pb-4">
                    <div className="bg-orange-400 p-2 ">
                    <FiPhoneCall className="text-4xl text-white ml-32"></FiPhoneCall>
                    </div>
                    <div className="card-body bg-slate-500 items-center p-8 w-72 ml-3.5">
                        <h2 className="card-title">PHONE</h2>
                        <p>+029 (398) 888422</p>
                    </div>
                </div>

            <div className="w-80 h-60  shadow-xl border-2 flex flex-col pb-4">
                    <div className="bg-orange-400 p-2 ">
                    <FiPhoneCall className="text-4xl text-white ml-32"></FiPhoneCall>
                    </div>
                    <div className="card-body bg-slate-500 items-center p-8 w-72 ml-3.5">
                        <h2 className="card-title">ADDRESS</h2>
                        <p>+029 (398) 888422</p>
                    </div>
                </div>

            <div className="w-80 h-60  shadow-xl border-2 flex flex-col pb-4">
                    <div className="bg-orange-400 p-2 ">
                    <FiPhoneCall className="text-4xl text-white ml-32"></FiPhoneCall>
                    </div>
                    <div className="card-body bg-slate-500 items-center p-8 w-72 ml-3.5">
                        <h2 className="card-title">WORKING HOURS</h2>
                        <p>Mon-Fri: 8:00 AM - 10:00 PM</p>
                        <p>Sat--Sum: 8:00 AM - 10:00 PM</p>
                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default Reservation;