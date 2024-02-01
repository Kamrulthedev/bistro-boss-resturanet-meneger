import { Helmet } from "react-helmet-async";
import Call from "../../../../Compunents/Call";
import Recomments from "../../../../Compunents/Recomments";
import Banner from "../Banner/Banner";
import Fesard from "../Fesard/Fesard";
import PopulerMeno from "../PoplarMeno/PopulerMeno";
import Testimonials from "../Testimonials/Testimonials";
import Catagory from "./Catagory/Catagory";



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss  | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopulerMeno></PopulerMeno>
            <Call></Call>
            <Recomments></Recomments>
            <Fesard></Fesard>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;