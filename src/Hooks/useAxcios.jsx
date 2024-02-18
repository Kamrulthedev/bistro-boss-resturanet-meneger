import axios from "axios";

 const axiosSeceur = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
    return axiosSeceur;
};

export default useAxios;
