
const MenuItem = ({item}) => {
    const {_id, name, recipe, image, category, price} = item;


    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h1 className="uppercase">{name}---------------</h1>
                <h2>{recipe}</h2>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>

    );
};

export default MenuItem;