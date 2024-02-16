import axios from "axios";

export const axiosSeceur = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
    return axiosSeceur;
};

export default useAxios;
