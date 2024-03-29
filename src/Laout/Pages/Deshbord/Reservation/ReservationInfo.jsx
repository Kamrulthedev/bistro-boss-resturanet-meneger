import { useForm } from "react-hook-form";

const ReservationInfo = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

    }



    return (
        <div>
            <div className="grid grid-cols-3 gap-6 p-7">

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-black text-xl font-bold">Date*</span>
                    </div>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full text-white" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black text-xl font-bold">Time*</span>
                    </div>
                    <input type="time" placeholder="Type here" className="input  text-white input-bordered w-full " />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black text-xl font-bold">Guest*</span>

                    </div>
                    <select className="select select-bordered text-white">
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
                    <input type="name" placeholder="Your Name" className="input input-bordered w-full text-white" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black text-xl font-bold">Phone*</span>
                    </div>
                    <input type="phone" placeholder="Phone Numbar" className="input  text-white input-bordered w-full " />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black text-xl font-bold">Email*</span>
                    </div>
                    <input type="email" placeholder="Email" className="input  text-white input-bordered w-full " />

                </label>
            </div>
        </div>
    );
};

export default ReservationInfo;