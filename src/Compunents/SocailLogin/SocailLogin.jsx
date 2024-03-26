import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocailLogin = () => {
    const { signInGoogle } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();


    const handlerGoogleLogin = () =>{
      signInGoogle()
      .then( res =>{
        console.log(res.user);
        const userInfo = {
         email: res.user.email,
         name: res.user.displayName
        };
        axiosPublic.post('/users', userInfo)
        .then(res =>{
            console.log(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
        navigate('/');
      })
      .catch(error =>{
        console.log(error)
      })
    };

    return (
        <div>
            <button onClick={handlerGoogleLogin} className="">
                <FaGoogle className='text-slate-900'></FaGoogle>
            </button>
        </div>
    );
};

export default SocailLogin; 