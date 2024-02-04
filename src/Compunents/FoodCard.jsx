

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute right-0 mr-4 mt-4 px-4 text-2xl font-bold text-white bg-black">$: {price}</p>
            <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                <h1 className="text-center">{recipe}</h1>
                <div className="card-actions justify-end">
                    <button className="btn  text-lime-500 uppercase">add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;