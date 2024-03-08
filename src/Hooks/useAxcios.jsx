import axios from "axios";

 const axiosSeceur = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
    axiosSeceur.interceptors.request.use(function(config){
        console.log('console log by intarsectoes')
        return config;
    },
    function(error){
        //Do something with request error
        return Promise.reject(error);
    })
    return axiosSeceur;
};

export default useAxios;
