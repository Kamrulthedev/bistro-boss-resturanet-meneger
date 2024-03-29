import { useContext, useEffect, useState } from 'react';
import img1 from './../../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../providers/AuthProviders';
import { Link, useLocation } from 'react-router-dom';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import SocailLogin from '../../../Compunents/SocailLogin/SocailLogin';


const Login = () => {
  const [LoginError, setLoginError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const locations = useLocation();

  const from = locations.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handlerLoginSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        navigate(form);
        console.log('Login successful:', result.user);
        navigate(from, { replace: true });
        Swal.fire({
          title: "Login Successfuly",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster`
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster`
          }
        });
      })
      .catch((error) => {
        console.log('Login error:', error);
        setLoginError(error.message);
        Swal.fire({
          title: "Is Not Valid User",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster`
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster`
          }
        });
      });
  };


  const handlerLoginCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  };


  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign In</title>
      </Helmet>
      <div className="hero min-h-screen bg-gray-200 p-16 ">
        <div className="lg:flex border-4 shadow-xl shadow-slate-700">
          <div className='p-16'>
            <img className='bg-gray-200' src={img1} alt="" />
          </div>

          <div className="card  p-8  bg-gray-200">
            <div className='text-center '>
              <h1 className='text-2xl font-bold -mb-10'>Login</h1>
            </div>
            <form onSubmit={handlerLoginSubmit} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input w-80 input-bordered" name='email' required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handlerLoginCaptcha} type="text" placeholder="type hear captcha" className="input input-bordered" name='captcha' required />
              </div>

              <div className="form-control mt-6">
                <input disabled={disabled} type="submit" value='Sign In' className="btn btn-ghost uppercase bg-amber-700" name="" id="" />
              </div>
            </form>
            <div className='text-center items-center space-y-3'>
              <h1>{LoginError}</h1>
              <h4>  New here? <Link className='text-orange-700  font-bold' to='/SignUp'>Create a New Account</Link></h4>
              <h5>Or sign in with</h5>
           
              <div className='flex justify-center text-3xl gap-8 '>
                <CiFacebook className="text-slate-900"></CiFacebook>
                <SocailLogin></SocailLogin>
                <FaGithub className='text-slate-900'></FaGithub>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;