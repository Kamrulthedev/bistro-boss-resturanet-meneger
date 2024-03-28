import { FaUtensils } from "react-icons/fa";
import Title from "../../Home/Saherd/Title/Title";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxios from "../../../../Hooks/useAxcios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import useAxios from "../../../../Hooks/useAxcios";


const Hosting_Image_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Hosting_Image_api = `https://api.imgbb.com/1/upload?key=${Hosting_Image_key}`;

const AddItem = () => {
    const axiousPublic = useAxiosPublic();
    const axiousSeceur = useAxios();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        //image upload to image and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiousPublic.post(Hosting_Image_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data)

        if (res.data.success) {
            //now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                Category: data.Category,
                recipe: data.recipe,
                image: res.data.data.display_url,
                Price: parseFloat(data.Price)
            }
            console.log(menuItem)
            const menuRes = await axiousSeceur.post('/menu', menuItem)

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
           
          
        }

    };



    return (
        <div>

            <Title subcontitle={'---Whats new?---'} subconLocation={'ADD AN ITEM'}></Title>

            <div className="p-8 h-[700px] bg-slate-500 w-[900px] ml-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="ml-32">
                        <label className="form-control w-[580px]">
                            <div className="label">
                                <span className="label-text text-black font-bold">Recipe name*</span>
                            </div>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Recipe name" className="input input-bordered " />
                        </label>
                    </div>

                    <div className="flex justify-center gap-4">

                        <div>
                            <label className="form-control w-72 ">
                                <div className="label">
                                    <span className="label-text text-black font-bold">Category*</span>
                                </div>
                            </label>
                            <select {...register("Category", { required: true })} name="Category" className="select select-bordered  w-full max-w-xs">
                                <option disabled value={''}>Select a Category</option>
                                <option>SALAD</option>
                                <option>PIZZA</option>
                                <option>SOUPS</option>
                                <option>DESSETS</option>
                                <option>DRINKS</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-control w-72">
                                <div className="label">
                                    <span className="label-text text-black font-bold">Price*</span>
                                </div>
                                <input {...register("Price", { required: true })} name="Price" type="text" placeholder="Price" className="input input-bordered " />
                            </label>
                        </div>
                    </div>


                    <div className="ml-32">
                        <label className="form-control  max-w-[580px]">
                            <div className="label">
                                <span className="label-text text-black font-bold">Recipe Details*</span>
                            </div>
                            <input {...register("recipe", { required: true })} name="recipe"
                                type="text"
                                className="input input-bordered h-60" />
                        </label>
                    </div>


                    <div className="flex justify-center -ml-64 mt-6 gap-4">
                        <input {...register("image", { required: true })} name="image" type="file" className="file-input w-full max-w-xs" />

                    </div>


                    <div className="flex justify-start ml-28 p-4">
                        <button className="relative btn btn-sm bg-orange-500 text-white w-32 ">Add Item
                            <FaUtensils className="absolute ml-24 mt-1 text-white"></FaUtensils>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;