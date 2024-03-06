import { FiPhoneCall } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { FaWarehouse } from "react-icons/fa";

const Location = () => {
    return (
        <div className="flex justify-center gap-4">
            {/* phone contact */}
            <div>
            <div className="w-80 h-48 bg-base-100 shadow-xl border-2 flex flex-col ">
                    <div className="bg-orange-400 p-2 ">
                    <FiPhoneCall className="text-4xl text-white ml-32"></FiPhoneCall>
                    </div>
                    <div className="card-body bg-slate-500 items-center p-8 w-72 ml-3.5">
                        <h2 className="card-title">PHONE</h2>
                        <p>+029 (398) 888422</p>
                    </div>
                </div>
            </div>
            {/* Location contact */}
            <div>
            <div className="w-80 h-48 bg-base-100 shadow-xl border-2 flex flex-col ">
                <div className="bg-orange-400 p-2 ">
                    <IoLocation className="text-4xl text-white ml-32"></IoLocation>
                    </div>
                    <div className="card-body bg-slate-500 items-center p-8 w-72 ml-3.5">
                        <h2 className="card-title">ADDRESS</h2>
                        <p>+029 (398) 888422</p>
                    </div>
                </div>
            </div>
            {/* working Hous */}
            <div>
            <div className="w-80 h-48 bg-base-100 shadow-xl border-2 flex flex-col ">
                <div className="bg-orange-400 p-2 ">
                    <FaWarehouse className="text-4xl text-white ml-32"></FaWarehouse>
                    </div>
                    <div className="card-body bg-slate-500 items-center p-8 w-72 ml-3.5">
                        <h2 className="card-title">WORKING HOUS</h2>
                        <p>+029 (398) 888422</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;