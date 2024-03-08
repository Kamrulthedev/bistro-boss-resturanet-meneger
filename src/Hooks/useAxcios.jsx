import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSeceur = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
    const navigate = useNavigate()
    const { LogOut } = useAuth();
    //request interceptor to add authorization header for every secure call to teh api
    axiosSeceur.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        console.log('console log by intarsectoes', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
        function (error) {
            //Do something with request error
            return Promise.reject(error);
        });

    //intercapts 401 and 403 status
    axiosSeceur.interceptors.response.use(function (response) {
        return response;
    },async (error) => {
        const status = error.response.status;
        console.log('status error in the interseptor', status)
        if (status === 401 || status === 403) {
            await LogOut();
            navigate('/Login')
        }

        return Promise.reject(error)
    })
    return axiosSeceur;
};

export default useAxios;
