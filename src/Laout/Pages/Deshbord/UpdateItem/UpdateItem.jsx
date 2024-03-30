import { useLoaderData } from "react-router-dom";
import Title from "../../Home/Saherd/Title/Title";



const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);

    
    return (
        <div>
            <Title subcontitle={'---update---'} subconLocation={'UPDATE ITEM'}></Title>
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
                                <option disabled value={''} selected>Pick a pizza</option>
                                <option>Category</option>
                                <option>Veggie</option>
                                <option>Pepperoni</option>
                                <option>Margherita</option>
                                <option>Hawaiian</option>
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
                <div className="text-center mt-6">
                    <button className="btn btn-sm bg-orange-800 text-white">Update Recipe Details</button>
                </div>
            </div>
         
        </div>
    );
};

export default UpdateItem;