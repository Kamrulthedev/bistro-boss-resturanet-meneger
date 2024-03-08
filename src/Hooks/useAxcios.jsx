import axios from "axios";

 const axiosSeceur = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
    axiosSeceur.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        console.log('console log by intarsectoes', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
    function(error){
        //Do something with request error
        return Promise.reject(error);
    })
    return axiosSeceur;
};

export default useAxios;
