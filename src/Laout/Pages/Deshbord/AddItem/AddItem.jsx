import { FaUtensils } from "react-icons/fa";
import Title from "../../Home/Saherd/Title/Title";

const AddItem = () => {
    return (
        <div>
            
            <Title subcontitle={'---Whats new?---'} subconLocation={'ADD AN ITEM'}></Title>

            <div className="p-8 h-[600px] bg-slate-500 w-[900px] ml-6">

                <div className="ml-32">
                    <label className="form-control w-[580px]">
                        <div className="label">
                            <span className="label-text text-black font-bold">Recipe name*</span>
                        </div>
                        <input type="text" placeholder="Recipe name" className="input input-bordered " />
                    </label>
                </div>

                <div className="flex justify-center gap-4">
                    
                    <div>
                        <label className="form-control w-72 ">
                            <div className="label">
                                <span className="label-text text-black font-bold">Category*</span>
                            </div>
                            <select className="select select-accent w-full max-w-xs">
                                <option disabled selected>Select a Catagory</option>
                                <option>SALAD</option>
                                <option>PIZZA</option>
                                <option>SOUP</option>
                                <option>SDESSETS</option>
                                <option>DRINKS</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label className="form-control w-72">
                            <div className="label">
                                <span className="label-text text-black font-bold">Price*</span>
                            </div>
                            <input type="text" placeholder="Price" className="input input-bordered " />
                        </label>
                    </div>
                </div>


                <div className="ml-32">
                    <label className="form-control  max-w-[580px]">
                        <div className="label">
                            <span className="label-text text-black font-bold">Recipe Details*</span>
                        </div>
                        <input
                            type="text"

                            className="input input-bordered h-60"
                        />
                    </label>
                </div>


                <div className="flex justify-center -ml-80 mt-6 gap-4">
                    <button className=" btn  btn-sm ">Choose File</button>
                    <button className="  btn-sm btn ">No file chosen</button>
                </div>


                <div className="flex justify-start ml-28 p-4">
                    <button className="relative btn btn-sm bg-orange-500 text-white w-32 ">Add Item</button>

                    <FaUtensils className="absolute ml-24 mt-2 text-white"></FaUtensils>
                </div>
            </div>
        </div>
    );
};

export default AddItem;