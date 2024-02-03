import FoodCard from "../../../Compunents/FoodCard";

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

export default OrderTab;