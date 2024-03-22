import { Link, useNavigate } from 'react-router-dom';
import img1 from './../../../assets/others/authentication1.png';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const { createUaer, UpdateUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    const { email, password } = data;
    
    createUaer(email, password)
      .then((result) => {
        console.log(result.user)

        UpdateUser(data.name, data.PhotoUrl)
        .then(()=>{
          console.log('User Profile info update')
          reset();
        })
        .catch((error)=>{
          console.log(error)
        })
        Swal.fire("Success", "User signed up successfully!", "success");
        navigate('/'); // Redirect to a different page after successful signup
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        Swal.fire("Error", "Failed to create user. Please try again.", "error");
      });
  };
  


  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-gray-200 p-16 ">
        <div className="hero-content flex-col lg:flex-row-reverse border-4 shadow-xl shadow-slate-700">
          <div className='p-16'>
            <img className='bg-gray-200' src={img1} alt="" />
          </div>

          <div className="card  p-8  bg-gray-200">
            <div className='text-center '>
              <h1 className='text-2xl font-bold -mb-10 text-black uppercase'>Sign Up</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input type="Name" {...register("Name", { required: true })} placeholder="Type hear" className="input w-80 input-bordered" />
                {errors.Name && <span className='text-red-600'>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo</span>
                </label>
                <input type="PhotoUrl" {...register("PhotoUrl", { required: true })} placeholder="Type hear PhotoUrl" className="input w-80 input-bordered" />
                {errors.PhotoUrl && <span className='text-red-600'>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="Type hear" className="input w-80 input-bordered" />
                {errors.email && <span className='text-red-600'> This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  // maxLength: 20,
                  pattern: /(?=.*[!@#$&*])/,
                })} placeholder="Enter Your Password" className="input input-bordered" />

                {errors.password && <span className='text-red-600'> This field is required </span>}
                {errors.password?.type === "minLength" && (<p className='text-red-600'>Password Must be 6 charactres</p>
                )}
                {errors.password?.type === "maxLength" && (<p className='text-red-600'>Password Must be less then 20 charactres</p>
                )}
                {errors.password?.type === "pattern" && (<p className='text-red-600 '>Password Must be one uppercase letter and one special letter and one digit</p>
                )}
              </div>


              <div className="form-control mt-6">
                <input type="submit" value='Sign Up' className="btn btn-ghost uppercase bg-amber-600" name="" id="" />
              </div>
            </form>
            <div className='text-center items-center space-y-3'>
              <h4>Already registered? <Link className='text-orange-700  font-bold' to='/Login'>Go to log in</Link></h4>
              <h5>Or sign up with</h5>
              <div className='flex justify-center text-3xl gap-8 '>
                <CiFacebook className='text-slate-900' />
                <button >
                  <FaGoogle className='text-slate-900'></FaGoogle>
                </button>
                <FaGithub className='text-slate-900' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;