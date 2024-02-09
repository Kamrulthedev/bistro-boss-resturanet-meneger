import { useEffect } from 'react';
import img1 from './../../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const Login = () => {

useEffect(()=>{
  loadCaptchaEnginge(6); 

},[])

    const handlerLoginSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }


    const handlerLoginCaptcha = () =>{

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-1/2 flex-col  lg:flex-row-reverse">
         <div>
            <img src={img1} alt="" />
         </div>

          <div className="card md:w-1/2  shadow-2xl bg-base-100">
            <form onSubmit={handlerLoginSubmit} className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
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
                <input type="text"  placeholder="type hear captcha" className="input input-bordered" name='captcha' required />
                <button onClick={handlerLoginCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
              </div>

              <div className="form-control mt-6">
               <input type="submit" value='Login' className="btn btn-ghost" name="" id="" />
              </div>

            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;