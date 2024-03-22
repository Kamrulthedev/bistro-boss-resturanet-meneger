import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { FaVectorSquare } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import Title from '../Saherd/Title/Title';


const Testimonials = () => {

    const [reviwes, setReviws] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviws(data))

    }, [])

    return (
        <div>
            <Title subcontitle={'---What Our Clients Say---'} subconLocation={'TESTIMONIALS'}></Title>
            

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mb-16">
                    {
                        reviwes.map(reviwe => <SwiperSlide key={reviwe._id}>
                            <div className='m-24'>
                                <div className='flex justify-center -mt-10 mb-10'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={reviwe.rating}
                                        readOnly
                                    />

                                </div>
                                <div className='flex justify-center text-5xl'>
                                    <FaVectorSquare />
                                </div>
                                <p className='py-8'>{reviwe.details}</p>
                                <h3 className='text-2xl text-orange-500 text-center font-semibold'>{reviwe.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;