import FoodCard from "../../../Compunents/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({item}) => {
    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 p-16">
                        {
                            item.map(item => <FoodCard key={item._id} item={item}>
                            </FoodCard>)
                        }
                    </div>
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