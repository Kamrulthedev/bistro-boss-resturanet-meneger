import { Link } from "react-router-dom";
import MenuItem from "../../Home/Saherd/Menuitem/MenuItem";
import PropTypes from 'prop-types';


const MenuCatagory = ({ items, title }) => {

    return (
        <div>
            <div className=" grid grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>
                    </MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-6 mb-10">
                <Link to={`/order`}><button className="uppercase btn border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
        </div>
    );
};

MenuCatagory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        // Add other properties of your 'item' object with their respective PropTypes
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string, // assuming 'img' is an optional string prop
  };

export default MenuCatagory;