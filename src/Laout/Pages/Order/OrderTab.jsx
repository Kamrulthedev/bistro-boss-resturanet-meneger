import FoodCard from "../../../Compunents/FoodCard";
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ item }) => {
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  // Calculate the number of slides needed based on items and items per slide
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(item.length / itemsPerSlide);

  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        {[...Array(totalSlides)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 p-16">
              {item.slice(index * itemsPerSlide, (index + 1) * itemsPerSlide).map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

OrderTab.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      // Add other properties of your 'item' object with their respective PropTypes
    })
  ).isRequired,
};


export default OrderTab;