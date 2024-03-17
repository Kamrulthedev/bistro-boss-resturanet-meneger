import { FaUtensils } from "react-icons/fa";
import Title from "../../Home/Saherd/Title/Title";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
// import useAxios from "../../../../Hooks/useAxcios";


const Hosting_Image_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const Hosting_Image_api = `https://api.imgbb.com/1/upload?key=${Hosting_Image_key}`;

const AddItem = () => {
    const axiousPublic = useAxiosPublic();
    // const axiosSeceur = useAxios();

    const handlaerSubmitFrom = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.Category.value;
        const price = form.Price.value;
        const recipe = form.recipe.value;
        const fileInput = form.Photo.files[0];  // Get the first selected file
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('recipe', recipe);
        formData.append('image', fileInput, fileInput.name); // Append the file to FormData with its name
        formData.append('Category', category);
        formData.append('Price', price);
    
        try {
            // Upload image to ImgBB
            const imgRes = await axiousPublic.post(Hosting_Image_api, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (imgRes.data.success) {
                // Image uploaded successfully, prepare menu items data
                const menuItems = {
                    name,
                    recipe,
                    image: imgRes.data.data.display_url,
                    Category: category,
                    Price: parseFloat(price)
                };
                // //now Post the new url
                // const menuRes = await axiosSeceur.post('/menu', menuItems);
                // console.log(menuRes.data)
                // if(menuRes.data.insertedId){
                //     //show success popup
                // }
                // Now you can send `menuItems` data to MongoDB or perform any other action
                console.log(menuItems);
            }
    
          
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    


    return (
        <div>

            <Title subcontitle={'---Whats new?---'} subconLocation={'ADD AN ITEM'}></Title>

            <div className="p-8 h-[700px] bg-slate-500 w-[900px] ml-6">
                <form onSubmit={handlaerSubmitFrom}>
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