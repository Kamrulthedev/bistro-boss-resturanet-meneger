import { useForm } from "react-hook-form";
import { FaClipboardList } from "react-icons/fa6";

const ReservationInfo = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-6 p-7">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-black text-xl font-bold">Date*</span>
                        </div>
                        <input type="date" {...register("date")} placeholder="Type here" className="input input-bordered w-full text-white" />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-black text-xl font-bold">Time*</span>
                        </div>
                        <input type="time" {...register("time")} placeholder="Type here" className="input  text-white input-bordered w-full " />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-xl font-bold">Guest*</span>

                        </div>
                        <select {...register("guest", { required: true })} className="select select-bordered text-white">
                            <option disabled selected>Pick one</option>
                            <option>1 Person</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>4 Person</option>
                            <option>5 Person</option>
                            <option>6 Person</option>
                        </select>
                    </label>
                </div>

                <div className="grid grid-cols-3 gap-6 p-7">

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text text-black text-xl font-bold">Name*</span>
                        </div>
                        <input type="name" {...register("name")} placeholder="Your Name" className="input input-bordered w-full text-white" />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-black text-xl font-bold">Phone*</span>
                        </div>
                        <input type="phone" {...register("phone")} placeholder="Phone Numbar" className="input  text-white input-bordered w-full " />
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-xl font-bold">Email*</span>
                        </div>
                        <input type="email" {...register("email")} placeholder="Email" className="input  text-white input-bordered w-full " />

                    </label>
                </div>
                    <div className="text-center">
                        <button className="btn bg-orange-400 text-white ">Book A Tarble <FaClipboardList></FaClipboardList></button>
                    </div>
            </form>
        </div >
    );
};

export default ReservationInfo;