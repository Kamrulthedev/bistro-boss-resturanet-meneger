import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img10 from './../../../../../assets/home/slide1.jpg';
import img11 from './../../../../../assets/home/slide2.jpg';
import img12 from './../../../../../assets/home/slide3.jpg';
import img13 from './../../../../../assets/home/slide4.jpg';
import img14 from './../../../../../assets/home/slide5.jpg';
import img15 from './../../../../../assets/home/slide5.jpg';


const Catagory = () => {
    return (
        <>
            <div className='text-center space-y-6 mb-8' >
                <h1 className='text-[#D99904] text-lg '>---From 11:00am to 10:00pm---</h1>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px]'></p>
                <h3 className='text-4xl'>ORDER ONLINE</h3>
                <p className='border  w-[424px] h-[4px] text-center flex-shrink-0 ml-[430px] '></p>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12 ">
                <SwiperSlide><img src={img10} alt="" />
                    <h3 className='text-4xl uppercase text-white -mt-20 text-center '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img11} alt="" />
                    <h3 className='text-4xl uppercase text-white -mt-20 text-center'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img12} alt="" />
                    <h3 className='text-4xl uppercase text-white -mt-20  text-center'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img13} alt="" />
                    <h3 className='text-4xl uppercase text-white -mt-20  text-center'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img14} alt="" />
                    <h3 className='text-4xl uppercase text-white -mt-20  text-center'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img15} alt="" />
                    <h3 className='text-4xl uppercase text-white -mt-20 mb-6 text-center'>Salads</h3>
                </SwiperSlide>
            </Swiper>

           <div className='h-[572px] items-center '>
           <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3sPntbh/chef-service.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=' text-center mb-12 h-[200px] bg-slate-100 p-52'>
                    <div>
                        <h1 className='text-4xl -mt-14 '>Bistro Boss</h1>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum<br /> deserunt  ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at <br /> nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
                </div>
           </div>
            </>
            );
};

            export default Catagory;