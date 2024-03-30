import { useLoaderData } from "react-router-dom";
import Title from "../../Home/Saherd/Title/Title";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxcios";


const UpdateItem = () => {
    const {name, Category, Price, recipe, _id} = useLoaderData();
    const axiousSeceur = useAxios();



    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

        //now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,
            Category: data.Category,
            recipe: data.recipe,
            Price: parseFloat(data.Price)
        }
        const menuRes = await axiousSeceur.patch(`/menu/${_id}`, menuItem)

        console.log(menuRes.data);
        if (menuRes.data.insertedId) {
            //show the cuesses message
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been Added`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };




    return (
        <div>
            <Title subcontitle={'---update---'} subconLocation={'UPDATE ITEM'}></Title>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-8 h-[600px] bg-slate-500 w-[900px] ml-6">

                    <div className="ml-32">
                        <label className="form-control w-[580px]">
                            <div className="label">
                                <span className="label-text text-black font-bold">Recipe name*</span>
                            </div>
                            <input type="text"  defaultValue={name}{...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered " />
                        </label>
                    </div>

                    <div className="flex justify-center gap-4">
                        <div>
                            <label className="form-control w-72 ">
                                <div className="label">
                                    <span className="label-text text-black font-bold">Category*</span>
                                </div>
                                <select  defaultValue={Category}  {...register("Category", { required: true })} className="select select-accent w-full max-w-xs">
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
                                <input defaultValue={Price} {...register("Price", { required: true })} type="text" placeholder="Price" className="input input-bordered " />
                            </label>
                        </div>
                    </div>


                    <div className="ml-32">
                        <label className="form-control  max-w-[580px]">
                            <div className="label">
                                <span className="label-text text-black font-bold">Recipe Details*</span>
                            </div>
                            <input  defaultValue={recipe}
                                type="text"
                                {...register("recipe", { required: true })}
                                className="input input-bordered h-60"
                            />
                        </label>
                    </div>
                    <div className="text-center mt-6">
                        <button className="btn btn-sm bg-orange-800 text-white">Update Recipe Details</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default UpdateItem;