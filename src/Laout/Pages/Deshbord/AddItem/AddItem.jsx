import { FaUtensils } from "react-icons/fa";
import Title from "../../Home/Saherd/Title/Title";

const AddItem = () => {
    return (
        <div>

            <Title subcontitle={'---Whats new?---'} subconLocation={'ADD AN ITEM'}></Title>

            <div className="p-8 h-[700px] bg-slate-500 w-[900px] ml-6">

                <div className="ml-32">
                    <label className="form-control w-[580px]">
                        <div className="label">
                            <span className="label-text text-black font-bold">Recipe name*</span>
                        </div>
                        <input type="text" name="name" placeholder="Recipe name" className="input input-bordered " />
                    </label>
                </div>

                <div className="flex justify-center gap-4">

                    <div>
                        <label className="form-control w-72 ">
                            <div className="label">
                                <span className="label-text text-black font-bold">Category*</span>
                            </div>
                        </label>
                        <select name="Category" className="select select-bordered  w-full max-w-xs">
                            <option disabled selected>Select a Category</option>
                            <option>SSSS</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-control w-72">
                            <div className="label">
                                <span className="label-text text-black font-bold">Price*</span>
                            </div>
                            <input name="Price" type="text" placeholder="Price" className="input input-bordered " />
                        </label>
                    </div>
                </div>


                <div className="ml-32">
                    <label className="form-control  max-w-[580px]">
                        <div className="label">
                            <span className="label-text text-black font-bold">Recipe Details*</span>
                        </div>
                        <input name="recipe"
                            type="text"
                            className="input input-bordered h-60" />
                    </label>
                </div>


                <div className="flex justify-center -ml-64 mt-6 gap-4">
                    <input name="Photo" type="file" className="file-input w-full max-w-xs" />
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