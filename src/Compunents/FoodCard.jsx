import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
 
    const handlerFoodItem = food => {
        if (user && user.email) {
            // TODO: SEND CARD ITEM TO THE DATABASE
        }
        else {
            Swal.fire({
                title: "You are not Login.?",
                text: "Please Login to add to the cart ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send to the Login Pages..
                     navigate('/Login')
                }
            });
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute right-0 mr-4 mt-4 px-4 text-2xl font-bold text-white bg-black">$: {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h1 className="text-center">{recipe}</h1>
                <div className="card-actions flex flex-col items-center">
                    <button
                        onClick={() => handlerFoodItem(item)}
                        className="btn text-lime-500 uppercase bg-slate-600">add to card</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        recipe: PropTypes.string.isRequired,
    }).isRequired,
};

export default FoodCard;