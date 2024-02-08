import PropTypes from 'prop-types';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute right-0 mr-4 mt-4 px-4 text-2xl font-bold text-white bg-black">$: {price}</p>
            <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                <h1 className="text-center">{recipe}</h1>
                <div className="card-actions flex flex-col items-center">
                    <button className="btn text-lime-500 uppercase bg-slate-600">add to card</button>
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
      // Add other properties of your 'item' object with their respective PropTypes
    }).isRequired,
  };
  
export default FoodCard;