import { IoIosSend } from "react-icons/io";
const Form = () => {
    return (
        <div className="p-8 h-[600px] bg-slate-500 w-[1100px] ml-6">
            <div className="flex justify-center gap-4">
                <div>
                    <label className="form-control w-96 ">
                        <div className="label">
                            <span className="label-text text-black font-bold">Name*</span>
                        </div>
                        <input type="text" placeholder="Enter your Name" className="input input-bordered " />
                    </label>
                </div>

                <div>
                    <label className="form-control w-96">
                        <div className="label">
                            <span className="label-text text-black font-bold">Email*</span>
                        </div>
                        <input type="text" placeholder="Enter your Email" className="input input-bordered " />
                    </label>
                </div>
            </div>

            <div className="ml-32">
                <label className="form-control w-[780px]">
                    <div className="label">
                        <span className="label-text text-black font-bold">Phone*</span>
                    </div>
                    <input type="text" placeholder="Enter your Phone Number" className="input input-bordered " />
                </label>
            </div>

            <div className="ml-32">
                <label className="form-control w-[100%] max-w-[780px]">
                    <div className="label">
                        <span className="label-text text-black font-bold">Message*</span>
                    </div>
                    <input
                        type="text"

                        className="input input-bordered h-60"
                    />
                </label>
            </div>

            <div className="flex justify-center p-4">
                <button className="relative btn btn-sm bg-indigo-700 w-32 ">Send Message </button>
                <IoIosSend className="absolute ml-28 mt-2"></IoIosSend>
            </div>
        </div>
    );
};

export default Form;