import { Link } from 'react-router-dom';
import img1 from './../../../assets/others/authentication1.png';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  const { createUaer } = useContext(AuthContext);

  const handlerSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUaer(email, password)
      .then((result) => {
        console.log(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }


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
              <h1 className='text-2xl font-bold -mb-10'>Sign Up</h1>
            </div>
            <form onSubmit={handlerSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="Name" placeholder="Type hear" className="input w-80 input-bordered" name='Name' required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Type hear" className="input w-80 input-bordered" name='email' required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Your Password" className="input input-bordered" name='password' required />
              </div>

              <div className="form-control mt-6">
                <input type="submit" value='Sign Up' className="btn btn-ghost uppercase bg-amber-600" name="" id="" />
              </div>
            </form>
            <div className='text-center items-center space-y-3'>
              <h4>Already registered? <Link className='text-orange-700  font-bold' to='/Login'>Go to log in</Link></h4>
              <h5>Or sign up with</h5>
              <div className='flex justify-center text-3xl gap-8 '>
                <CiFacebook />
                <FaGoogle />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;